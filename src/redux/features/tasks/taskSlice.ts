import { RootState } from "@/redux/store";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../../../types";
import { removeUser } from "./userSlice";

interface initialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}
const initialState: initialState = {
  tasks: [
    {
      id: "zwdnbNLixYGarjYsNxPhg",
      isCompleted: false,
      title: "Title",
      description: "Title description",
      priority: "high",
      dueDate: "2025-01-27T18:00:00.000Z",
      asignedTo: null,
    },
  ],
  filter: "all",
};
type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "asignedTo"
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    asignedTo: taskData.asignedTo ? taskData.asignedTo : null,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      console.log(action.payload);
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toogleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.asignedTo === action.payload ? (task.asignedTo = null) : task
      );
    });
  },
});
export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }
};
export const selectFileter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toogleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;
export default taskSlice.reducer;
