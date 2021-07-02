import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DiceDocument = Dice & Document;

@Schema()
export class Dice {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

}

export const DiceSchema = SchemaFactory.createForClass(Dice);
