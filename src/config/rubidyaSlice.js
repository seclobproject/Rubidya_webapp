import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userProfile:{},
    userSuggestion:[],
    walletDetails:{},
    change:0,
    showProfile:false,
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
        },setChange:(state,action)=>{
            state.change=action.payload
        },setShowProfile:(state,action)=>{
            state.showProfile=!state.showProfile
            console.log("clicked");
        }
    }
})

export const {setProfile,setFollowing,setUserSuggestion,removeFromUserSuggestions,setShowProfile}=rubidyaSlice.actions

export default rubidyaSlice.reducer;