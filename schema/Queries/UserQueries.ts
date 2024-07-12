
import {getAllUsers} from "../../model/UserImpl";
export const getUsers = async () =>{
   const res= await getAllUsers();
   console.log(res)
   return res;
   
}


   
