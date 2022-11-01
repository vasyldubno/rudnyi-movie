import defaultContext from "./defaultContext";
import { createContext } from 'react'

const AppContext = createContext()

let reducer = (state, action) => {
  switch(action.type) {
    case 'reset':
      return defaultContext
    case 'setLocale':
      saveToStorage(STORAGE_KEY, action.locale)
      return {...state, locale: action.locale}
    default:
      return state
  }
}