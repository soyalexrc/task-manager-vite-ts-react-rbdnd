import {useState, useEffect} from 'react';
import {Box, Button, Paper, Typography, IconButton, TextField} from "@mui/material";
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useDragDrop from "@/features/taskBoard/hooks/useDragDrop";

interface styledProps {
  theme?: any,
  isDraggingOver: boolean
}

const StyledList = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDraggingOver',
})(({theme, isDraggingOver}: styledProps) => ({
  padding: 8,
  flexGrow: 1,
  maxHeight: '60vh',
  overflowY: 'auto',
  transition: 'background-color 0.2 ease',
  backgroundColor: isDraggingOver ? 'lightgray' : '#ebecf0'
}));

const StyledTask = styled(Paper)(({theme}) => ({
  padding: '.5rem',
  margin: '.5rem 0 ',
  border: '1px solid lightgray',
  backgroundColor: 'white'
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
  const [createCard, setCreateCard] = useState<boolean>(false)
  const [cardTitle, setCardTitle] = useState<string>('')
  const {createTask} = useDragDrop()


  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false)
    }
  }, [])

  function createCardAndResetState() {
  //  create card
    createTask({
      id: (new Date().getTime()).toString(),
      content: cardTitle
    }, index)
    setCardTitle('')
  }

  if (!enabled) return null;

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot, rubric: DraggableRubric) => (
        <ContainerList
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Box p={2} {...provided.dragHandleProps} display='flex' alignItems='center' justifyContent='space-between'>
            <Typography fontWeight='bold'>{column.title}</Typography>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Box>
          <Droppable droppableId={column.id} type='task'>
            {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
              <StyledList
                {...provided.droppableProps}

                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {column.tasks.map((x: Task, i: number) => <TaskComponent key={x.id} task={x} index={i}/>)}
                {
                  createCard &&
                  <>
                    <Typography sx={{m: 1}} fontWeight='bold'>Card title</Typography>

                    <TextField
                      autoFocus
                      multiline
                      minRows={1}
                      sx={{  backgroundColor: 'white', borderRadius: '10px'}}
                      color='secondary'
                      size='small'
                      fullWidth
                      placeholder='Card title'
                      value={cardTitle}
                      onChange={(e) => setCardTitle(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && createCardAndResetState()}
                      variant="outlined"
                    />
                  </>
                }
                {provided.placeholder}
              </StyledList>
            )}
          </Droppable>
          <Box p={1}>

            {
              !createCard &&
              <Button size='small' fullWidth variant='text' startIcon={<AddIcon/>} onClick={() => setCreateCard(!createCard)}>
                Add Card
              </Button>
            }
            {
              createCard &&
              <Box display='flex'  mt={2}>
                <Button
                  variant='contained'
                  color='error'
                  fullWidth
                  size='small'
                  onClick={() => setCreateCard(false)}
                >
                  Cancelar
                </Button>
                <Button
                  variant='contained'
                  color='success'
                  fullWidth
                  size='small'
                  disabled={cardTitle.length < 1}
                  onClick={createCardAndResetState}
                >
                  Guardar
                </Button>
              </Box>
            }
          </Box>
        </ContainerList>

      )}
    </Draggable>
  )
}
