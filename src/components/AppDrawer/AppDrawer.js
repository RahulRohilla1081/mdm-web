import React from "react";
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";
import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

// import { ACCOUNT, CUSTOMER, LOGIN } from "../util/Routes";
import { useNavigate } from "react-router-dom";
import { DASHBOARD, PROFILE, VENDOR, VENDOR_APPROVAL, VENDOR_CREATION } from "../../utils/Routes";
import { COLORS } from "../../utils/Theme";

const listItem = [
  {
    label: "Profile",
    icon: <GroupOutlinedIcon />,
    path: PROFILE,
  },
  {
    label: "Dashboard",
    icon: <HomeRoundedIcon />,
    path: DASHBOARD,
  },
  {
    label: "Vendor",
    icon: <HomeRoundedIcon />,
    path: VENDOR,
  },
  {
    label: "Vendor Creation",
    icon: <AccountBalanceRoundedIcon />,
    path: VENDOR_CREATION,
  },
  {
    label: "Vendor Approval",
    icon: <AccountBalanceRoundedIcon />,
    path: VENDOR_APPROVAL,
  },
];

export default function AppDrawer(props) {
  const navigate = useNavigate();
  const breakPointlg = useMediaQuery(useTheme().breakpoints.up("lg"));

  const handleDrawerToggle = () => {
    props.toggleDrawer(!props.showDrawer);
  };

  return (
    <>
      <Drawer
        open={props.showDrawer}
        variant={`${breakPointlg ? "permanent" : "temporary"}`}
        ModalProps={{
          keepMounted: true,
        }}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            zIndex: (theme) => theme.zIndex.drawer - 200,
            boxSizing: "border-box",
            width: props.drawerWidth,
            backgroundColor: "#f7f7f7",
          },
        }}
      >
        <Toolbar />
        <Toolbar>
          <List sx={{ width: 1 }}>
            {listItem.map((navItem, index) => (
              <ListItem
                key={navItem.label}
                disablePadding
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  backgroundColor:
                    props.ActiveKey == navItem.path ? COLORS.secondary : null,
                }}
                onClick={(e) => {
                  navigate(navItem.path,{
                    state:{
                      path:navItem.path
                    }
                  });
                }}
              >
                <ListItemButton>
                  <ListItemIcon>{navItem.icon}</ListItemIcon>
                  <ListItemText primary={navItem.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </Drawer>
    </>
  );
}
