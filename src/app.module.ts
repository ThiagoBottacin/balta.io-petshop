import { Module } from '@nestjs/common';
import { BackofficeModule } from './backoffice/backoffice.module';
import { CustomerController } from './backoffice/controllers/customer.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/petshop'),
    BackofficeModule,
  ],
  controllers: [CustomerController],
  providers: [],
})
export class AppModule {}
