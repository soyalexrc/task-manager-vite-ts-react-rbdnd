import {useEffect} from 'react';
import {Box} from "@mui/material";
import ListComponent from "./ListComponent";
import {DragDropContext, Droppable, DroppableProvided, DroppableStateSnapshot} from 'react-beautiful-dnd'
import useDragDrop from "../hooks/useDragDrop";
import {Column} from "@/shared/models/board";
import CreateListComponent from "@/features/taskBoard/components/CreateListComponent";

const initialData = {
  columns: [
    {
      id: 'column-1',
      title: 'Sample column',
      tasks: [
        {id: 'taskOne', content: 'Task 1'},
        {id: 'taskTwo', content: 'Task 2'},
        {id: 'taskThree', content: 'Task 3'},
        {id: 'taskFour', content: 'Task 4'},
        {id: 'taskOnea', content: 'Task 1'},
        {id: 'taskTwoa', content: 'Task 2'},
        {id: 'taskThreea', content: 'Task 3'},
        {id: 'taskFoura', content: 'Task 4'},
        {id: 'taskOned', content: 'Task 1'},
        {id: 'taskTwod', content: 'Task 2'},
        {id: 'taskThreed', content: 'Task 3'},
        {id: 'taskFourd', content: 'Task 4'},
        {id: 'taskOnef', content: 'Task 1'},
        {id: 'taskTwof', content: 'Task 2'},
        {id: 'taskThreef', content: 'Task 3'},
        {id: 'taskFourf', content: 'Task 4'},
      ]
    },
    {
      id: 'column-2',
      title: 'Sample column 2',
      tasks: [
        {id: 'taskOne2', content: 'Task 1'},
        {id: 'taskTwo2', content: 'Task 2'},
        {id: 'taskThree2', content: 'Task 3'},
        {id: 'taskFour2', content: 'Task 4'},
      ]
    },
    {
      id: 'column-3',
      title: 'Sample column 3',
      tasks: [
      ]
    },

  ]
}

export default function BoardComponent() {
  const {dragTask, setBoard, currentBoard} = useDragDrop()

  useEffect(() => {
    setBoard(initialData)
  }, [])

  return (
    <DragDropContext
      onDragEnd={dragTask}
    >
      <Droppable droppableId='all-columns' direction='horizontal' type='column'>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <Box
            sx={{
              display: 'flex',
              overflowX: 'auto',
          }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {
              currentBoard && currentBoard.columns?.length > 0 &&
              currentBoard.columns.map((column: Column, index: number) =>
                <ListComponent key={column.id} column={column} index={index} />)
            }
            {provided.placeholder}

            <CreateListComponent />
          </Box>
        )}
      </Droppable>

    </DragDropContext>

  )
}
