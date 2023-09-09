import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            let s = [] as UserType[];

            if (action.payload === 'up') {
                s = [...state].sort((a, b) => a.name.localeCompare(b.name));
            } else if (action.payload === 'down') {
                s = [...state].sort((a, b) => b.name.localeCompare(a.name));
            }
            console.log(s)

            return s;
        }
        case 'check': {
            return state.filter((el) => el.age >= action.payload);
        }
        default:
            return state
    }
}
