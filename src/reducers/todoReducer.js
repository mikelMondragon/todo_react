export const todoRreducer = (state = [], action) => {

    switch (action.type) {
        case '[TODO] add todo':
            return [...state, action.payload]

        case '[TODO] delete todo':
            const newState = state.filter(todo => todo.id != action.payload);
            return newState;

        case '[TODO] toggle todo':
            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        default:
            return state
    }

}