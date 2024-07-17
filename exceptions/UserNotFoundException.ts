import { GraphQLError } from "graphql";

export class UserNotFoundException extends GraphQLError {
    status="ERROR";
    message:string;
    extensions :{}
    constructor(message?:string, code?:number){
        super(message || "Not Found");
        this.message=message || "NOT FOUND"
        this.extensions={
            code:code || 301,
            status : this.status
        }
    }
}

