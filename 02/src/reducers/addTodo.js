import {ADD_TODO, TOGGLE_TODO} from '../constants';

const initialState = [{id:1, title: 'And',completed: true},{id:2, title: 'Al',completed: false}];

export default (state = initialState, action) => {
    const {type} = action;
    console.log('!!!', action);

    // console.log('action', action.type);


    switch (action.type) {
        case ADD_TODO: return [
            {title: action.payload, completed: false, id: action.id},...state
        ];

        case TOGGLE_TODO: return (
            state.map((todo) =>
                (todo.id === action.payload) ?
                    {...todo, completed: !todo.completed}
                :  todo
            )
        )

    }

    return state;

}