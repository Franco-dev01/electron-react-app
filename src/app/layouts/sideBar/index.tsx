import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Icon } from "@iconify/react";
import { Box, Collapse, Tooltip } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { MENU_LISTE } from "../../constants/menuListe";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Drawer, DrawerHeader, IconStyle } from "./indexStyle";

export function SideBar(props: any) {
  const theme = useTheme();
  const { open, handleDrawerClose } = props;
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const handleOpenCollapse = (): void => setCollapseOpen(!collapseOpen);

  return (
    <Drawer variant="permanent" open={open}>
      <Box sx={{ backgroundColor: "#032756", flexGrow: 1 }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: "#fff" }}>
            {theme.direction === "rtl" ? null : (
              <Icon icon="clarity:expand-card-line" color="white" rotate={3} hFlip={true} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider color="#fff" style={{ marginTop: 8 }} />

        {MENU_LISTE &&
          MENU_LISTE.map((menu: any, index: any) => (
            // eslint-disable-next-line react/jsx-key
            <Box>
              {menu?.children ? (
                <>
                  <Box
                    title={menu.label}
                    key={index}
                    sx={{
                      backgroundColor: "#5A75E234",
                      "&:hover, &:active, &:focus": {
                        backgroundColor: "#7D9EB5",
                        borderTopRightRadius: "3%",
                        borderBottomRightRadius: "3%"
                      }
                    }}>
                    <ListItemButton onClick={handleOpenCollapse} sx={{ color: "#fff" }}>
                      <IconStyle>
                        <menu.icon />
                      </IconStyle>
                      <ListItemText primary={menu.label} />
                      {collapseOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </Box>
                  <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
                    <List>
                      {menu?.children.map((child: any, idx: any) => (
                        <NavLink
                          className={({ isActive }) => (isActive ? "active" : "inactive")}
                          to={child?.path}
                          key={idx}>
                          <ListItemButton
                            sx={{
                              height: 40,
                              justifyContent: collapseOpen ? "initial" : "center",
                              px: 2.5
                            }}>
                            <IconStyle></IconStyle>
                            <ListItemText
                              primary={child?.label}
                              sx={{ opacity: collapseOpen ? 1 : 0 }}
                            />
                          </ListItemButton>
                        </NavLink>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <Tooltip title={menu.label} key={index}>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "inactive")}
                    to={menu?.path}>
                    <ListItemButton autoFocus>
                      <IconStyle>
                        <menu.icon />
                      </IconStyle>
                      <ListItemText primary={menu.label} />
                    </ListItemButton>
                  </NavLink>
                </Tooltip>
              )}
            </Box>
          ))}
      </Box>
    </Drawer>
  );
}
