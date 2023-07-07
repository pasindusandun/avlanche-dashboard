import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Detailcard from './Detailcard';
import Chart from './Chart';
import { useDispatch, useSelector } from 'react-redux'
import Appbar from './Appbar';
import { addChartDetails, addhealthDetails, addworkoutProgress } from '../redux/HealthDetailsStore';

const drawerWidth = 220;
const drawerWidthsm = 120;
function Dashboard() {
  const dispatch = useDispatch();
  const isOpenDrawer = useSelector((state) => state.HealthStore.isOpenDrawer);
  const [open, setopen] = useState(false)

  useEffect(() => {
    dispatch(addhealthDetails({
      progress: {
        details: 42, text: "Weekly Progress"
      },
      calories: {
        details: 67, text: "Calaries Burn"
      },
      Diet: {
        details: 5, text: "Diet Programs"
      },
      sleeping: {
        details: 8, text: "sleeping Potency"
      },
      members: {
        details: 974, text: "Total Members"
      }
    }))
    dispatch(addworkoutProgress(81))
    dispatch(addChartDetails({
      runing: {
        data: [65, 59, 80, 81,12, 36, 68, 120,12, 36, 68, 120],
        prec: 45,

      },
      cycling: {
        data:[35, 63, 110, 76,65, 59, 80, 81,12, 36, 68, 120],
        prec: 27,
      },
      yoga: {
        data: [12, 36, 68, 120,35, 63, 110, 76,65, 59, 80, 81],
        prec: 86,
      }
    }))

  }, [])
  useEffect(() => {
    setopen(isOpenDrawer)
  }, [isOpenDrawer])
  return (
    <Box>
      <Appbar />
      <Stack spacing={1} direction={'column'}
        marginLeft={{ xs: open ? `${drawerWidthsm}px` : 0, sm: open ? `${drawerWidth}px` : 0, md: open ? `${drawerWidth}px` : 0 }}
      >
        <Detailcard />
        <Chart />

      </Stack>
    </Box>

  )
}

export default Dashboard