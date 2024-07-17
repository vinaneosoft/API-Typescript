
import {UserModel} from "./UserModel";
import {AddressModel} from "./AddressModel";

import { User } from "../pojo/User";


export async function  getAllUsers(){
    const res= await UserModel.find({}).populate("address").exec();
    return res;
}

export async function getUserById(id:number){
    return await UserModel.findOne({_id:id}).populate("address").exec();
}

 export async function addUser(user:User){
    // save / create
    let  AddressDoc=new AddressModel(user.address);
    let  UserDoc=new UserModel(user);
    console.log(typeof AddressDoc);
    UserDoc.address=<any>AddressDoc; // User has Address
    const add=await AddressDoc.save();
    return  await UserDoc.save(); // User + Address
}

export async function updateUser(user:User){
    console.log("in function...");
    
    const filter= {_id:user._id};
    const update=user;
    const filter2= {_id:user.address._id}
    const update2 =user.address
    const UserDoc=await UserModel.findOneAndUpdate(filter,update, {new:true});
    if(UserDoc!=null){
        let AddressDoc=await AddressModel.findOneAndUpdate(filter2,update2, {new:true});
         /*if(AddressDoc==null){
            AddressDoc = new AddressModel(AddressModel.findOne({_id:UserDoc._id}).exec());
        } */
        UserDoc!.address=<any>AddressDoc; 
    }
    return UserDoc;
}
 /*
export async function deleteUserById(id:number){
    const user=await UserModel.findOne({_id:id})
    if(user==null)
        return false
    const addid=user.address;
    await UserModel.deleteOne({_id:id});
    return user;
}



 */