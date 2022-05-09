import {
    DescriptionIcon,
    ShoppingCartIcon,
    HomeIcon,
    PieChartIcon,
    CalendarMonthIcon,
    PersonIcon,
    LoyaltyIcon,
  } from "../components/icons/index";
  
  export const MENU_LISTE = [
    {
      label: "Dashboard",
      icon: HomeIcon,
      path: "/app/dashboard"
    },
    
    // {
    //   label: "Je vends",
    //   icon: PieChartIcon,
    //   children: [
    //     {
    //       label: "Devis",
    //       path: "#"
    //     },
    //     {
    //       label: "Bon de commande",
    //       path: "#"
    //     },
    //     {
    //       label: "Bon de reception",
    //       path: "#"
    //     },
    //     {
    //       label: "Facture",
    //       path: "#"
    //     }
    //   ]
    // },

    {
      label: "Customers",
      icon: PersonIcon,
      path: "/app/customer"
    },
    {
      label: "Orders",
      icon: ShoppingCartIcon,
      path: "/app/orders"
    },
    {
      label: "Products",
      icon: LoyaltyIcon,
      path: "/app/product"
    },
    {
      label: "Invoices",
      icon: DescriptionIcon,
      path: "/app/invoices"
    },
    {
      label: "Calendars",
      icon: CalendarMonthIcon,
      path: "/app/calendars"

    }
  ];