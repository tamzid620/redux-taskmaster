import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Work",
      priority: "High",
    },
  ],
  userAssignedTasks: [],
};

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    // addTask reducer --------------------
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    // removeTask reducer --------------------
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    // updateStatus reducer --------------------
    updateStatus: (state, { payload }) => {
      const task = state.tasks.find((item) => item.id === payload.id);
      if (task) {
        task.status = payload.status;
      }
    },
    // userTasks reducer --------------------
    userTasks: (state, { payload }) => {
      state.userAssignedTasks = state.tasks.filter((item) => item.assignedTo === payload);
    },    
  },
});
export const { addTask, removeTask, updateStatus ,userTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
