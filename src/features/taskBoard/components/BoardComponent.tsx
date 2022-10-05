import {useEffect} from 'react';
import {Box} from "@mui/material";
import ListComponent from "./ListComponent";
import {DragDropContext, Droppable, DroppableProvided, DroppableStateSnapshot} from 'react-beautiful-dnd'
import useDragDrop from "../hooks/useDragDrop";
import {Column} from "@/shared/models/board";
import CreateListComponent from "@/features/taskBoard/components/CreateListComponent";


export default function BoardComponent() {
  const {dragTask, setBoard, currentBoard} = useDragDrop()

  return (
    <DragDropContext
      onDragEnd={dragTask}
    >
      <Droppable droppableId='all-columns' direction='horizontal' type='column'>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
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
