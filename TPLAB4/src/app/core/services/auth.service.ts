import { Injectable } from "@angular/core";
import { User } from "../Models";
import { ApiService } from "./api.service";
import { lastValueFrom } from "rxjs";

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
}
