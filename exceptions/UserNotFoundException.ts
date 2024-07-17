import { GraphQLError } from "graphql";

export class UserNotFoundException extends GraphQLError {
    statusText="ERROR";
    message:string;
    extensions :{}
    constructor(message="NOT FOUND", status=500){
        super(message);
        this.message=message
        this.extensions={
            status:status,
            statusText : this.statusText
        }
    }
}

