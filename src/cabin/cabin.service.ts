import { Injectable } from '@nestjs/common';

import { FileService } from 'src/file/file.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCabinDto, UpdateCabinDto } from 'src/dto';
import { Cabin, CabinFilterType } from 'src/types';

@Injectable()
export class CabinService {
  constructor(
    private prisma: PrismaService,
    private fileService: FileService,
  ) {}
  async getCabins(filter: CabinFilterType): Promise<Cabin[]> {
    if (filter === 'All') return await this.prisma.cabin.findMany();
    if (filter === 'With discount')
      return await this.prisma.cabin.findMany({
        where: {
          discount: { gte: 0 },
        },
      });
    if (filter === 'No discount')
      return await this.prisma.cabin.findMany({
        where: {
          discount: {
            equals: 0,
          },
        },
      });
  }
  async getCabin(id: string): Promise<Cabin> {
    const cabinId = Number(id);
    return await this.prisma.cabin.findUnique({
      where: {
        cabinId,
      },
    });
  }
  async createCabin(
    createCabinDto: CreateCabinDto,
    file: Express.Multer.File,
  ): Promise<Cabin> {
    const data: any = {}; //Partial<Cabin>;
    data.cabinName = createCabinDto.cabinName;

    data.maxCapacity = Number(createCabinDto.maxCapacity);

    data.price = Number(createCabinDto.price);
    data.discount = Number(createCabinDto.discount);
    data.description = createCabinDto.description;
    if (file) {
      const { secure_url: imageUrl } = await this.fileService.uploadImage(file);
      data.imageUrl = imageUrl;
    }
    return await this.prisma.cabin.create({
      data,
    });
  }
  async updateCabin(
    id: string,
    updateCabinDto: UpdateCabinDto,
    file: Express.Multer.File,
  ): Promise<Cabin> {
    const cabinId = Number(id);
    const data: any = {}; //Partial<Cabin>;

    data.cabinName = updateCabinDto.cabinName;

    data.maxCapacity = Number(updateCabinDto.maxCapacity);

    data.price = Number(updateCabinDto.price);
    data.discount = Number(updateCabinDto.discount);
    data.description = updateCabinDto.description;
    if (file) {
      const { secure_url: imageUrl } = await this.fileService.uploadImage(file);
      data.imageUrl = imageUrl;
    }
    return await this.prisma.cabin.update({
      where: {
        cabinId,
      },
      data,
    });
  }
  async deleteCabin(id: string) {
    const cabinId = Number(id);
    return await this.prisma.cabin.delete({
      where: {
        cabinId,
      },
    });
  }
}
