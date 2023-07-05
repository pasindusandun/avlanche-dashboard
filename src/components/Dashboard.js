import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Detailcard from './Detailcard';
import Chart from './Chart';
import{useDispatch,useSelector} from 'react-redux'
import Appbar from './Appbar';

const drawerWidth = 220;
const drawerWidthsm = 120;
function Dashboard() {
  const isOpenDrawer = useSelector((state)=>state.HealthStore.isOpenDrawer);
  const [open, setopen] = useState(false)
  useEffect(() => {
    setopen(isOpenDrawer)
  }, [isOpenDrawer])
  return (
    <Box>
      <Appbar/>
      <Stack spacing={2} direction={'column'} 
    marginLeft={{ xs: open ? `${drawerWidthsm}px` : 0, sm: open ? `${drawerWidth}px` : 0, md: open ? `${drawerWidth}px` : 0 }}
    >
       <Detailcard/>
        <Chart/>
        
    </Stack>
    </Box>
    
  )
}

export default Dashboard