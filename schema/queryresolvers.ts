
import {getAllUsers, getUserById} from "../model/UserImpl";
 
export const resolvers ={
   Query:{
      getUsers : async () =>{
         const res= await getAllUsers();
        // console.log(res)
         return res;
      },
      getUser : async(parent:any, args:any, context:any)=>{
         console.log(args._id);
         const res=await getUserById(args._id);
         console.log(res)
         return res;
      }
   }
}

   
