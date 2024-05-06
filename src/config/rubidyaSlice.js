import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userProfile:{},
    userSuggestion:[],
}

const rubidyaSlice=createSlice({
    initialState:initialState,
    name:"Rubidya",
    reducers:{
        setProfile:(state,action)=>{
            state.userProfile=action.payload;
            // console.log(state.userProfile);
        },
        setFollowing:(state,action)=>{
            state.userProfile.followingCount=state.userProfile.followingCount+action.payload;
        },
        setUserSuggestion:(state,action)=>{
            state.userSuggestion=action.payload;
        },
        removeFromUserSuggestions:(state,action)=>{
            state.userSuggestion=state.userSuggestion.filter((suggestUser)=>suggestUser._id!==action.payload)
        }
    }
})

export const {setProfile,setFollowing,setUserSuggestion,removeFromUserSuggestions}=rubidyaSlice.actions

export default rubidyaSlice.reducer;