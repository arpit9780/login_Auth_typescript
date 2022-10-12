
export interface LoginField {
    name?: string,
    email?: string,
    password?: number | string,
}

export interface LoginReducer {
    person?: any;
    error?: any;
    posts?: any;
    postCrud?:any
  }
  export interface inputFieldPost {
    _id?:any;
    name?: string,
    age?: number,
    city?:string,
  }

  export interface updateFieldPost {
    _id?:any;
    oldName?: string,
    oldAge?: number,
    oldCity?:string,
  }