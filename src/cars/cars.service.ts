import { Injectable } from '@nestjs/common';
import { Car } from 'src/car';
import { Cars } from 'src/cars';
@Injectable()
export class CarsService {
    private readonly car:Cars={
        1:{
        id :6968,
        Name :'Mustang',
        Brand :"Ford",
        Production :1998,
        Available : true
   }
};
findAll():Cars{
    return this.car;
}
create (newCar:Car){
    const id = Date.now();
    this.car[id]={...newCar,id};
    
}
find(id: number): Car {
    const car:Car = this.car[id];
    if(!car) throw new Error('No game found.');

    return car;

}
update(Cars: Car){
    if(!this.car[Cars.id])throw new Error ('Nor game foune.');
    this.car[Cars.id] = Cars;
}
delete (id:number){
    const car:Car = this.car[id];
    if(!car) throw new Error('No game found.');
    delete this.car[id];
}
}

