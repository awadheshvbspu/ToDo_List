import Raect from "react";
import './button.css';
import {AiTwotoneDelete} from 'react-icons/ai'
 
const ToDoList = (props) =>{
    const deleteItems = () =>{
      console.log("deleted");
    };
  return (
    <>
    <div className="todo_style"> 
    <AiTwotoneDelete className ="fa fa-times" color="black" size={30}
    // <i className ="fa fa-times" aria-hidden="true" 
    onClick = {() => {
      props.onSelect(props.id);
    }}/>
  <li> {props.text}</li>
  </div>
  </>
  );
};

export default ToDoList;
