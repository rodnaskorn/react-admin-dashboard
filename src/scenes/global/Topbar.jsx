import { useContext } from 'react';

import { Box, useTheme, IconButton } from '@mui/material';
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";

import { ColorModeContext, tokens } from '../../theme';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); /* dark/light */
    const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p="10px">
        {/* Search Bar */}
        <Box 
            display="flex" 
            backgroundColor={colors.primary[400]} 
            borderRadius="8px"
        >
         <InputBase sx={{ml: 2, flex: 1}} placeholder="Search" />
         <IconButton type="button" sx={{p:1}}>
            <SearchIcon/>
            </IconButton>       
        </Box>
        {/* Icons */}
        <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <LightModeOutlinedIcon/>
                ) :
                (<DarkModeOutlinedIcon/>)}
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon/>
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon/>
            </IconButton>
            <IconButton>
                <PersonOutlinedIcon/>
            </IconButton>
        </Box>
    </Box>
  );
}

export default Topbar