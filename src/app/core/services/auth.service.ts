import { Injectable } from "@angular/core";
import { User } from "../Models";
import { ApiService } from "./api.service";
import { Observable, lastValueFrom } from "rxjs";
import { v4 as uuidv4 } from 'uuid';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private apiService: ApiService){}
    
    public async checkAuthentication(email:string, password: string): Promise<boolean>{
        let users: User[] = [];
        
        try{
            let apiResponse = this.apiService.getUserToAuth(email, password);
            users = await lastValueFrom(apiResponse);
            this.setUser(users[0])
            console.log(users);
        }catch(error){
            console.log(error);
        }
        return users.length == 1;
    }
    
    setUser(user: any) {
        if(this.isLoggedIn()){
          this.logout();
        }
        localStorage.setItem('usertoken', uuidv4());
      }
    
    getUser() {
    const userString = localStorage.getItem('usertoken');
    if(userString)
    return JSON.parse(userString);
    }
    
    isLoggedIn() {
    const userData = localStorage.getItem('usertoken');
    return userData!=null;
    }
    
    logout() {
    localStorage.removeItem('usertoken');
    }

    public VerificarCuenta(email:string):Promise<boolean>{
      return new Promise((resolve,reject) =>{   
        this.apiService.getUsersToRegister(email).subscribe({
        next:(resp)=>{
            if(resp.length == 0)
            {
                resolve (true);
            }
            else
            {
                resolve (false);
            }
        },
        error:(error) => reject(error)
      })
    })
    }

    public VerificarCuenta2(userName:string):Promise<boolean>{
      return new Promise((resolve,reject) =>{   
        this.apiService.getUsersToRegister2(userName).subscribe({
        next:(resp)=>{
            if(resp.length == 0)
            {
                resolve (true);
            }
            else
            {
                resolve (false);
            }
        },
        error:(error) => reject(error)
      })
    })
    }

    public AddUser(user:User):Promise<boolean>
    {
        return new Promise((resolve,reject) => {

            this.apiService.AddUser(user).subscribe({
                next:(resp)=>{
                    if(resp)
                    {
                        resolve(true);
                    }
                    else{
                        resolve(false);
                    }
                },
                
                error:(error) => reject(error)
            })
        })
    }

}
