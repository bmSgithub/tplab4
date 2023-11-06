//#region User
export interface IUser{
    id: number | null;
    userName:string | null
    email: string;
    password: string;
}
//#endregion

//#region Category
export interface ICategory {
    categoryId: number[];
    exerciseIds: number[];
  }
//#endregion

//#region Exercise Info
export interface IExerciseInfo {
    id: number;
    name: string;
    exercise_base: number;
    description: string;
    category: number;
    image: string;
    video: string;
  }
//#region Exercise
export interface IExercise {
    id: number;
    uuid: string;
    name: string;
    exercise_base: number;
    description: string;
    created: string;
    category: number;
    muscles: number[];
    muscles_secondary: number[];
    equipment: any[]; // You can replace 'any' with a more specific type if needed.
    language: number;
    license: number;
    license_author: string;
    variations: number[];
    author_history: string[];
  }
//#endregion
//#region Exercise Image

export interface IExerciseImage {
    id: number;
    uuid: string;
    exercise_base: number;
    exercise_base_uuid: string;
    image: string;
    is_main: boolean;
    style: string;
    license: number;
    license_title: string;
    license_object_url: string;
    license_author: string;
    license_author_url: string;
    license_derivative_source_url: string;
    author_history: string[];
  }
export interface ExerciseImageList {
    count: number;
    next: null | string;
    previous: null | string;
    results: IExerciseImage[];
  }
//#endregion
//#region Exercise Video
export interface IExerciseVideo {
    id: number;
    uuid: string;
    exercise_base: number;
    exercise_base_uuid: string;
    video: string;
    is_main: boolean;
    size: number;
    duration: string;
    width: number;
    height: number;
    codec: string;
    codec_long: string;
    license: number;
    license_title: string;
    license_object_url: string;
    license_author: string;
    license_author_url: string;
    license_derivative_source_url: string;
    author_history: string[];
  }
  
export interface ExerciseVideoList {
    count: number;
    next: null | string;
    previous: null | string;
    results: IExerciseVideo[];
  }
//#endregion
//#endregion