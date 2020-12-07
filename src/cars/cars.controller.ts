import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Car } from 'src/car';
import { Cars } from 'src/cars';
import { CarsService } from './cars.service';
@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }
    @Get()
    async index(): Promise<Cars> {
        return this.carsService.findAll();
    }
    @Get(':id')
    async find(@Param('id') id: number): Promise<Car> {
        return this.carsService.find(id);
    }
    @Post()
    create(
        @Body() Cars: Car) {
        this.carsService.create(Cars);
    }
    @Put()
    update(
        @Body() Cars: Car) {
        this.carsService.update(Cars);
    }
    @Delete(':id')
    delete(
        @Param('id') id: number) {
        this.carsService.delete(id);
    }
}

