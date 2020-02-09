import { IsNumber, IsOptional, IsString } from 'class-validator';

export class Item {
    @IsNumber() @IsOptional() readonly id: number;
    @IsString() readonly name: string
    @IsString() readonly description: string;
    @IsNumber() readonly price: number;
    @IsString() readonly image: string;
}
