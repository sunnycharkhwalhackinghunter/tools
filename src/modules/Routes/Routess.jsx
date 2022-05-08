import "../../App.css";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";
import RightNavbar from "../components/RightNavbar/RightNavbar";
import Dashboard from "../MaxHr/page/Dashboard";
import Announcement from "../MaxHr/page/Announcement";
import Profile from "../MaxHr/page/Profile";
import NavContext from "../Context/NavContext";
import Finance from "../MaxHr/page/Finance";
import Attendence from "../MaxHr/page/Attendence";
import Performance from "../MaxHr/page/Performance";
import OrganizationChart from "../MaxHr/page/OrganizationChart";
import Hiring from "../MaxHr/page/Hiring";
import Training from "../MaxHr/page/Training";
import TaskManagement from "../MaxHr/page/TaskManagement";
import Payroll from "../MaxHr/page/Payroll";
import Reports from "../MaxHr/page/Reports";
import Settings from "../MaxHr/page/Settings";
import Messages from "../MaxHr/page/Messages";
function Routess() {
  const [nav, setNav] = useState(true);
  const value = { nav, setNav };

  return (
    <BrowserRouter>
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
                <Route path="/messages" element={<Messages />} />
              </Routes>
            }
          />
        </NavContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default Routess;
