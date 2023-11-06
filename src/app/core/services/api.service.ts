import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Category, User, Exercise, ExerciseImage, ExerciseInfo, ExerciseVideo, ExerciseList, ExerciseImageList, ExerciseVideoList } from '../Models';
import { API_ENDPOINTS } from './api.endpoints';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  //#region Users
  getUserToAuth(email:string, password: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}&password=${password}`);
  }

  public getUsersToRegister2(UserName:string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?userName=${UserName}`);
  }
  public getUsersToRegister(email:string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }

  public AddUser(user:User): Observable<boolean>{
    return this.http.post(`${this.baseUrl}/users`,user).pipe(
      map(resp=>{return true}),
      catchError(error => of(false))
    );
  }


  //#endregion

  //#region Get exercises
  getCategoryDataByCategoryId(categoryId: number): Observable<Category> {
    return this.http.get<Category[]>(`${this.baseUrl}/allowedexercises`).pipe(
      map((categories: Category[]) => categories.find(category => category.categoryId.includes(categoryId)) || new Category())
    );
  }

  shuffleArray(array: number[]): number[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  getRandomExerciseIds(categoryData: Category, count: number): number[] {
    if (!categoryData || count <= 0) {
      return [];
    }
  
    const shuffledExerciseIds = this.shuffleArray(categoryData.exerciseIds);
    return shuffledExerciseIds.slice(0, Math.min(count, shuffledExerciseIds.length));
  }

  
  //#endregion

  //#region Get Exercise Info
  getExercise(baseId: number): Observable<Exercise> {
    return this.http.get<ExerciseList>(`${API_ENDPOINTS.exercise}${baseId}`).pipe(
      map(exerciseList => exerciseList.results[0])
    );
  }

  getExerciseImage(baseId: number): Observable<ExerciseImage> {
    return this.http.get<ExerciseImageList>(`${API_ENDPOINTS.exerciseImage}${baseId}`).pipe(
      map(exerciseImageList => exerciseImageList.results[0])
    );
  }

  getExerciseVideo(baseId: number): Observable<ExerciseVideo> {
    return this.http.get<ExerciseVideoList>(`${API_ENDPOINTS.video}${baseId}`).pipe(
      map(exerciseVideoList => exerciseVideoList.results[0])
    );
  }
  
  //#endregion
}