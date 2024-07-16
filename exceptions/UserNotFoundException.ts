import { HttpException } from "./HttpException";

export class UserNotFoundException extends HttpException {
    constructor(message?:string, code?:string){
        super(401,message || "Not Found", "NOFOUND_ERROR");
    }
}