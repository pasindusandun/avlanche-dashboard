import { ChevronRight, Dashboard, ExpandMore, MonitorHeartTwoTone,Layers,Language ,FavoriteBorder, Computer, StorageOutlined, LaptopOutlined, SettingsOutlined} from '@mui/icons-material'
import { Divider, Drawer, Fab, IconButton, List, Typography, styled } from '@mui/material'
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import React, { useState } from 'react'


function Sidebar({ drawerWidthsm, drawerWidth, open }) {
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
                <IconButton hidden={!open}   >
                    <Fab sx={{backgroundColor:'#6CC51D','&:hover': {
                             backgroundColor: '#6CC51D',
                           }}} >
                    <MonitorHeartTwoTone color='#FFFFFF' />
                    </Fab>
                
                    <Typography sx={{ ml: '6px' ,display:{xs:'none',sm:'block'}}} fontWeight="bold" color={'black'} fontSize={25} >Fito</Typography>
                </IconButton>
                
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
                    <StyleTreeNodeItem nodeId="20" label="Dashboard" />
                    <StyleTreeNodeItem nodeId="21" label="Workout Statistic" />
                    <StyleTreeNodeItem nodeId="22" label="Workout Plan " />
                    <StyleTreeNodeItem nodeId="23" label="Distance Map" />
                    <StyleTreeNodeItem nodeId="24" label="Diet Food Menu" />
                    <StyleTreeNodeItem nodeId="25" label="Personal Record" />
                </StyleTreeItem>
            
                <StyleTreeItem nodeId="3" label="Apps" icon={<LaptopOutlined/>} sx={{color:expanded.includes("3")?'#6CC51D':'GrayText'}} >
                    <StyleTreeNodeItem nodeId="4" label="OSS" />
                </StyleTreeItem>
                <StyleTreeItem  nodeId="5" label="Charts" icon={<StorageOutlined/>} expandIcon={<ExpandMore/>}  sx={{color:expanded.includes("5")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="6" label="Calendar" />
                </StyleTreeItem>
                <StyleTreeItem nodeId="7" label="Bootstrap" icon={<Language/>} expandIcon={<ExpandMore/>} sx={{color:expanded.includes("7")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="8" label="Calendar" />
                </StyleTreeItem>
                <StyleTreeItem nodeId="9" label="Plugins" icon={<FavoriteBorder/>} expandIcon={<ExpandMore/> }sx={{color:expanded.includes("9")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="10" label="Calendar" />
                </StyleTreeItem>
                <StyleTreeItem nodeId="11" label="Widget" icon={<SettingsOutlined/>} expandIcon={<ExpandMore/>} sx={{color:expanded.includes("11")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="12" label="Calendar" />
                </StyleTreeItem>
                <StyleTreeItem nodeId="13" label="Form" icon={<SettingsOutlined/>} expandIcon={<ExpandMore/>} sx={{color:expanded.includes("13")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="14" label="Calendar" />
                </StyleTreeItem>
                <StyleTreeItem nodeId="15" label="Table" icon={<SettingsOutlined/>} expandIcon={<ExpandMore/>} sx={{color:expanded.includes("15")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="16" label="Calendar" />
                </StyleTreeItem>
                <StyleTreeItem  nodeId="17" label="Pages" icon={<Layers/>} expandIcon={<ExpandMore/>} sx={{color:expanded.includes("17")?'#6CC51D':'GrayText'}}>
                    <StyleTreeNodeItem nodeId="18" label="Calendar" />
                </StyleTreeItem>
            </TreeView>
            
            <Divider />
        </Drawer>
    )
}

export default Sidebar