import {Paper, Button, IconButton, Box, TextField, Typography} from "@mui/material";
import {styled} from '@mui/material/styles'
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {useState, useRef, useEffect} from 'react';
import useDragDrop from "@/features/taskBoard/hooks/useDragDrop";

const ContainerList = styled(Paper)(({theme}) => ({
  margin: '1rem .5rem',
  width: 270,
  minWidth: 270,
  height: 'fit-content'
}));


const ContainerCreateList = styled(Paper)(({theme}) => ({
  padding: '1rem',
  margin: '1rem .5rem',
  height: 'fit-content',
  border: '1px solid lightgray',
  backgroundColor: '#ebecf0',
  width: 270,
  minWidth: 270,
}));

export default function CreateListComponent() {
  const [enabledInput, setEnabledInput] = useState<boolean>(false);
  const [listTitle, setListTitle] = useState<string>('')
  const {createColumn} = useDragDrop();

  function crateColumnAndResetState() {
    createColumn(listTitle);
    setListTitle('')
  }

  return (
    <>
      {
        !enabledInput &&
        <ContainerList>
          <Button fullWidth variant='text' startIcon={<AddIcon/>} onClick={() => setEnabledInput(!enabledInput)}>
            Add another list
          </Button>
        </ContainerList>
      }
      {
        enabledInput &&
        <ContainerCreateList>
          <Typography sx={{mb: 1}} fontWeight='bold'>List name</Typography>
          <TextField
            multiline
            minRows={1}
            autoFocus
            sx={{  backgroundColor: 'white', borderRadius: '10px'}}
            color='secondary'
            size='small'
            fullWidth
            placeholder='List title'
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && crateColumnAndResetState()}
            variant="outlined"
          />
          <Box display='flex'  mt={2}>
            <Button
              variant='contained'
              color='error'
              fullWidth
              size='small'
              onClick={() => setEnabledInput(false)}
            >
              Cancelar
            </Button>
            <Button
              variant='contained'
              color='success'
              fullWidth
              size='small'
              disabled={listTitle.length < 1}
              onClick={crateColumnAndResetState}
            >
              Guardar
            </Button>
          </Box>
        </ContainerCreateList>
      }
    </>

  )
}
