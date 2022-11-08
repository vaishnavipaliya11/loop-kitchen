import { createSlice } from "@reduxjs/toolkit"
import { getAllResturants } from "../features/auth/helpers/getAllResturants"

const initialState ={
    allResturantsData:[]
}

const resturantSlice = createSlice({
    name:"resturants",
    initialState,
    reducers:{},
    extraReducers:{
        [getAllResturants.pending]:(state) =>{
            state.allResturantsData=[]
        },
        [getAllResturants.fulfilled]:(state,{payload}) =>{
            state.allResturantsData=payload
        },
        [getAllResturants.rejected]:(state,{payload}) =>{
            state.allResturantsData=[]
        }

    }
})
export default resturantSlice.reducer