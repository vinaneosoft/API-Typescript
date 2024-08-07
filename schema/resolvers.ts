
import { GraphQLError } from "graphql";
import { UserNotFoundException } from "../exceptions/UserNotFoundException";
import {getAllUsers, getUserById, addUser, updateUser, deleteUserById} from "../model/UserImpl";
 
export const resolvers ={
   Query:{
      fetchUsers : async () =>{
         const res= await getAllUsers();
         return res;
      },
      getUser : async(parent:any, args:any, context:any)=>{
         const res=await getUserById(args._id);
         if(res==null)
               throw new UserNotFoundException(`User with id ${args._id} Not Found`)
         return res;
      }
   },
    Mutation:{
      addUser : async(parent:any, args:any, context:any)=>{
         console.log(args);
         const res=await addUser(args.user);
         return res;
      },
      deleteUser : async(parent:any, args:any, context:any)=>{
          const res=await deleteUserById(args._id);
          if(res==null)
            throw new UserNotFoundException(`User with id ${args._id} Not Found`)
          return res;
      },
      updateUser : async(parent:any, args:any, context:any)=>{
          const res=await updateUser(args.user);
          if(res==null)
            throw new UserNotFoundException(`User with id ${args.user._id} Not Found`)
         else if(res.address==null)
            throw new GraphQLError("Address Not Found for Updating");
          return res;
       } 
   } 
}

   
