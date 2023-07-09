import { ChevronRight, Dashboard, ExpandMore, MonitorHeartTwoTone,Layers,Language ,FavoriteBorder, Computer, StorageOutlined, LaptopOutlined, SettingsOutlined, ExpandMoreOutlined} from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Divider, Drawer, Fab, IconButton, List, Typography, styled } from '@mui/material'
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import React, { useState } from 'react'
import AdCard from './AdCard';


function Sidebar({ drawerWidthsm, drawerWidth, open }) {
    // const StyleTypo = styled(Typography)({
    //      textAlign:'start',
    //      marginBottom:10,
    //      paddingLeft:30,
    //      color:'GrayText'
    // })
    const StyleTreeItem = styled(TreeItem)({
        padding:10,    
        alignItems:'center',
        
    })
    const StyleTreeNodeItem = styled(TreeItem)({
        padding:10,    
        color:'GrayText',
        textAlign:'start',
        paddingLeft:0
    })
    const EndIconButton = styled(IconButton)({
        marginLeft: 'auto', 
      });
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    const [expanded, setExpanded] = useState([]);

  const handleNodeToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };
  
    const ListItem = ['Inbox', 'Starred', 'Send email', 'Drafts'];
    return (
        <Drawer
            sx={{
                width: { xs: drawerWidthsm, sm: drawerWidth },
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: { xs: drawerWidthsm, sm: drawerWidth },
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader sx={{ justifyContent: 'left' }} >
                    <Fab hidden={!open}  sx={{backgroundColor:'#6CC51D','&:hover': {
                             backgroundColor: '#6CC51D',
                           }}} >
                    <MonitorHeartTwoTone color='#FFFFFF' />
                    </Fab>
                
                    <Typography sx={{ ml: '6px' ,display:{xs:'none',sm:'block'}}} fontWeight="bold" color={'black'} fontSize={25} >Fito</Typography>
                
            </DrawerHeader>
            <Typography sx={{ display:{xs:'block',sm:'none'}}} fontWeight="bold" color={'black'} fontSize={25} align='left' paddingLeft={3}>Fito</Typography>
            <Divider />
    <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMore />}
                defaultExpandIcon={<ChevronRight />}
                expanded={expanded}
      onNodeToggle={handleNodeToggle}

                sx={{ height: 240, flexGrow: 1, overflowY: 'auto' }}
            >
              
                <StyleTreeItem nodeId="1" label="Dashboard" icon={<Dashboard/>} expandIcon={<ExpandMore/>} sx={{color:expanded.includes("1")?'#6CC51D':'GrayText'}} > 
                    <StyleTreeNodeItem nodeId="2" label="Dashboard" />
                    <StyleTreeNodeItem nodeId="3" label="Workout Statistic" />
                    <StyleTreeNodeItem nodeId="4" label="Workout Plan " />
                    <StyleTreeNodeItem nodeId="5" label="Distance Map" />
                    <StyleTreeNodeItem nodeId="6" label="Diet Food Menu" />
                    <StyleTreeNodeItem nodeId="7" label="Personal Record" />
                </StyleTreeItem>
            
                <StyleTreeItem nodeId="8" label="Apps" icon={<LaptopOutlined/>} sx={{color:expanded.includes("8")?'#6CC51D':'GrayText'}} >
                    <StyleTreeNodeItem nodeId="9" label="OSS" />
                </StyleTreeItem>
                <StyleTreeItem  nodeId="10" label="Charts" icon={<StorageOutlined/>} expandIcon={<ExpandMore/>}  sx={{color:expanded.includes("10")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="11" label="Calendar" />
                </StyleTreeItem>
                <StyleTreeItem nodeId="12" label="Bootstrap" icon={<Language/>} expandIcon={<ExpandMore/>} sx={{color:expanded.includes("12")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="13" label="Calendar" />
                </StyleTreeItem>
                <StyleTreeItem nodeId="14" label="Plugins" icon={<FavoriteBorder/>} expandIcon={<ExpandMore/> }sx={{color:expanded.includes("14")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="15" label="Calendar" />
                </StyleTreeItem>
                <StyleTreeItem nodeId="16" label="Widget" icon={<SettingsOutlined/>} expandIcon={<ExpandMore/>} sx={{color:expanded.includes("16")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="17" label="Calendar" />
                </StyleTreeItem>
                <StyleTreeItem nodeId="18" label="Form" icon={<SettingsOutlined/>} expandIcon={<ExpandMore/>} sx={{color:expanded.includes("18")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="19" label="Calendar" />
                </StyleTreeItem>
                <StyleTreeItem nodeId="20" label="Table" icon={<SettingsOutlined/>} expandIcon={<ExpandMore/>} sx={{color:expanded.includes("20")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="21" label="Calendar" />
                </StyleTreeItem>
                <StyleTreeItem  nodeId="22" label="Pages" icon={<Layers/>} expandIcon={<ExpandMore/>} sx={{color:expanded.includes("22")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="23" label="Calendar" />
                </StyleTreeItem>
                <AdCard/>
            </TreeView>
            
            
             {/* <Accordion sx={{border:'none',borderStyle:'hidden'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined />}
        //   aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><Dashboard sx={{marginRight:1}}/>Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{paddingTop:0}}>
        <StyleTypo>
        Dashboard
          </StyleTypo>
          <StyleTypo >
          Workout Statistic
          </StyleTypo>
          <StyleTypo>
          Workout Plan
          </StyleTypo>
          <StyleTypo>
          Distance Map
          </StyleTypo>
          <StyleTypo>
          Diet Food Menu
          </StyleTypo>
          <StyleTypo>
          Workout Plan
          </StyleTypo>
          <StyleTypo>
        Personal Record
          </StyleTypo>
        </AccordionDetails>
      </Accordion> */}
            <Divider />
        </Drawer>
    )
}

export default Sidebar