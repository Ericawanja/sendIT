import { configureStore } from "@reduxjs/toolkit"

import user from "./slices/user.slice"
import parcels from "./slices/userParcels.slice"
import adminData from "./slices/admin.slice"

const store = configureStore({reducer:{
    user,
    parcels,
    adminData
}})

export default store