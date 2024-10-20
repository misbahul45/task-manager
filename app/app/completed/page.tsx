import { getAllTasksActions } from '@/actions/task.actions'
import DisplayAllPost, { sleep } from '@/components/app/DisplayAllPost'

const page = async() => {
  await sleep()
  const tasks=await getAllTasksActions({completed:true}) as Task[]
  return (
    <div className='flex-1 h-full'>
          <DisplayAllPost tasks={tasks} />
    </div>
  )
}

export default page
