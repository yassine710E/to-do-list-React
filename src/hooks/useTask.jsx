import { useEffect, useState } from 'react';

function UseTask() {
    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    };

    useEffect(() => {
        getTasks()
    }, []);

    const addTask = (task_info) => {
        const newTasks = [...tasks, task_info];
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    const deleteTask = (id) => {
        const newTasks = tasks.filter((item) => item.id !== id);
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    const modifyTask = (id, new_task) => {
        const newTasks = tasks.map((item) =>
            item.id === id ? { ...item, task: new_task } : item
        );
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    return { tasks, addTask, deleteTask, modifyTask };
}

export default UseTask;
