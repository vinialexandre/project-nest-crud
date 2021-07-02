import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDiceDto } from './dto/create-dice.dto';
import { UpdateDiceDto } from './dto/update-dice.dto';
import { Dice, DiceDocument } from './entities/dice.entity';

@Injectable()
export class DicesService {
  
  constructor(@InjectModel(Dice.name) private diceModel: Model<DiceDocument>) {}

  create(createDiceDto: CreateDiceDto) {
    const user = new this.diceModel(createDiceDto)
    return user.save();
  }

  findAll() {
    return this.diceModel.find();
  }

  findOne(id: string) {
    return this.diceModel.findById(id);
  }

  update(id: string, updateDiceDto: UpdateDiceDto) {
    return this.diceModel.findByIdAndUpdate({
      _id: id
    }, {
      $set: updateDiceDto,
    }, {
      new: true
    })
  }

  remove(id: string) {
    return this.diceModel.deleteOne({ _id: id })
  }
}
