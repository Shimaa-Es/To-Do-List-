import ToDoList from "./ToDoList";
import "./App.css";
export default function App() {
    return (
        <div className="container py-5">
            <h1 className="text-center rounded mb-4 fw-bolder display-1">To Do List</h1>
            <ToDoList />
        </div>
    );
}