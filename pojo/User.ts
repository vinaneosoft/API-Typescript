import { Address } from "./Address";

class User{
    constructor(
        public _id=0, 
        public name="", 
        public email="",
        public phone="",
        public address=new Address()
    ){

    }
}