const initState = {
  themeId: 1,
}

export const themeReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
  switch (action.type) {
    case "SET_THEME_ID":
      return {
        ...state, themeId: action.id
      }
    default:
      return state
  }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const) // fix any

type InitStateType = typeof initState
type ActionsType = ReturnType<typeof changeThemeId>