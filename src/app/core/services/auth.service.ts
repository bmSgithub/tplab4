import { Injectable } from "@angular/core";
import { User } from "../Models";
import { ApiService } from "./api.service";
import { Observable, lastValueFrom } from "rxjs";

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
        }catch(error){
            console.log(error);
        }
        return users.length == 1;
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
