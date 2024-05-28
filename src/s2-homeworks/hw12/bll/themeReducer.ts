const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitState = initState, action: ActionsType): InitState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeId => ({type: 'SET_THEME_ID', id}) // fix any


// types
export type InitState = {
    themeId: number
}

type ChangeThemeId = {
    type: 'SET_THEME_ID',
    id: number
}

type ActionsType = ChangeThemeId
