
import { UserNotFoundException } from "../exceptions/UserNotFoundException";
import {getAllUsers, getUserById, addUser, deleteUserById, updateUser} from "../model/UserImpl";
 
export const resolvers ={
   Query:{
      fetchUsers : async () =>{
         const res= await getAllUsers();
        // console.log(res)
         return res;
      },
      getUser : async(parent:any, args:any, context:any)=>{
        // console.log(args._id);
         const res=await getUserById(args._id);
         /* if(res==null)
            throw new Error("USER NOT FOUND"); */
         return res;
      }
   },
   Mutation:{
      addUser : async(parent:any, args:any, context:any)=>{
        // console.log(args);
         const res=await addUser(args.user);
         //console.log(res)
         return res;
      },
      deleteUser : async(parent:any, args:any, context:any)=>{
          //console.log(args);
          const res=await deleteUserById(args._id);
         /*  if(res==false)
            throw new UserNotFoundException("No User Found with given id to delete") */
          return res;
      },
      updateUser : async(parent:any, args:any, context:any)=>{
         // console.log(args);
          const res=await updateUser(args.user);
        //  console.log(res)
          return res;
       }
   }
}

   
