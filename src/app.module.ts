import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { BookingModule } from './booking/booking.module';
import { CabinModule } from './cabin/cabin.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthenticationModule,
    UserModule,
    BookingModule,
    CabinModule,
    PrismaModule,
  ],
})
export class AppModule {}
