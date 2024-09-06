import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { BookingModule } from './booking/booking.module';
import { CabinModule } from './cabin/cabin.module';

@Module({
  imports: [AuthenticationModule, UserModule, BookingModule, CabinModule],
})
export class AppModule {}
