import {useState} from 'react'
import Page from '../../../shared/components/Page'
import {Box} from "@mui/material";
import TaskBoardDrawerComponent from "../components/TaskBoardDrawerComponent";
import TaskBoardToolbarComponent from "../components/TaskBoardToolbarComponent";
import BoardComponent from "../components/BoardComponent";

export default function TaskBoardComponent() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);

  function handleDrawerChange() {
    setOpenDrawer(!openDrawer);
  }

  return (
    <Page title='Sample board' description='sample board'>
      <Box>
        <TaskBoardDrawerComponent
          open={openDrawer}
          handleDrawerChange={handleDrawerChange}
        />
        <TaskBoardToolbarComponent
          title='sample board title'
          fn={handleDrawerChange}
          isStarred={false}
          view='Board'
          isVisible={true}
          workspace='Sample workspace'
        />
        <BoardComponent />
      </Box>
    </Page>
  )
}
