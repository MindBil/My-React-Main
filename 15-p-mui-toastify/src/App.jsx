import styled from "styled-components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import "react-toastify/dist/ReactToastify.css";
import { TextField, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RefreshIcon from "@mui/icons-material/Refresh";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #25253a;
  color: whitesmoke;
  padding: 20px;
`;

const SidebarSection = styled.div`
  margin-bottom: 20px;
  ul {
    list-style-type: none;
    padding-left: 0;
  }
`;

const MainContent = styled.div`
  flex: 1;
`;

const Navigation = styled.nav`
  background-color: #5893d6;
  padding: 10px 20px;
  color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const NavItems = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
  display: inline;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;

const ProfilePic = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 10px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const SearchFieldContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 20px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 10px;
`;

const SearchButton = styled.button`
  background-color: #5893d6;
  color: #fff;
  border: 2px solid;
  border-radius: px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Article = styled.div`
  background-color: #fff;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <Container>
      <Sidebar>
        <SidebarSection>
          <h1>Paperbase</h1>
          <div>
            <hr />
            <div>
              <ListItem>
                <Icon>
                  <HomeIcon />
                </Icon>
                Project overview
              </ListItem>
            </div>
            <hr />
          </div>
        </SidebarSection>
        <SidebarSection>
          <h2>Build</h2>
          <ul>
            <ListItem>
              <DataSaverOnIcon />
              Authentication
            </ListItem>
            <ListItem>
              <HomeIcon />
              Database
            </ListItem>
            <ListItem>
              <HomeIcon />
              Storage
            </ListItem>
            <ListItem>
              <HomeIcon />
              Hosting
            </ListItem>
            <ListItem>
              <HomeIcon />
              Functions
            </ListItem>
            <ListItem>
              <HomeIcon />
              machine learning
            </ListItem>
          </ul>
          <h2>Quality</h2>
          <ul>
            <li>Analytics</li>
            <li>Performance</li>
            <li>Test Lab</li>
          </ul>
        </SidebarSection>
      </Sidebar>
      <MainContent>
        <Navigation>
          <NavItems>
            <h2>
              <span>Authentication</span>
            </h2>
            <NavItem>Users</NavItem>
            <NavItem>Sign-in-method</NavItem>
            <NavItem>Templates</NavItem>
            <NavItem>Usage</NavItem>
          </NavItems>
          <div>
            <p>
              Go to docs <NotificationsIcon />
              <ProfilePic
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
                alt="Profile"
              />
            </p>
            <Button
              sx={{
                color: "white",
                border: "1px solid white",
                height: "5vh",
              }}
            >
              Web setup
            </Button>
            <HelpOutlineIcon style={{ padding: "0 20 0 20  " }} />
          </div>
        </Navigation>
        <SearchFieldContainer>
          <SearchInput
            type="text"
            placeholder="Search by email address, phone number, or user UID"
          />
          <SearchButton>Add user img</SearchButton>
          <RefreshIcon />
        </SearchFieldContainer>
        <Article>
          <p>No users for this project yet</p>
        </Article>
      </MainContent>
    </Container>
  );
}

export default App;
