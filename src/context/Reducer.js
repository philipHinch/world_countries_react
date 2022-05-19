export const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            }
        case 'SET_SEARCH_VALUE':
            return {
                ...state,
                searchValue: action.payload
            }
        case 'SET_THEME':
            return {
                ...state,
                isDarkTheme: action.payload
            }
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}