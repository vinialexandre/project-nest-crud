import { Module } from '@nestjs/common';
import { DicesService } from './dices.service';
import { DicesController } from './dices.controller';
import { Dice, DiceSchema } from './entities/dice.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dice.name, schema: DiceSchema }])
  ],
  controllers: [DicesController],
  providers: [DicesService]
})
export class DicesModule {}
