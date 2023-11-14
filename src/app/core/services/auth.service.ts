import { Injectable } from "@angular/core";
import { User } from "../Models";
import { ApiService } from "./api.service";
import { v4 as uuidv4 } from 'uuid';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    baseUrl: string = "http://localhost:3000"

    constructor(private apiService: ApiService, private route:Router,private http:HttpClient){}
    private user?:User;

   /*  get currentUser(): User | undefined {
        if (!this.user) return undefined
        return { ...this.user };
      }
 */
    verificarEmailYPass(email:string,password:string)
    {
       this.apiService.getUsers().subscribe(users => {
       const founded = users.find(u => u.email === email && u.password === password)
            if(founded)
             {
                 this.user = founded;
                 localStorage.setItem('token', founded.id!.toString())
                 this.route.navigate(["/home"]);
             }
             else
             {
                alert("El usuario no fue encontrado");
             }
       })
     
    }

    checkStatusAutenticacion(): Observable<boolean> {
        const token = localStorage.getItem('token')
        if (!token) {
          return of(false)
        }
        return this.http.get<User>(`${this.baseUrl}/users/${token}`)
          .pipe(
            tap(u => this.user = u),
            map(u => !!u),
            catchError(err => of(false))
          )
      } 
    
    
   /*  public async checkAuthentication(email:string, password: string): Promise<boolean>{
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
     */
    
   /*  setUser(user: any) {
        if(this.isLoggedIn()){
          this.logout();
        }
        localStorage.setItem('usertoken', uuidv4());
      } */
    
    
    isLoggedIn() {
    const userData = localStorage.getItem('token');
    return userData!=null;
    }
    
    logout() {
    localStorage.removeItem('token');
    this.route.navigate(["/landing"]);
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
