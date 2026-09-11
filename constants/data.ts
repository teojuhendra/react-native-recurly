import { icons } from "./icons";

export const tabs = [
  { name: "index", title: "Home", icon: icons.home, href: "/" },
  {
    name: "subscriptions",
    title: "Subscriptions",
    icon: icons.wallet,
    href: "/subscriptions",
  },
  {
    name: "subscriptions/[id]",
    title: "Subscriptions",
    icon: icons.wallet,
    href: "null",
  },
  {
    name: "insights",
    title: "Insights",
    icon: icons.activity,
    href: "/insights",
  },
  {
    name: "settings",
    title: "Settings",
    icon: icons.setting,
    href: "/settings",
  },
];
