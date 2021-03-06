import React from "react";



const Todoitem = props => {
    const {
        index,
        value,
        deleteTodo
    } = props


    return (
        <div  className="row-wrapper">
            <span> Do my homework</span>
            <button onClick = {() => handleOnClickEdit(index, value)}>Edit</button>
            <button onClick = {() => deleteTodo(index)}>Delete</button>
        </div>
    )
}


export default Todoitem