import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weight } from './entities/weight.entity';
import { CreateWeightDto } from './dto/create-weight.dto';
import { UpdateWeightDto } from './dto/update-weight.dto';

@Injectable()
export class WeightService {
  constructor(
    @InjectRepository(Weight)
    private readonly weightRepository: Repository<Weight>,
  ) {}

  async create(createWeightDto: CreateWeightDto): Promise<Weight> {
    const weight = this.weightRepository.create(createWeightDto);
    return this.weightRepository.save(weight);
  }

  async findAll(): Promise<Weight[]> {
    return this.weightRepository.find();
  }

  async findOne(id: number): Promise<Weight> {
    return this.weightRepository.findOneBy({ id });
  }

  async update(id: number, updateWeightDto: UpdateWeightDto): Promise<Weight> {
    await this.weightRepository.update(id, updateWeightDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.weightRepository.delete(id);
  }
}
