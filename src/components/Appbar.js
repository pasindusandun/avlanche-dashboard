import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Badge, Box, Divider, Drawer, IconButton, InputBase, MenuItem, Toolbar, Typography, styled, Menu } from '@mui/material'
import { CardGiftcard, GifTwoTone, Menu as MenuIcon, Message, Notifications, Search as SearchIcon, MonitorHeartTwoTone, More } from '@mui/icons-material'
import { alpha } from '@mui/material/styles';
import Sidebar from './Sidebar';
import { useSelector,useDispatch} from 'react-redux'
import { updateOpen } from '../redux/HealthDetailsStore';
const drawerWidth = 220;
const drawerWidthsm = 120;
function Appbar() {
   
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));
    const isOpenDrawer = useSelector((state)=> state.HealthStore.isOpenDrawer)
    const [open, setopen] = useState(false)
    const dispatch =  useDispatch();
    const [menuOpen, SetMenuOpen] = useState(false)
    useEffect(() => {
        setopen(isOpenDrawer)
      }, [isOpenDrawer])
    return (
        <Box sx={{
            flexGrow: 1
            , ml: { xs: open ? `${drawerWidthsm}px` : 0, sm: open ? `${drawerWidth}px` : 0, md: open ? `${drawerWidth}px` : 0 },marginBottom:'20px'
        }}
        >
            <AppBar position="static" open={open}
            >
                <Toolbar   >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() =>  dispatch(updateOpen(!open))}
                    >
                        <MenuIcon color='secondary' />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: open ? 'none' : 'flex', md: 'flex' } }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} fontWeight="bold">
                            Dashboard
                        </Typography>
                    </Box>

                    <Box display={'flex'} sx={{ flexGrow: 1, justifyContent: 'end' }}  >
                        <Search>
                            <SearchIconWrapper >
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search here"
                            />
                        </Search>
                    </Box>

                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}   >
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={12} color="secondary">
                                <Notifications />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <Badge badgeContent={5} color="secondary">
                                <Message />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <Badge badgeContent={2} color='secondary' >
                                <CardGiftcard />
                            </Badge>

                        </IconButton>
                        <IconButton size="large"  >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }} >

                        <IconButton size="large" onClick={() => SetMenuOpen(!menuOpen)} >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>

                    </Box>
                </Toolbar>
            </AppBar>
            <Menu
                open={menuOpen}
                onClose={() => { SetMenuOpen(false) }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={12} color="secondary">
                        <Notifications />
                    </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <Badge badgeContent={5} color="secondary">
                        <Message />
                    </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <Badge badgeContent={2} color='secondary' >
                        <CardGiftcard />
                    </Badge>

                </IconButton>
            </Menu>

           <Sidebar drawerWidthsm={drawerWidthsm} drawerWidth={drawerWidth} open={open}/>
        </Box>
    )
}

export default Appbar