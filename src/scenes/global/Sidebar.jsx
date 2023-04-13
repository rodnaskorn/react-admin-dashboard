import { useState } from 'react';
import { Sidebar, Menu,MenuItem, SubMenu,useProSidebar, menuClasses, sidebarClasses,MenuItemStyles } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme} from '@mui/material';
import { Link } from 'react-router-dom';
// import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from '../../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


const themes = {

}

const Item = ({ title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      component={<Link to={to} />}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      >
        <Typography>{title}</Typography>
        
      </MenuItem>
  );
};

const Layout = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  const { collapseSidebar, toggleSidebar, collapsed, toggled } = useProSidebar();

  // const { collapseSidebar } = useProSidebar();
  return (
    <Sidebar>
      {
        collapsed ? (
          <Box display="flex" justifyContent="center" padding="6px 12px" alignItems="center">
            <MenuOutlinedIcon sx={{cursor:'pointer'}} onClick={() => collapseSidebar()}/>
          </Box>
        
        ): 
        (
          <Box display="flex" justifyContent="space-between" padding="6px 12px" alignItems="center">
            <Typography variant="h4" fontWeight={700} style={{ letterSpacing:'0.5px'}}>ADMIN</Typography>
            <MenuOutlinedIcon sx={{cursor:'pointer'}} onClick={() => collapseSidebar()}/>
          </Box>
        )
      }
      {!collapsed && (
        <Box mb="25px">
          <Box display='flex' justifyContent='center' alignItems='center'>
            <img 
              alt='profile-user'
              width='100px'
              height='100px'
              src={`../../user.png`}
              style={{cursor:'pointer', borderRadius:'50%'}}
            />
          </Box>
        </Box>
      )}
      <Box display='flex' flexDirection='column'>
        <Menu>
        <Item 
          title="Dashboard"
          to="/"
          icon={<HomeOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
        />
        <div style={{ padding: '0 24px', margin:'15px 0 5px 20px'}}>
          <Typography variant="h6" color={colors.grey[300]} style={{ letterSpacing:'0.5px'}}>
            Data
          </Typography>
        </div>
        <Item 
          title="Manage Team"
          to="/team"
          icon={<PeopleOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
        />
        <Item 
          title="Contacts Information"
          to="/contacts"
          icon={<ContactsOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
        />
        <Item 
          title="Invoice Balances"
          to="/invoices"
          icon={<ReceiptOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
        />
        <div style={{ padding: '0 24px', margin:'15px 0 5px 20px'}}>
          <Typography variant="h6" fontWeight={600} style={{ letterSpacing:'0.5px'}}>
            Pages
          </Typography>
        </div>
        <Item 
          title="Profile Form"
          to="/form"
          icon={<PersonOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
        />
        <Item 
          title="Calendar"
          to="/calendar"
          icon={<CalendarTodayOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
        />
        <Item 
          title="FAQ Page"
          to="/faq"
          icon={<HelpOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
        />
          <SubMenu
            label="Charts"
            icon={<InsertChartOutlinedIcon/>}
          >
            <Item 
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
          </SubMenu>
        </Menu>
      </Box>
    </Sidebar>
  );
}

export default Layout;