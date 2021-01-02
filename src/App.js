import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {decCounter, incCounter, resetCounter, setTodos} from "./redux";


export default function App() {

    const {todos, counter} = useSelector(
        ({counter: {counter}, todos: {todos}}) => ({
            todos, counter
        }));


    const dispatch = useDispatch();

    useEffect(() => {
        fetchToDos()


    }, [])

    const fetchToDos = async () => {

        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        dispatch(setTodos(data));
    }

    const handleInc = () => dispatch(incCounter())
    const handleDec = () => dispatch(decCounter())
    const handleReset = () => dispatch(resetCounter())

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Dec</button>
            <button onClick={handleReset}>Reset</button>

            {todos.map((todo) => (
                <h2>
                    {todo.id} - {todo.title}
                </h2>)
            )}

        </div>
    );
};
