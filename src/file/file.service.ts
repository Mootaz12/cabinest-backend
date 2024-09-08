import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import * as path from 'path';
import * as fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

@Injectable()
export class FileService {
  constructor() {}

  async uploadImage(file: Express.Multer.File) {
    const filePath = path.resolve(
      __dirname,
      `../../public/assets${file.originalname}`,
    );
    fs.writeFileSync(filePath, file.buffer);
    const res = await cloudinary.uploader.upload(filePath);
    if (res) fs.unlinkSync(filePath);
    return res;
  }
}
