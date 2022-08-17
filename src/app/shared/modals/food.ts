export class Foods{
    id!:number;
    price!:number;
    name!:string;
    favourite:boolean=false;
    star:number=0;
    tags?:string[];
    imageURL!:string;
    cooktime!:string;
    origins!:string[];

}