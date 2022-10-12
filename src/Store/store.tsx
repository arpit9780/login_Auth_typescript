import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../Redux/UserReducer'


export const store = configureStore({
  reducer: {
    user : userReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



// import { configureStore }from '@reduxjs/toolkit'
// // import postReducer from '../Redux_Tool/Reducer'

// export const store = configureStore({
//   reducer: {
//     // post : postReducer
// }
//     ,
//     // middleware: getDefaultMiddleware =>
//     // getDefaultMiddleware({
//     //   serializableCheck: false,
//     // }),
  
// })
