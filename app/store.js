import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './slice/items/itemsSlice'

const store = configureStore({
    reducer: {
        items: itemsReducer
    },
  })


export default store