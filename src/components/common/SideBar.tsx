import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React, {CSSProperties} from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import { NavLink } from 'react-router-dom';

//propsの型をインターフェースで指定(型定義)
//インターフェースはクラスやオブジェクトの型を定義するのにつかわれる
interface SidebarProps {
    drawerWidth: number,
    mobileOpen: boolean,
    handleDrawerToggle: () => void,
    handleDrawerTransitionEnd: () => void,
    handleDrawerClose: () => void,
}
//タイプはインターフェースに比べて定義できる型の種類が多い
// type SidebarProps = {
//     drawerWidth: number,
//     mobileOpen: boolean,
//     handleDrawerToggle: () => void,
//     handleDrawerTransitionEnd: () => void,
//     handleDrawerClose: () => void,
// }
interface menuItem {
    text: string,
    path: string,
    icon: React.ComponentType,
}

//FCとはファンクションコンポーネントである。この関数は関数コンポーネントであるという型定義をしている。
const SideBar = ({drawerWidth,mobileOpen,handleDrawerToggle,handleDrawerTransitionEnd,handleDrawerClose}:SidebarProps) => {

const menuItems:menuItem[] = [
    {text: "Home", path: "/", icon:HomeIcon},
    {text: "Report", path: "/report", icon:BarChartIcon},
]

const baseLinkStyle :CSSProperties = {
    textDecoration: "none",
    color: "inherit",
    display: "block"
}

const activeLinkStyle:CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.08)"
}

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {menuItems.map((item, index) => (
                    <NavLink to={item.path} style={({isActive}) => {
                        console.log("選択されたメニューは", item.text, isActive)
                        return {color: "red"}
                    }}>
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                               {/*{in
                                dex % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/} 
                               <item.icon />
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    );
  return (
              <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
          >
             {/*モバイル用*/}
              <Drawer
                  variant="temporary"
                  open={mobileOpen}
                  onTransitionEnd={handleDrawerTransitionEnd}
                  onClose={handleDrawerClose}
                  ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                      display: { xs: 'block', sm: 'none' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
              >
                  {drawer}
              </Drawer>
             {/*PC用*/}
              <Drawer
                  variant="permanent"
                  sx={{
                      display: { xs: 'none', sm: 'block' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
                  open
              >
                  {drawer}
              </Drawer>
          </Box>
  )
}

export default SideBar