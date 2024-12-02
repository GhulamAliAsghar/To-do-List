import React, { useEffect, useState } from 'react';


const Todo = () => {

    const [tasks, setTasks] = useState([]);
    const [list, setList] = useState([]);


    const addTask = () => {
        if (tasks === "") {
            alert("Add Something")
        }
        setList((prev) => [...prev, tasks]);
        setTasks("")
    }

    const removeTask = (index) => {
        setList((prev) => prev.filter((_, i) => i !== index));
    }

    useEffect(() => { }, [])

    return (
        <>
            <div>
                <div className='text-center' >
                    <h1>
                        To-do List
                    </h1>
                    <span>
                        <input value={tasks} onChange={(e) => { setTasks(e.target.value) }} type="text" />
                        <button onClick={addTask}>Add</button>
                    </span>
                    <div>
                        <ul className='list-unstyled text-center my-3 m-'>
                            {
                                list.map((item , index) => {
                                    return (
                                        <>
                                            <li key={index}>
                                                <span className='d-flex justify-content-center align-items-center gap-5 my-2'>
                                                    <h5>{item}</h5>
                                                    <button className='btn btn-danger' onClick={() => removeTask(index)}>Remove</button>
                                                </span>
                                            </li>
                                        </>
                                    )
                                })

                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo