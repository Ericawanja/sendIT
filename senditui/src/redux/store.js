import { configureStore } from "@reduxjs/toolkit"

import user from "./slices/user.slice"
import parcels from "./slices/userParcels.slice"

const store = configureStore({reducer:{
    user,
    parcels
}})

export default store