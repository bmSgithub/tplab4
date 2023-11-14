import { IUser, IExercise, IExerciseImage, IExerciseVideo, IExerciseInfo, ICategory  } from "./Interface";

//#region User
export class User implements IUser{
    id: number| null= null;
    userName: string | null;
    email: string = '';
    password: string = '';
    favourites: number[] = []
  
    constructor(user?:any){
      this.id =  user == undefined ? null : user.id;
      this.userName = user == undefined ? null : user.id;
      this.email = user == undefined ? '' : user.email;
      this.password = user == undefined ? '' : user.password;
      this.favourites = user == undefined ? '' : user.favourites;
    }
  
  }

  //#endregion 

//#region Category
export class Category implements ICategory{
    categoryId: number[] = [];
    exerciseIds: number[] = [];
  
    constructor(categoryData?: any) {
        this.categoryId = categoryData.categoryId || [];
        this.exerciseIds = categoryData.exerciseIds || [];
    }
  }
//#endregion

//#region Exercise Info
export class ExerciseInfo implements IExerciseInfo {
  id: number;
  name: string;
  exercise_base: number;
  description: string;
  category: number;
  image: string;
  video: string;
  favourite: boolean;

  constructor(exerciseInfoData?: any){
    this.id = exerciseInfoData?.id || 0;
    this.name = exerciseInfoData?.name || '';
    this.exercise_base = exerciseInfoData?.exercise_base || 0;
    this.description = exerciseInfoData?.description || '';
    this.category = exerciseInfoData?.category || 0;
    this.image = exerciseInfoData?.image || '';
    this.video = exerciseInfoData?.video || '';
    this.favourite = exerciseInfoData?.favourite || false;
  }
}

//#region Exercise
  export class Exercise implements IExercise{
    id: number;
    uuid: string;
    name: string;
    exercise_base: number;
    description: string;
    created: string;
    category: number;
    muscles: number[];
    muscles_secondary: number[];
    equipment: any[];
    language: number;
    license: number;
    license_author: string;
    variations: number[];
    author_history: string[];
  
    constructor(exerciseData?: any) {
      this.id = exerciseData?.id || 0;
      this.uuid = exerciseData?.uuid || '';
      this.name = exerciseData?.name || '';
      this.exercise_base = exerciseData?.exercise_base || 0;
      this.description = exerciseData?.description || '';
      this.created = exerciseData?.created || '';
      this.category = exerciseData?.category || 0;
      this.muscles = exerciseData?.muscles || [];
      this.muscles_secondary = exerciseData?.muscles_secondary || [];
      this.equipment = exerciseData?.equipment || [];
      this.language = exerciseData?.language || 0;
      this.license = exerciseData?.license || 0;
      this.license_author = exerciseData?.license_author || '';
      this.variations = exerciseData?.variations || [];
      this.author_history = exerciseData?.author_history || [];
    }
  }

  export class ExerciseList {
    count: number;
    next: null | string;
    previous: null | string;
    results: Exercise[];
  
    constructor(exerciseListData?: any) {
      this.count = exerciseListData?.count || 0;
      this.next = exerciseListData?.next || null;
      this.previous = exerciseListData?.previous || null;
      this.results = exerciseListData?.results.map(
        (result: any) => new Exercise(result)
      ) || [];
    }
  }
//#endregion

//#region Exercise Image
export class ExerciseImage implements IExerciseImage{
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

  constructor(exerciseImageData?: any) {
    this.id = exerciseImageData?.id || 0;
    this.uuid = exerciseImageData?.uuid || '';
    this.exercise_base = exerciseImageData?.exercise_base || 0;
    this.exercise_base_uuid = exerciseImageData?.exercise_base_uuid || '';
    this.image = exerciseImageData?.image || '';
    this.is_main = exerciseImageData?.is_main || false;
    this.style = exerciseImageData?.style || '';
    this.license = exerciseImageData?.license || 0;
    this.license_title = exerciseImageData?.license_title || '';
    this.license_object_url = exerciseImageData?.license_object_url || '';
    this.license_author = exerciseImageData?.license_author || '';
    this.license_author_url = exerciseImageData?.license_author_url || '';
    this.license_derivative_source_url = exerciseImageData?.license_derivative_source_url || '';
    this.author_history = exerciseImageData?.author_history || [];
  }
}
export class ExerciseImageList {
  count: number;
  next: null | string;
  previous: null | string;
  results: ExerciseImage[];

  constructor(exerciseImageListData?: any) {
    this.count = exerciseImageListData?.count || 0;
    this.next = exerciseImageListData?.next || null;
    this.previous = exerciseImageListData?.previous || null;
    this.results = exerciseImageListData?.results.map(
      (result: any) => new ExerciseImage(result)
    ) || [];
  }
}
//#endregion

//#region ExerciseVideo
export class ExerciseVideo implements IExerciseVideo{
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

  constructor(exerciseVideoData?: any) {
    this.id = exerciseVideoData?.id || 0;
    this.uuid = exerciseVideoData?.uuid || '';
    this.exercise_base = exerciseVideoData?.exercise_base || 0;
    this.exercise_base_uuid = exerciseVideoData?.exercise_base_uuid || '';
    this.video = exerciseVideoData?.video || '';
    this.is_main = exerciseVideoData?.is_main || false;
    this.size = exerciseVideoData?.size || 0;
    this.duration = exerciseVideoData?.duration || '';
    this.width = exerciseVideoData?.width || 0;
    this.height = exerciseVideoData?.height || 0;
    this.codec = exerciseVideoData?.codec || '';
    this.codec_long = exerciseVideoData?.codec_long || '';
    this.license = exerciseVideoData?.license || 0;
    this.license_title = exerciseVideoData?.license_title || '';
    this.license_object_url = exerciseVideoData?.license_object_url || '';
    this.license_author = exerciseVideoData?.license_author || '';
    this.license_author_url = exerciseVideoData?.license_author_url || '';
    this.license_derivative_source_url = exerciseVideoData?.license_derivative_source_url || '';
    this.author_history = exerciseVideoData?.author_history || [];
  }
}
export class ExerciseVideoList {
  count: number;
  next: null | string;
  previous: null | string;
  results: ExerciseVideo[];

  constructor(exerciseVideoListData?: any) {
    this.count = exerciseVideoListData?.count || 0;
    this.next = exerciseVideoListData?.next || null;
    this.previous = exerciseVideoListData?.previous || null;
    this.results = exerciseVideoListData?.results.map(
      (result: any) => new ExerciseVideo(result)
    ) || [];
  }
}
//#endregion
//#endregion