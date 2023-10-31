import { IUser } from "./Interface";

export class User implements IUser{
    id: number| null= null;
    email: string = '';
    password: string = '';
  
    constructor(user?:any){
      this.id =  user == undefined ? null : user.id;
      this.email = user == undefined ? '' : user.email;
      this.password = user == undefined ? '' : user.password;
    }
  }