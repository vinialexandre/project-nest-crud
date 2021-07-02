import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DicesModule } from './dices/dices.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.ndv9w.mongodb.net/test'),
    DicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
