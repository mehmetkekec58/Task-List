// import { Todo } from './model';
export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}
// type Actions =
//     | { type: "add", paload: string }
//     | { type: "remove", paload: number }
//     | { type: "done", paload: number }

// const TodoReducer = (state: Todo[], action: Actions) => {
//     switch (action.type) {
//         case "add":
//             return [...state, { id: Date.now(), todo: action.paload, isDone: false }]
//             break;
//         case "remove":
//             return [state.filter((todo) => todo.id !== action.paload)]
//             break;
//         case "done":
//             return state.map((todo)=>
//             todo.id !== action.paload ? {...todo,isDone:!todo.isDone}:todo
//             )
//             break;
//         default:
//             return state;
//             break;
//     }
// }


// import { useReducer } from "react";
// const ReducerExample = () => {
//     const [state, dispatch] = useReducer(TodoReducer, [])

//     return (
//         <div></div>
//     )
// }