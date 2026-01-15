import { configureStore } from '@reduxjs/toolkit'
import reducer from './Reducer'
import  React from 'react'

const Store = configureStore({
    reducer : {
        products : reducer
    }
  
})

export default Store;
