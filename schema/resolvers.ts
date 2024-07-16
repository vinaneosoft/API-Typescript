
import { GraphQLError } from "graphql";
import { UserNotFoundException } from "../exceptions/UserNotFoundException";
import {getAllUsers, getUserById, addUser} from "../model/UserImpl";
 
export const resolvers ={
   Query:{
      fetchUsers : async () =>{
         const res= await getAllUsers();
         return res;
      },
      getUser : async(parent:any, args:any, context:any)=>{
         const res=await getUserById(args._id);
         if(res==null)
               throw new GraphQLError("User Not Found");
         return res;
      }
   },
    Mutation:{
      addUser : async(parent:any, args:any, context:any)=>{
         console.log(args);
         const res=await addUser(args.user);
         return res;
      }
     /*  deleteUser : async(parent:any, args:any, context:any)=>{
          const res=await deleteUserById(args._id);
          return res;
      },
      updateUser : async(parent:any, args:any, context:any)=>{
          const res=await updateUser(args.user);
          return res;
       } */
   } 
}

   
