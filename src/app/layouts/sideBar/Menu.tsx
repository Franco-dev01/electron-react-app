/* eslint-disable react/prop-types */
import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Box, Collapse, CssBaseline, Tooltip, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { MenuItemTypes } from "../../constants/menu";
import { Link } from "react-router-dom";
import { Drawer, DrawerHeader, IconStyle } from "./indexStyle";
import IconApp from "../../assets/images/img002.png";
import { findAllparent, findMenuItem, getMenuItem } from "../../../app/helpers";
import classNames from "classnames";

const MunuItemWithChildrem = ({
  item,
  index,
  activeMenuItems,
  subMenuClassNames,
  toggleMenu,
  linkClassName
}: any) => {
  const [open, setOpen] = React.useState<boolean>(activeMenuItems!.includes(item.key));

  const menuRef: any = React.useRef(null);
  React.useEffect(() => {
    setOpen(activeMenuItems!.includes(item.ref));
  }, [activeMenuItems, item]);

  const toggleMenuItem = (e: any) => {
    e.preventDefault();
    const status = !open;
    setOpen(status);
    if (toggleMenu) toggleMenu(item, status);
    return false;
  };

  return (
    <>
      <Tooltip
        title={item?.label}
        key={index}
        sx={{
          color: "#fff",
          "&:hover, &:active, &:focus": {
            backgroundColor: "#7D9EB5",
            borderTopRightRadius: "3%",
            borderBottomRightRadius: "3%"
          }
        }}>
        <ListItemButton onClick={toggleMenuItem}>
          <IconStyle>
            <item.icon />
          </IconStyle>
          <ListItemText primary={item.label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </Tooltip>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List ref={menuRef} className={classNames(subMenuClassNames)}>
          {item?.children?.map((child: any, idx: any) => (
            <Link
              className={classNames("side-sub-nav-link", linkClassName, {
                "menuitem-active": activeMenuItems!.includes(item.key) ? "active" : ""
              })}
              to={child?.path}
              key={idx}>
              <ListItemButton
                sx={{
                  height: 40,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5
                }}>
                <IconStyle></IconStyle>
                <ListItemText primary={child?.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Collapse>
    </>
  );
};

const MenuItem = ({ item, className }: { item: any; className: any }) => {
  return <MenuItemLink item={item} className={className} />;
};

const MenuItemLink = ({ item, className }: { item: any; className: any }) => {
  return (
    <Link
      to={item.path!}
      className={classNames("side-nav-link-ref", className)}
      data-menu-key={item.ref}>
      <ListItemButton autoFocus>
        <IconStyle>
          <item.icon />
        </IconStyle>
        <ListItemText primary={item.label} />
      </ListItemButton>
    </Link>
  );
};

 export function SideBar ({ openDrawer }: {openDrawer: boolean}){

  /**
   * Active link item
   */

  const menuItems = getMenuItem();
  const activeMenu = React.useCallback(() => {
    const div = document.getElementById("side-menu");
    let matchingMenuItem = null;

    if (div) {
      const items: any = div.getElementsByClassName("side-nav-link-ref");
      for (let i = 0; i < items.length; ++i) {
        if (location.pathname === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }

      if (matchingMenuItem) {
        const mid = matchingMenuItem.getAttribute("data-menu-key");
        const activeMt = findMenuItem(menuItems, mid);
        if (activeMt) {
          setActiveMenuItems([activeMt["ref"], ...findAllparent(menuItems, activeMt)]);
        }
      }
    }
  }, [location, menuItems]);

  React.useEffect(() => {
    activeMenu();
  }, [activeMenu]);
  const [activeMenuItems, setActiveMenuItems] = React.useState<Array<string>>([]);

  /*
   * toggle the menus
   */

  const toggleMenu = (menuItem: MenuItemTypes, show: boolean) => {
    if (show) setActiveMenuItems([menuItem["ref"], ...findAllparent(menuItems, menuItem)]);
  };

  return (
    <Drawer
      variant="permanent"
      open={openDrawer}
      className="side-menu"
      sx={{ display: { xs: "none", md: "flex" } }}>
      <Box sx={{ backgroundColor: "#032756", flexGrow: 1 }}>
        <DrawerHeader sx={{ backgroundColor: "#fff", flexGrow: 1 }}>
          <img
            src={IconApp}
            alt="logo"
            style={{ border: 10 }}
            title="Logo"
            height={50}
            width={80}
          />
          <Typography
            sx={{ flexGrow: 1, fontSize: 16, fontWeight: " bold" }}
            component="span"
            color="primary">
            Cross App
          </Typography>
        </DrawerHeader>

        <Divider color="#fff" style={{ marginTop: 8 }} />
        <CssBaseline />

        {menuItems &&
          menuItems.map((item: any, index: any) => (
            // eslint-disable-next-line react/jsx-key
            <Box>
              {item?.children ? (
                <>
                  <MunuItemWithChildrem
                    item={item}
                    index={index}
                    toggleMenu={toggleMenu}
                    linkClassName={activeMenuItems!.includes(item.ref) ? "active" : ""}
                    activeMenuItems={activeMenuItems}
                    subMenuClassNames="nav-second-level"
                  />
                </>
              ) : (
                <Tooltip title={item.label} key={index}>
                  <MenuItem
                    item={item}
                    className={activeMenuItems!.includes(item.key) ? "menuitem-active" : ""}
                  />
                </Tooltip>
              )}
            </Box>
          ))}
      </Box>
    </Drawer>
  );
}