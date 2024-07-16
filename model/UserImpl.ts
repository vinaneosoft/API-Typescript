
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
    let  UserDoc=new UserModel();
    let  AddressDoc=new AddressModel();
    console.log(typeof AddressDoc);
   // AddressDoc=<any>user.address;
    AddressDoc._id=user.address._id;
    AddressDoc.area=user.address.area;
    AddressDoc.city=user.address.city;
    AddressDoc.pincode=user.address.pincode; 

    UserDoc._id=user._id;
    UserDoc.name=user.name;
    UserDoc.email=user.email;
    UserDoc.phone=user.phone;
    UserDoc.address=<any>AddressDoc; // User has Address
    const add=await AddressDoc.save();
    return  await UserDoc.save();
}
 /*
export async function updateUser(args:any){
    const filter= {_id:args._id};
    const update ={ name :args.name, email : args.email, phone: args.phone};
    const filter2= {_id:args.address._id}
    const update2 ={city :args.address.city, 
        area : args.address.area, 
        pincode: args.address.pincode};
     const AddressDoc=await AddressModel.findOneAndUpdate(filter2,update2, {new:true});
     const UserDoc=await UserModel.findOneAndUpdate(filter,update, {new:true});
     (<unknown>UserDoc!.address)=<unknown>AddressDoc;
     return UserDoc;
}

export async function deleteUserById(id:number){
    const user=await UserModel.findOne({_id:id})
    if(user==null)
        return false
    const addid=user.address;
    await UserModel.deleteOne({_id:id});
    return user;
}



 */