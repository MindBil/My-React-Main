import styled from "styled-components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { TextField, Button, Typography } from "@mui/material";

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
  list-style: none;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Navigation = styled.nav`
  background-color: #5893d6;
  padding: 10px 20px;
  color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Button = styled.button`
  background-color: #5893d6;
  color: #fff;
  border: 1px solid white;
  padding: 10px 20px;
  cursor: pointer;
`;

const SearchFieldContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
`;

// const SearchIcon = styled(FaSearch)`
//   color: #555;
//   margin-right: 5px;
// `;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 10px;
`;

const SearchButton = styled.button`
  background-color: #5893d6;
  color: #fff;
  border: 1 px solid;
  border-radius: 4px 4px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Article = styled.div`
  background-color: #fff;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <Container>
      <Sidebar>
        <SidebarSection>
          <h1>Paperbase</h1>
          <div>
            <img src="home.jpg" alt="home-icon" />
            <h2>Project overview</h2>
          </div>
        </SidebarSection>
        <ToastContainer />
        <SidebarSection>
          <h2>Build</h2>
          <ul>
            <li>Authentication</li>
            <li>Database</li>
            <li>Storage</li>
            <li>Hosting</li>
            <li>Functions</li>
            <li>machine learning</li>
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
            <h2>Authentication</h2>
            <NavItem>Users</NavItem>
            <NavItem>Sign-in-method</NavItem>
            <NavItem>Templates</NavItem>
            <NavItem>Usage</NavItem>
          </NavItems>
          <div>
            <p>Go to docs</p>
            <ProfilePic src="profile.jpg" alt="Profile" />
            <span>Icon</span>
            <Button>Web setup</Button>
          </div>
        </Navigation>
        <SearchFieldContainer>
          {/* <SearchIcon /> */}
          <SearchInput
            type="text"
            placeholder="Search by email address, phone number, or user UID"
          />
          <SearchButton>Add user</SearchButton>
        </SearchFieldContainer>
        <Article>
          <p>No users for this project yet</p>
        </Article>
      </MainContent>
    </Container>
  );
}

export default App;
