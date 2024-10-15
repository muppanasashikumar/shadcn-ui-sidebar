import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Circle
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Floating Loan",
          active: pathname.includes("/posts"),
          icon: SquarePen,
          submenus: [
            {
              href: "/posts",
              label: "Dashboard",
              active: pathname === "/posts",
              icon: Circle
            },
            {
              href: "/posts/new",
              label: "Add/Upload Transaction",
              active: pathname === "/posts/new",
              icon: Circle
            },
            {
              href: "/posts/new",
              label: "Transactionsn",
              active: pathname === "/posts/new",
              icon: Circle
            },
            {
              href: "/posts/new",
              label: "Approve Transactions",
              active: pathname === "/posts/new",
              icon: Circle
            },
            {
              href: "/posts/new",
              label: "Upload EMI Details",
              active: pathname === "/posts/new",
              icon: Circle
            }
          ]
        },
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/users",
          label: "Car Conveyance",
          active: pathname.includes("/users"),
          icon: Users,
          submenus: [
            {
              href: "/posts",
              label: "Dashboard",
              active: pathname === "/posts",
              icon: Circle
            },
          ]
        },
        {
          href: "/account",
          label: "Retiral Perquisite",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: [
            {
              href: "/posts",
              label: "Dashboard",
              active: pathname === "/posts",
              icon: Circle
            },
          ]
        }
      ]
    }
  ];
}
