export interface Question {
    id:number;
    question:string;
    option:Option[];
    answer:number;
    selected:number;
}

interface Option{
    optionid:number;
    name:string;
}
