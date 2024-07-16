
import {UserModel} from "./UserModel";
import {AddressModel} from "./AddressModel";

export async function  getAllUsers(){
    const res= await UserModel.find({}).populate("address").exec();
    return res;
}

export async function getUserById(id:number){
    return await UserModel.findOne({_id:id}).populate("address").exec();
}

 export async function addUser(args:any){
    // save / create
    const  UserDoc=new UserModel();
    const AddressDoc=new AddressModel();
    AddressDoc._id=args.address._id;
    AddressDoc.area=args.address.area;
    AddressDoc.city=args.address.city;
    AddressDoc.pincode=args.address.pincode; 

    UserDoc._id=args._id;
    UserDoc.name=args.name;
    UserDoc.email=args.email;
    UserDoc.phone=args.phone;
    (<unknown>UserDoc.address)=<unknown>AddressDoc;
    const add=await AddressDoc.save();
    const user= await UserDoc.save();
    return user;
}

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



