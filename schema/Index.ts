import { buildSchema } from "graphql"
export const userschema=buildSchema(`
    
    type Address {
    _id: Int
    area: String
    city: String
    pincode:Int
    }
    
    type User {
    _id: Int!
    name: String!
    email: String!
    phone:String!
    address:Address
    }
    
    type Query{
        getUsers: [User]
    }
`)