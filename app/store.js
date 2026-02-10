import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './slice/items/itemsSlice'
import userReducer from './slice/user/userSlice'

const store = configureStore({
    reducer: {
        items: itemsReducer,
        user: userReducer,
    },
  })


export default store