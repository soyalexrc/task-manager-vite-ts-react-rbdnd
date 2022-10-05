import {createSlice} from '@reduxjs/toolkit';
import {Column, Task} from "@/shared/models/board";

// ----------------------------------------------------------------------

const initialState: any = {
  currentBoard: {
    columns: []
  },
  boards: []
};

const slice = createSlice({
  name: "boards",
  initialState,
  reducers: {

    setCurrentBoard(state, {payload}) {
      state.currentBoard = payload;
    },

    setBoards(state, {payload}) {
      state.boards = payload;
    },

    handleCreateColumn(state, {payload}) {
      const newColumn = {
        title: payload.columnTitle,
        id: (new Date().getTime()).toString(),
        tasks: []
      }
      state.currentBoard.columns.push(newColumn)
    },

    handleCreateTask(state, {payload} ) {
      state.currentBoard.columns[payload.index].tasks.push(payload.task);
    },

    handleDragColumn(state, {payload}) {
      const columnId = payload.columnId;
      const columns = state.currentBoard.columns;
      const currentColumn = columns.filter((column: Column) => column.id === columnId)[0]
      columns.splice(payload.source.index, 1)
      columns.splice(payload.destination.index, 0, currentColumn)

      state.currentBoard.columns = columns;
    },

    handleDragTaskSameColumn(state, {payload}) {
      const columnId = payload.destination.droppableId
      const column = state.currentBoard.columns.filter((column: Column) => column.id === columnId)[0];
      const columnIndex = state.currentBoard.columns.findIndex((column: Column) => column.id === columnId);
      const task = column.tasks.filter((task: Task) => task.id === payload.taskId)[0]
      column.tasks.splice(payload.source.index, 1);
      column.tasks.splice(payload.destination.index, 0, task);
      state.currentBoard.columns[columnIndex] = column;
    },

    handleDragTaskForeignColumn(state, {payload}) {
      const columnSourceId = payload.source.droppableId;
      const columnDestinationId = payload.destination.droppableId;
      const columnSource = state.currentBoard.columns.filter((column: Column) => column.id === columnSourceId)[0];
      const columnDestination = state.currentBoard.columns.filter((column: Column) => column.id === columnDestinationId)[0];
      const columnSourceIndex = state.currentBoard.columns.findIndex((column: Column) => column.id === columnSourceId);
      const columnDestinationIndex = state.currentBoard.columns.findIndex((column: Column) => column.id === columnDestinationId);
      const task = columnSource.tasks.filter((task: Task) => task.id === payload.taskId)[0]
      columnSource.tasks.splice(payload.source.index, 1);
      columnDestination.tasks.splice(payload.destination.index, 0, task);
      state.currentBoard.columns[columnSourceIndex] = columnSource;
      state.currentBoard.columns[columnDestinationIndex] = columnDestination;
    }
  },
});

export const {
  setCurrentBoard,
  setBoards,
  handleDragColumn,
  handleDragTaskSameColumn,
  handleDragTaskForeignColumn,
  handleCreateColumn,
  handleCreateTask
} = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


