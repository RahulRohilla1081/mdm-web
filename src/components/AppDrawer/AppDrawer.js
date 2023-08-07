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
  Box,
  Divider,
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
import { CUSTOMER_CREATION, DASHBOARD, PROFILE, VENDOR, VENDOR_APPROVAL, VENDOR_CREATION } from "../../utils/Routes";
import { COLORS } from "../../utils/Theme";
import "./styles.css"

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
  {
    label: "Customer Creation",
    icon: <AccountBalanceRoundedIcon />,
    path: CUSTOMER_CREATION,
  },
];

export default function AppDrawer(props) {
  const navigate = useNavigate();
  const breakPointlg = useMediaQuery(useTheme().breakpoints.up("lg"));

  const handleDrawerToggle = () => {
    props.toggleDrawer(!props.showDrawer);
  };

  return (
    <Box>
      <Drawer
        open={props.showDrawer}
        variant={`${breakPointlg ? "permanent" : "temporary"}`}
        ModalProps={{
          keepMounted: true,
        }}
        className="back-ground-drawer"
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            zIndex: (theme) => theme.zIndex.drawer - 200,
            boxSizing: "border-box",
            width: props.drawerWidth,
            // backgroundColor: "#02055a",
          },
        }}
      >
        {/* <Toolbar /> */}
        <Toolbar className="back-ground-drawer">
          <List sx={{ width: 1 }}>
            {listItem.map((navItem, index) => (
              <>
                <ListItem
                  key={navItem.label}
                  disablePadding
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    backgroundColor:
                      props.ActiveKey == navItem.path ? "#141a30" : null,
                    color: props.ActiveKey == navItem.path ? "#fff" : null,
                  }}
                  onClick={(e) => {
                    navigate(navItem.path, {
                      state: {
                        path: navItem.path,
                      },
                    });
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon className="icon-image">
                      {navItem.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={navItem.label}
                      sx={{ color: "white" }}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Toolbar>
      </Drawer>
    </Box>
  );
}
