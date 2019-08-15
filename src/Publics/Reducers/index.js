import { combineReducers } from 'redux'

import book from './book'
import donate from './donate'
import  login from './login'
import borrow from './borrow'


const appReducers = combineReducers({
    book,
    donate,
    login,
    borrow,

})

export default appReducers