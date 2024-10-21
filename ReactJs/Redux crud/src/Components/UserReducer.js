import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./data";

 const userSlice = createSlice({
    name:"users",
    initialState:userData,
    reducer:{

        addUser:(state,action)=>{
            state.push(action.payload)

        },


        deleteUser:(state,action)=>{
            const {id}  = action.payload;
            return state.filter(user=>user.id !==id);
        }
        
    }

})
export const {deleteUser,addUser} = userSlice.actions;

export default userSlice.reducer;