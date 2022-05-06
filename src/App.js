import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./modules/components/Navbar/Navbar";
import Container from "./modules/components/Container/Container";
import RightNavbar from "./modules/components/RightNavbar/RightNavbar";
import Dashboard from "./modules/MaxHr/page/Dashboard";
import Announcement from "./modules/MaxHr/page/Announcement";
import Profile from "./modules/MaxHr/page/Profile";
import NavContext from "./modules/Context/NavContext";
import Finance from "./modules/MaxHr/page/Finance";
import Attendence from "./modules/MaxHr/page/Attendence";
import Performance from "./modules/MaxHr/page/Performance";
import OrganizationChart from "./modules/MaxHr/page/OrganizationChart";
import Hiring from "./modules/MaxHr/page/Hiring";
import Training from "./modules/MaxHr/page/Training";
import TaskManagement from "./modules/MaxHr/page/TaskManagement";
import Payroll from "./modules/MaxHr/page/Payroll";
import Reports from "./modules/MaxHr/page/Reports";
import Settings from "./modules/MaxHr/page/Settings";
function App() {
  const [nav, setNav] = useState(true);
  const value = { nav, setNav };

  return (
    <div className="App">
      <NavContext.Provider value={value}>
        <Navbar />
        <Container
          stickyNav={<RightNavbar />}
          content={
            <Routes>
              <Route path="*" element={<main>NOT FOUND</main>} />

              <Route path="/" element={<Dashboard />} />
              <Route path="/announcement" element={<Announcement />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/attendence" element={<Attendence />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/training" element={<Training />} />
              <Route path="/taskmanagement" element={<TaskManagement />} />
              <Route path="/Payroll" element={<Payroll />} />
              <Route
                path="/organizationchart"
                element={<OrganizationChart />}
              />
              <Route path="/hiring" element={<Hiring />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
          }
        />
      </NavContext.Provider>
    </div>
  );
}

export default App;
