'use server'

import { auth } from "@/util/auth"
import db from "@/util/prisma"
import { revalidatePath } from "next/cache"

export const createTaskActions=async(task:CreateTask)=>{
   try {
    await db.todo.create({
        data:{
            ...task
        }
    })
    revalidatePath('/app')
    if(task.completed){
      revalidatePath('/app/completed')
    }else if(task.important){
      revalidatePath('/app/important')
    }
    return true
   } catch (error) {
    console.log(error)
    return null
   }
}

export const deleteTaskAction=async(id:string)=>{
    try {
        const task=await db.todo.delete({
            where:{
                id
            }
        })
        revalidatePath('/app')
        revalidatePath('/app/now')
        if(task.completed){
          revalidatePath('/app/completed')
        }else if(task.important){
          revalidatePath('/app/important')
        }
    } catch (error) {
        console.log(error)
    }
}


export const getAllTasksActions = async ({ completed, important, date }: { completed?: boolean, important?: boolean, date?: string }) => {
    const session=await auth()
    try {
        let dateFilter: { gte?: Date; lte?: Date } | undefined;
        const today = new Date();
        const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate()); 
        const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999);

        if (date === 'today') {
            dateFilter = { gte: startOfToday, lte: endOfToday };
        }
        const tasks = await db.todo.findMany({
            where: {
                userId: session?.user?.id,
                completed,
                important,
                date: dateFilter
            }
        });
        return tasks;
    } catch (error) {
        console.log(error);
        return error;
    }
};


export const completedTaskAction=async(id:string, completed:boolean)=>{
    try {
        const task=await db.todo.update({
            where:{
                id
            },
            data:{
                completed:!completed
            }
        })
        revalidatePath('/app')
        revalidatePath('/app/now')
        if(task.completed){
          revalidatePath('/app/completed')
        }else if(task.important){
          revalidatePath('/app/important')
        }
    } catch (error) {
        console.log(error)
    }
}