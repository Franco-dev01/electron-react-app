import { MenuItemTypes } from "./../constants/menu";
import { MENU_ITEMS } from "../constants/menu";

 const getMenuItem = () => MENU_ITEMS;



const findAllparent = (menuItems :any , menuItem : any) => {
    let parents: string[] = [];
    const parent = findMenuItem(menuItems, menuItem["parentKey"]);

    if (parent) {
        parents.push(parent["ref"]);
        if (parent["parentRef"]) parents = [...parents, ...findAllparent(menuItems, parent)];
    }
    return parents;
}
const findMenuItem = (
    menuItems: MenuItemTypes[] | undefined,
    menuItemKey: MenuItemTypes["ref"] | undefined
): MenuItemTypes | null => {
    if (menuItems && menuItemKey) {
        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].ref === menuItemKey) {
                return menuItems[i];
            }
            const found = findMenuItem(menuItems[i].children, menuItemKey);
            if (found) return found;
        }
    }
    return null;
};

export {getMenuItem, findAllparent, findMenuItem};