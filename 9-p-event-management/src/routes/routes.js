import Contacts from "../pages/Contacts";
import Event from "../pages/Event";
import Home from "../pages/Home";
import About from "../pages/About";
import NewEvent from "../pages/NewEvent";
import ErrorPage from "./ErrorPage";


export const HOME_PATH = "/";
export const EVENT_PATH = "/:id";
export const NEW_EVENT_PATH = "/new";
export const ABOUT_PATH = "/about";
export const CONTACTS_PATH = "/contacts"

export const topNavigationItems = [
  { title: "Home", path: HOME_PATH },
  { title: "About", path: ABOUT_PATH },
  { title: "Contacts", path: CONTACTS_PATH },
];

export const routes = [
  { path: HOME_PATH, Component: Home },
  { path: ABOUT_PATH, Component: About },
  { path: CONTACTS_PATH, Component: Contacts },
  { path: EVENT_PATH, Component: Event },
  { path: NEW_EVENT_PATH, Component: NewEvent },
];