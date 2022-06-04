import {
  DescriptionIcon,
  ShoppingCartIcon,
  HomeIcon,
  PieChartIcon,
  CalendarMonthIcon,
  PersonIcon,
  LoyaltyIcon,
  SettingsIcon,
  SellIcon,
} from "../components/icons/index";

export interface MenuItemTypes {
  ref: string;
  label: string;
  path: string;
  children: MenuItemTypes[];
  icon: any;
  parentRef: string;
}
export const MENU_ITEMS: MenuItemTypes [] | any= [
  {
    ref: "dashboard-menu",
    label: "Tableau de bord",
    icon: HomeIcon,
    path: "/app/dashboard",
  },
  {

    ref: "client",
    label: "Client",
    icon: PersonIcon,
    path: "#",


  },
  {
    ref: "fournisseur",
    label: "Fournisseur",
    icon: PersonIcon,
    path: "#",


  },
  {
    ref: "achat",
    label: "Achat",
    icon: ShoppingCartIcon,
    children: [
      {
        label: "Devis",
        path: "product",
        parentRef: "fournisseur"
      },
      {
        label: "Bon de commande",
        path: "product",
        parentRef: "fournisseur"
      },
      {
        label: "Bon de reception",
        path: "product",
        parentRef: "fournisseur"
      },
      {
        label: "Facture",
        path: "product",
        parentRef: "fournisseur"
      }
    ]
  },

  {
    ref: "vente",
    label: "Vente",
    icon: SellIcon,
    children: [
      {
        label: "Démande de devis",
        path: "product",
        parentRef: "client"
      },
      {
        label: "Bon de commande",
        path: "product",
        parentRef: "client"
      },
      {
        label: "Bon de reception",
        path: "product",
        parentRef: "client"
      },
      {
        label: "Facture",
        path: "product",
        parentRef: "client",
      }
    ]
  },
  {

    ref: "configuration",
    label: "Configuration",
    icon: SettingsIcon,
    path: "#",

  }
];
