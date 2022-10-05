import {useState, useEffect} from 'react';
import {Box, Button, Paper} from "@mui/material";
import TaskComponent from "./TaskComponent";
import {styled} from '@mui/material/styles'
import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  Draggable,
  DraggableProvided,
  DraggableRubric,
  DraggableStateSnapshot
} from 'react-beautiful-dnd'
import { TasksList, Task} from '@/shared/models/board'
import AddIcon from "@mui/icons-material/Add";

interface styledProps {
  theme?: any,
  isDraggingOver: boolean
}

const StyledList = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDraggingOver',
})(({theme, isDraggingOver}: styledProps) => ({
  padding: 8,
  flexGrow: 1,
  height: '60vh',
  overflowY: 'auto',
  transition: 'background-color 0.2 ease',
  backgroundColor: isDraggingOver ? 'lightgray' : '#ebecf0'
}));


const ContainerList = styled(Paper)(({theme}) => ({
  margin: '1rem .5rem',
  border: '1px solid lightgray',
  backgroundColor: '#ebecf0',
  width: 270,
  minWidth: 270,

  display: 'flex',
  flexDirection: 'column'
}));

export default function ListComponent({column, index}: TasksList) {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false)
    }
  }, [])

  if (!enabled) return null;

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot, rubric: DraggableRubric) => (
        <ContainerList
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Box p={2} {...provided.dragHandleProps}>
            <p>{column.title}</p>
          </Box>
          <Droppable droppableId={column.id} type='task'>
            {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
              <StyledList
                {...provided.droppableProps}

                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {column.tasks.map((x: Task, i: number) => <TaskComponent key={x.id} task={x} index={i}/>)}
                {provided.placeholder}
              </StyledList>
            )}
          </Droppable>
          <Box p={1}>
            <Button size='small' fullWidth variant='text' startIcon={<AddIcon/>}>
              Add Card
            </Button>
          </Box>
        </ContainerList>

      )}
    </Draggable>
  )
}
