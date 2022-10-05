import {Button, Box, TextField, IconButton, Avatar} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StarIcon from '@mui/icons-material/Star';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import BoltIcon from '@mui/icons-material/Bolt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface props {
  fn(): void,

  title: string,
  isStarred: boolean,
  workspace: string,
  view: string,
  isVisible: boolean
}

export default function TaskBoardToolbarComponent({fn, title, isStarred, workspace, view, isVisible}: props) {
  return (
    <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-between'>
      <Box display='flex'>
        <IconButton color='primary' sx={{m: 1}} onClick={() => fn()}>
          <KeyboardArrowRightIcon/>
        </IconButton>
        <Button size='small' variant="text" endIcon={<ArrowDropDownIcon/>}>
          {view}
        </Button>
        <TextField
          sx={{m: 1}}
          color='secondary'
          size='small'
          placeholder='Board name'
          value={title}
          variant="outlined"
        />
        <IconButton sx={{p: 1}}>
          {isStarred ? <StarIcon/> : <StarBorderIcon/>}
        </IconButton>

        <Button sx={{p: 1}} size='small' variant="text">
          {workspace}
        </Button>

        <Button sx={{m: 1}} size='small' variant="text" startIcon={<PeopleAltIcon/>}>
          Workspace visible
        </Button>
        {/*lista de personas en el tablero*/}
        <Avatar
          sx={{m: 1}}
          alt="sample avatar"
          src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
        />

        <Button sx={{m: 1}} size='small' variant="text" startIcon={<GroupAddIcon/>}>
          Share
        </Button>
      </Box>

      <Box>
        <Button sx={{m: 1}} size='small' variant="text" startIcon={<BoltIcon/>}>
          Automation
        </Button>
        <Button sx={{m: 1}} size='small' variant="text" startIcon={<RocketLaunchIcon/>}>
          Power-Ups
        </Button>
        <Button sx={{m: 1}} size='small' variant="text" startIcon={<FilterListIcon/>}>
          Filter
        </Button>
        <Button sx={{m: 1}} size='small' variant="text" startIcon={<MoreHorizIcon/>}>
          Show menu
        </Button>
      </Box>

    </Box>
  )
}
