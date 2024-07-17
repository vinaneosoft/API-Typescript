import { GraphQLError } from "graphql";

export class UserNotFoundException extends GraphQLError {
    statusText="ERROR";
    message:string;
    extensions :{}
    constructor(message?:string, status?:number){
        super(message || "Not Found");
        this.message=message || "NOT FOUND"
        this.extensions={
            status:status || 500,
            statusText : this.statusText
        }
    }
}

