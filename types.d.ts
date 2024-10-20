interface User{
    id:string
    name:string,
    image:string,
    email:string,
}

interface CreateTask{
    userId:string,
    title:string,
    desc:string,
    completed:boolean,
    important:boolean,
    date:string
}

interface Task{
    id:string
    userId:string,
    title:string,
    desc:string,
    completed:boolean,
    important:boolean,
    date:string
}