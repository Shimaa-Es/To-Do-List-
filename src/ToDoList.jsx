import React from "react";
import { useState } from "react";
import "./index.css";
import { IoTrash } from "react-icons/io5";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import Swal from "sweetalert2";
export default function ToDoList() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Go to Work", "Eat Lunch", "Go Home"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "New task added successfully !",
        showConfirmButton: false,
        timer:1200
      });
    }
  }

  function removeTask(index) {
    Swal.fire({
      icon: "question",
      title: "Are you sure?",
      text: "You won't be able to revert this !",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "green",
      confirmButtonText: "Yes, delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        const UpdatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(UpdatedTasks);
        Swal.fire({
          icon: "success",
          title: "Deleted !",
          text: "Task has been deleted.",
          timer:1200,
          showConfirmButton: false,
        });
      }
    });
  }

  function moveTaskUp(index) {
    if(index>0){
      const UpdatedTasks=[...tasks];
      [UpdatedTasks[index], UpdatedTasks[index-1]]=
      [UpdatedTasks[index-1], UpdatedTasks[index]];
      setTasks(UpdatedTasks);
    }
  }

  function moveTaskDown(index) {
    if(index<tasks.length-1){
      const UpdatedTasks=[...tasks];
      [UpdatedTasks[index], UpdatedTasks[index+1]]=
      [UpdatedTasks[index+1], UpdatedTasks[index]];
      setTasks(UpdatedTasks);
    }
  }
  return (
    <div className="to-do-list">
      <div className="input-group px-5 mb-3 ">
        <input
          type="text"
          className="form-control no-outline fs-4"
          placeholder="Add New Task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button rounded " onClick={addTask}>
        < IoMdAddCircle /> Add
        </button>
      </div>
        <ol className="list-group">
            {tasks.map((task, index) => (
            <li className="list-group-item d-flex justify-content-between" key={index}>
                <span className="display-6">{task}</span> 
                <div className="col-4 col-md-4 col-lg-4 d-flex gap-2 justify-content-end" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeTask(index)}
                >
                    <IoTrash />
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => moveTaskUp(index)}
                >
                    <FaArrowAltCircleUp />
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => moveTaskDown(index)}
                >
                    <FaArrowAltCircleDown />
                </button>
                </div>
            </li>
            ))}
        </ol>
    </div>
  );
}
