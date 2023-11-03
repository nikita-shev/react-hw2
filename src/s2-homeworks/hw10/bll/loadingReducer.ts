const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING":
            return { isLoading: action.isLoading }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

type ActionType = LoadingActionType;

type StateType = { isLoading: boolean }