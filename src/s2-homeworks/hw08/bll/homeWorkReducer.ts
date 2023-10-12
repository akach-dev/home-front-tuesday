import {UserType} from '../HW8'

type ActionType =
   | { type: 'sort'; payload: 'up' | 'down' }
   | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort':
      return [...state].sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === 'up' ? -1 : 1
        }
        if (a.name > b.name) {
          return action.payload === 'up' ? 1 : -1
        }
        return 0
      })
    case 'check':

      return state.filter(user => user.age >= action.payload)

    default:
      return state
  }
}
