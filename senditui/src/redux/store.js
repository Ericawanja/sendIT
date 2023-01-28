import { configureStore } from "@reduxjs/toolkit"

import rootReducer from "./slices/user.slice"

const store = configureStore({reducer:rootReducer})

export default store