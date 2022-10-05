import { Paper, Button} from "@mui/material";
import {styled} from '@mui/material/styles'
import AddIcon from "@mui/icons-material/Add";

const ContainerList = styled(Paper)(({theme}) => ({
  margin: '1rem .5rem',
  width: 270,
  minWidth: 270,
  height: 'fit-content'

}));

export default function CreateListComponent() {

  return (
    <ContainerList>
      <Button fullWidth variant='contained' startIcon={<AddIcon/>}>
        Add another list
      </Button>
    </ContainerList>
  )
}
