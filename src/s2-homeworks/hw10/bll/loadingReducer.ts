const initState: IsLoadingType = {
  isLoading: false,
}

export const loadingReducer = (state: IsLoadingType = initState, action: LoadingActionType): IsLoadingType => { // fix any
  switch (action.type) {
    case "CHANGE_LOADING":
      return {
        ...state, isLoading: action.isLoading
      }
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
} as const)

export type IsLoadingType = {
  isLoading: boolean
}