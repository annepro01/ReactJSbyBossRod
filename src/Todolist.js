import React, { useState } from "react";

import Todoitem from "./Todoitem";



const Todolist = () => {
    const [ state, setState ] = useState({
        todo:'',
        isUpdate:false,
        // this array we can put all our task or our todolist
        // this is the storage of our input
        // data source
        todolist: []
    })
      /* DECONSTRUCT */ 
        
        const [edit, setEdit]  = useState ({
            editTodo:'',
            editIndex:''
        })
        const [isUpdate,setIsUpdate] = useState(false)



        const { todo, todolist } = state
        const { editTodo, editIndex } = edit

        const handleOnChangeEdit = (e) => {
            const { name, value } = e.target
            
            setEdit({...edit, [name]: value})
            // setState({todo: '', todo: value})
        }

        handleOnClickEdit = (index, value) => {
            setIsUpdate(true)
            setEdit({editTodo: value, editIndex: index})
        }

        handleOnClickCancel= () => {
            setIsUpdate(false)
        }



        const handleOnChange = (e) => {
            const { name, value } = e.target
            
            setState({...state, todo: value})
            // setState({todo: '', todo: value})
        }


    /* CREATE */ 

        const createTodo = () => {
            const list = todolist // [] -current no input
            list.push(todo) // [] -current + current todo input

            setState({todo:'',todolist: list})
        }
    /* DELETE */ 
        const deleteTodo = (index) => {
            const list = todolist // [] -current no input
            list.splice(index, 1) // [] -current - Index

            setState({todo:'',todolist: list})
        }


     /* UPDATE */     
        const updateTodo = (index) => {
            const list = todolist // [] -current no input
            list[index] = editTodo// [] -current - updated value


            // setState({todo:'',todolist: list}) // you can also use these if therse and text input 
            setState({...state,todolist: list})
        }


    return (
        <>
            <div className="todolist-main">
                <div className="form-wrapper">
                    <input 
                        type="text" 
                        name="todo"
                        placeholder="Create todolist"
                        value={todo}
                        onChange={handleOnChange}     
                    />    
                    <button onClick={createTodo}> ADD</button>
                </div>
                <div className="table-main">
                    <div className="header-wrapper">
                        <span>To Do</span>
                        <span>Action</span>
                    </div>
                    {
                        //when you're looping use key
                        todolist.length ? 
                        todolist.map((value,index) => (
                        <Todoitem
                            key={index}
                            index={index}
                            value={value}
                            deleteTodo={deleteTodo}
                            handleOnClickEdit={handleOnClickEdit}
                        />
                        )
                        // {return (
                        //         <div key={index} className="row-wrapper">
                        //             <span> Do my homework</span>
                        //             <button>Edit</button>
                        //             <button onClick={()=>deleteTodo(index)}>Delete</button>
                        //         </div>
                        //     )}
                        ): <span> NO RECORDS FOUND</span>  
                    }
                    {
                        isUpdate ? 
                            <div className="form-wrapper">
                                <span>Index: {editIndex}</span>
                                <input 
                                type="text" 
                                name="editTodo"
                                placeholder="Update Todo"
                                value={editTodo}
                                onChange={handleOnChangeEdit}     
                                 />    
                               <button onClick={() => updateTodo(editIndex)}> Update</button>
                               <button onClick={handleOnClickCancel}> Cancel</button>
                             </div> : ''
                    }
                </div>
            </div>
        </>    
    )
};
export default Todolist