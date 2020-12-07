import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class Car {
    @IsNumber() readonly id: number
    @IsString() readonly Name : String
    @IsString() readonly Brand : string
    @IsNumber() readonly Production : number
    @IsBoolean() readonly Available : boolean
}
 