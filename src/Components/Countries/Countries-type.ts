

export interface userDataTypes {
    name: string;
    phone_number: number;
    email: string;
} 

 export interface DeleteEvent extends userDataTypes{
    common: number
}

