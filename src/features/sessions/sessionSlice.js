import { createSlice } from "@reduxjs/toolkit";
import { pomodoroData } from "../../data/pomodoroData";

const initialState =  pomodoroData;

const sessionSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {
      startNextSession: (state) => {
        const nextIndex = state.currentSessionIndex + 1;
        if (nextIndex <= state.sessions.length) {
          state.sessions[state.currentSessionIndex].isCurrentMode = false;
          state.sessions[nextIndex].isCurrentMode = true;
          state.currentSessionIndex = nextIndex;
          state.sessions[state.currentSessionIndex].startTimer = true
        }
      },
      resetSessions: (state) => {
        state.sessions.forEach((session, index) => {
          session.isCurrentMode = index === 0 ? true : false;  
          session.startTimer = false;   
        });
        state.currentSessionIndex = 0;
        state.sessions[1].startTimer = true;
      }
    },
  });
  
  export const { startNextSession, resetSessions } = sessionSlice.actions;
  export default sessionSlice.reducer;