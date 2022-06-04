import {
  ShoppingCartIcon,
  HomeIcon,
  PersonIcon,
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

    ref: "client_fournisseur",
    label: "Client & Fournisseur",
    icon: PersonIcon,
    children: [
      {
        parentRef: "client_fournisseur",
        label: "CLient",
        icon: PersonIcon,
        path: "#",
    
    
      },
      {
        parentRef: "client_fournisseur",
        label: "Fournisseur",
        icon: PersonIcon,
        path: "#",
    
    
      },
    ]


  },
 
  {
    ref: "vente",
    label: "Vente",
    icon: ShoppingCartIcon,
    children: [
      {
        label: "Devis",
        path: "quote/list",
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
        parentRef: "client"
      }
    ]
  },

  {
    ref: "achat",
    label: "Achat",
    icon: SellIcon,
    children: [
      {
        label: "Démande de devis",
        path: "product",
        parentRef: "forunisseur"
      },
      {
        label: "Bon de commande",
        path: "product",
        parentRef: "forunisseur"
      },
      {
        label: "Bon de reception",
        path: "product",
        parentRef: "forunisseur"
      },
      {
        label: "Facture",
        path: "product",
        parentRef: "forunisseur",
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
