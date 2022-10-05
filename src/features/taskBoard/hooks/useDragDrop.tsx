import React from 'react';
import {
  setCurrentBoard,
  handleDragTaskSameColumn,
  handleDragTaskForeignColumn,
  handleDragColumn,
  handleCreateColumn,
  handleCreateTask
} from '@/store/slices/boards';
import {useSelector, useDispatch} from "@/store";
import {DropResult} from "react-beautiful-dnd";
import {Task} from "@/shared/models/board";

export default function useDragDrop() {
  const {currentBoard} = useSelector((state: any) => state.boards)
  const dispatch = useDispatch();

  function setBoard(board: any) {
    dispatch(setCurrentBoard(board))
  }

  function createColumn(columnTitle: string) {
    dispatch(handleCreateColumn({columnTitle}))
  }

  function createTask(task: Task, index: number) {
    dispatch(handleCreateTask({task, index}))
  }

  function dragTask(result: DropResult) {
    const {destination, source, draggableId, type} = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (type === 'task') {
      if (destination.droppableId === source.droppableId) {
        dispatch(handleDragTaskSameColumn({destination, source, taskId: draggableId}))
      } else {
        dispatch(handleDragTaskForeignColumn({destination, source, taskId: draggableId}))
      }
    }

    if (type === 'column') {
      dispatch(handleDragColumn({destination, source, columnId: draggableId}))
    }
  }

  return {
    currentBoard,
    setBoard,
    dragTask,
    createColumn,
    createTask
  }
}
