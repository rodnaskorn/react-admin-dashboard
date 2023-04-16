import { useState } from 'react';
import { Box, Typography, IconButton, useTheme, Icon} from '@mui/material';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, sidebarClasses, menuClasses, MenuItemStyles } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import { tokens } from '../../theme';
import { Home } from '@mui/icons-material';

const Item = ({title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected===title} 
      component={<Link to={to}/>}
      style={{color:colors.grey[100]}}
      onClick={() => setSelected(title)}
      icon={icon}
      rootStyles={{
        button: {
          '&:hover':{
            color: colors.blueAccent[400]
          }
        }
      }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

const Layout = () => {
  const { toggleSidebar, collapseSidebar, broken, collapsed} = useProSidebar();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState('Dashboard');

  const menuItemStyles = {
    button: {
      '&:hover': {
        backgroundColor: colors.primary[400],
        // color: colors.blueAccent[400]
      },
      [`
        &:hover .${menuClasses.icon}, 
        &:hover .${menuClasses.label},
        &:hover .${menuClasses.SubMenuExpandIcon}`]: 
          {color: colors.blueAccent[400]},
    },
    subMenuContent: {
      backgroundColor: colors.primary[400],
      paddingLeft: collapsed ? '0' : '10px' 
    }
  };

  return (
    // Box that holds everything
    <Box 
    >
      <Sidebar 
        defaultCollapsed={true}
        backgroundColor={colors.primary[400]}
        rootStyles={{
          border:'none',
          // [`.${sidebarClasses.container}`]: {backgroundColor: `${colors.primary[400]}`}
        }}
      >
        <Menu
          closeOnClick={true}
          menuItemStyles={menuItemStyles}
        >
          <MenuItem
            onClick={() => {
              collapseSidebar();
            }}
            icon={collapsed ? <MenuOutlinedIcon/> : undefined}
            style={{margin: "10px 0 20px 0", color: colors.grey[100]}}
            menuItemStyles={menuItemStyles}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>ADMIN</Typography>
                <IconButton onClick={() => toggleSidebar()}>
                  <MenuOutlinedIcon/>
                </IconButton>

              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user" 
                  width="100px"
                  height="100px"
                  src={'../../assets/bean.webp'}
                  style={{ cursor: 'pointer', borderRadius:"50%", objectFit:'cover'}}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h2" color={colors.grey[100]} fontWeight='bold' sx={{m: '10px 0 0 0'}}>
                  Mr. Bean
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : '10%'}>
            <Item title="Dashboard" to= "/" icon={<HomeOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Typography variant="h6" color={colors.grey[300]} sx={{m:'15px 0 5px 20px'}}>Data</Typography>
            <Item title="Team" to= "/team" icon={<PeopleOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Item title="Contacts" to= "/contacts" icon={<ContactsOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Item title="Invoices" to= "/invoices" icon={<ReceiptOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Typography variant="h6" color={colors.grey[300]} sx={{m:'15px 0 5px 20px'}}>Pages</Typography>
            <Item title="Profile Form" to= "/form" icon={<PersonOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Item title="Calendar" to= "/calendar" icon={<CalendarTodayOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <SubMenu
              label="Charts"
              icon={<InsertChartOutlinedIcon/>}
              rootStyles={{backgroundColor:`${colors.primary[400]}`}}>
              <Item title="Bar Chart" to= "/bar" icon={<BarChartOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
              <Item title="Pie Chart" to= "/pie" icon={<PieChartOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
              <Item title="Line Chart" to= "/line" icon={<TimelineOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
              <Item title="Geography Chart" to= "/geography" icon={<MapOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            </SubMenu>
            <Item title="FAQ Page" to= "/faq" icon={<HelpOutlineOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default Layout;