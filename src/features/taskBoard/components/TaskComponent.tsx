import {Box, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Draggable, DraggableProvided, DraggableRubric, DraggableStateSnapshot} from 'react-beautiful-dnd';
import {TaskElement} from '@/shared/models/board'

interface styledProps {
  theme?: any,
  isDragging: boolean
}

const StyledTask = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDragging',
})(({theme, isDragging}: styledProps) => ({
  padding: '.5rem',
  display: 'flex',
  margin: '.5rem 0 ',
  border: '1px solid lightgray',
  backgroundColor: isDragging ? '#fafafa' : 'white',

}));

export default function TaskComponent({task, index}: TaskElement) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot, rubric: DraggableRubric) => (
        <StyledTask
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
        >
          <p>{task.content}</p>
        </StyledTask>
      )}
    </Draggable>

  )
}
