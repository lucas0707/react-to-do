import {createActions, createReducer} from 'reduxsauce';

export const { Types, Creators } = createActions({
    addTodo: ['text'],
});

// export const Types = {
//     ADD: "todos/ADD_TODO",
// };

const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => [
    ...state,
    {
        id: Math.random(),
        text: action.text,
    }
];

// export default function todos(state = INITIAL_STATE, action) {
//     switch(action.type) {
//         case Types.ADD:
//             return [ ...state, {
//                 id: Math.random(),
//                 text: action.text,
//                 }]
//         default:
//             return state;
//     }
// }

// export const Creators = {
//     addTodo: (text) => ({
//         type: Types.ADD,
//         text,        
//     })
// }

export default createReducer(INITIAL_STATE, {
    [Types.ADD_TODO]: add,
})