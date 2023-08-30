import Contacts from "../pages/Contacts";
import Home from "../pages/Home";

export const HOME_PATH = "/";
export const CONTACTS_PATH = "/contacts";

export const topNavigationItems = [
  { title: "Home", path: HOME_PATH },
  { title: "Contacts", path: CONTACTS_PATH },
];

export const routes = [
  { path: HOME_PATH, Component: Home },
  { path: CONTACTS_PATH, Component: Contacts },
];