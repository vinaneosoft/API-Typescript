import { Address } from "./Address";

export class User{
    constructor(
        public _id=0, 
        public name="", 
        public email="",
        public phone="",
        public address=new Address()
    ){

    }
}