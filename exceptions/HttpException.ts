import { GraphQLError } from "graphql"

export class HttpException extends GraphQLError{
    status:number;
    message:string;
    extensions :{}
    constructor(status:number, message:string, code?:string){
        super(message);
        this.message=message;
        this.status=status;
        this.extensions={
            code:code,
            status:status
        }
    }
}