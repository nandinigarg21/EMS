import React, { useContext } from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'


const TaskList = () => {
    const {tasks} = useContext(AuthContext)
    if (!tasks) return <div>Loading...</div>;
    return (
        // <div id='tasklist' className='overflow-auto w-full h-[55%]  mt-10 flex gap-5 py-10 flex-nowrap justify-start items-center'>
        //     {data.tasks.map((elem, idx) => {
        //         if (elem.active) {
        //             return <AcceptedTask key={idx} data={elem} />
        //         }
        //         if (elem.newTask) {
        //             return <NewTask key={idx} data={elem} />
        //         }
        //         if (elem.completed) {
        //             return <CompletedTask key={idx} data={elem} />
        //         }
        //         if (elem.failed) {
        //             return <FailedTask key={idx} data={elem} />
        //         }
        //     })}
        // </div>
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-5 ">
            <div id='tasklist' className='overflow-auto w-full h-[55%]  mt-10 flex gap-5 py-10 flex-nowrap justify-start items-center'>
                {tasks.map((elem, idx) => {
                    if(elem.newTask){
                        return <NewTask data={elem} key={idx}/>
                    }
                    if(elem.active){
                        return <AcceptedTask data={elem} key={idx}/>
                    }
                    if(elem.completed){
                        return <CompletedTask data ={elem} key={idx}/>
                    }
                    if(elem.failed){
                        return <FailedTask data ={elem} key={idx}/>
                    }
                })}
            </div>
        </div>
    )
}

export default TaskList
