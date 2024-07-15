var graphql= require("graphql");
const User=require("../Types/UserType");

const { 
    GraphQLInt, 
    GraphQLString,
    GraphQLInputObjectType
} = graphql;
const AddressInputType = new GraphQLInputObjectType({
    name: 'AddressInput',
    fields: () => ({
        _id: { type: GraphQLInt},
        area: { type: GraphQLString },
        city: { type: GraphQLString },
        pincode: { type: GraphQLInt },
    }),
  });

const USER_ADD={
    type:User,
    args:{
        _id:{type:GraphQLInt}, // new id
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString},
        address:{type:AddressInputType}
    },
    resolve:async (parent,args, context)=>{    
    
        const res= await context.mycontext.addUser(args)
        console.log(res);
        return res;
    }
}    

const USER_UPDATE={
    type:User,
    args:{
        _id:{type:GraphQLInt}, // existing
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString},
        address:{type:AddressInputType}
    },
    resolve:async (parent,args,context)=>{    
        const res= await context.mycontext.updateUser(args)
        return res;
    }
}   

const USER_DELETE={
    type:User,
    args:{
        _id:{type:GraphQLInt} // existing
    },
    resolve:async (parent,args,context)=>{    
        const res= await context.mycontext.deleteUserById(args._id)
        return res;
    }
}   
module.exports={USER_ADD, USER_UPDATE, USER_DELETE};