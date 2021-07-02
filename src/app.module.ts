import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DicesModule } from './dices/dices.module';
import { DicesController } from './dices/dices.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo:27017/nest', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }), DicesModule],
  controllers: [AppController, DicesController],
  providers: [AppService],
})
export class AppModule {}
