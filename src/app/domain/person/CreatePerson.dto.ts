import {IsEmail, Length, Min, Max, IsInt} from 'class-validator';

import type { IPerson } from './Person.types';

export class CreatePerson implements Omit<IPerson, "id">{
   @Length(2, 20)
   name: string;

   @IsEmail()
   email: string;

   @IsInt()
   @Min(18)
   @Max(99)
   age: number;

   constructor(n: string, e: string, a: number) {
       this.age = a;
       this.email = e;
       this.name = n;
   };
};