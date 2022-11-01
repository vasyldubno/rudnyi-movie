import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const list = (anchor) => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Hidden only={["xl", "lg"]}>
              <IconButton
                onClick={() => setIsDrawerOpen(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

            <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "white" }}
              >
                News
              </Typography>
            </Link>

            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <Link component={RouterLink} to="settings">
                <Button
                  sx={{
                    my: 1,
                    color: "white",
                    display: "block",
                  }}
                >
                  Settings
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          {list("left")}
        </Drawer>
      </Box>
    </>
  );
};
