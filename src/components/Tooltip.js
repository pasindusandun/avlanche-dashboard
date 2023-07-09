import { Box, Card, Typography } from '@mui/material'
import React, { useState } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ArrowLeftSharp } from '@mui/icons-material';
function Tooltip() {
  //  const [notifications, setNotifications] = useState([{
  //   time:"",
  //   text:''
  //  }]);
  return (
    <Box sx={{ backgroundColor: 'white' }} padding={0} margin={0}>
      <Timeline sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}  >

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#6CC51D' }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent > <Box display={'flex'} sx={{ justifyContent: 'left' }}>
            <ArrowLeftSharp sx={{  color: '#6CC51D'}} fontSize='small' />
          <Box sx={{ backgroundColor: '#6CC51D', width: '4px', marginRight: 1 }}>
            </Box>
            <Box>
            <Typography color={'GrayText'} variant='caption' sx={{ display: 'block' }}>10 minutes ago</Typography>
            <Typography variant="h6" component="span" fontSize={13} fontWeight="bold" >Youtube,a Video-sharing webstie, goes live <span fontWeight="bold" style={{ color: '#6CC51D' }} >$500</span> </Typography>
            </Box> 
          </Box> </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#1ca4c4' }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> <Box display={'flex'} sx={{ justifyContent: 'left' }}>
            <ArrowLeftSharp sx={{  color: '#1ca4c4'}} fontSize='small'/>
          <Box sx={{ backgroundColor: '#1ca4c4', width: '4px', marginRight: 1 }}>
            </Box>
            <Box>
            <Typography color={'GrayText'} variant='caption' sx={{ display: 'block' }}>20 minutes ago</Typography>
            <Typography variant="h6" component="span" fontSize={13} fontWeight="bold" >New order placed <span fontWeight="bold" style={{ color: '#1ca4c4' }} >#XF-2356</span> </Typography>
            </Box> 
          </Box> </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#ff0080' }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> <Box display={'flex'} sx={{ justifyContent: 'left' }}>
            <ArrowLeftSharp sx={{ color: '#ff0080'}} fontSize='small'/>
            <Box sx={{ backgroundColor: '#ff0080', width: '4px', marginRight: 1 }}>
            </Box>
            <Box>
              <Typography color={'GrayText'} variant='caption' sx={{ display: 'block' }}>30 minutes ago</Typography>
              <Typography variant="h6" component="span" fontSize={13} fontWeight="bold" >john just buy your product <span fontWeight="bold" style={{ color: '#ff0080' }} >sell $250</span> </Typography>
            </Box>

          </Box> </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#34d4bc' }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> <Box display={'flex'} sx={{ justifyContent: 'left' }}>
            <ArrowLeftSharp sx={{  color: '#34d4bc'}} fontSize='small'/>
          <Box sx={{ backgroundColor: '#34d4bc', width: '4px', marginRight: 1 }}>
            </Box>
            <Box>
            <Typography color={'GrayText'} variant='caption' sx={{ display: 'block' }}>15 minutes ago</Typography>
            <Typography variant="h6" component="span" fontSize={13} fontWeight="bold" >StumbleUpon is acquired <span fontWeight="bold" style={{ color: '#34d4bc' }} >$500</span> </Typography>
            </Box> 
          </Box> </TimelineContent>
        </TimelineItem>

      </Timeline>
    </Box>
  )
}

export default Tooltip