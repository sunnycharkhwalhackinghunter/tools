import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Dashboard from "../page/Dashboard";
import Announcement from "../page/Announcement";
import Profile from "../page/Profile";
import NavContext from "../Context/NavContext";
import Finance from "../page/Finance";
import Attendence from "../page/Attendence";
import Performance from "../page/Performance";
import OrganizationChart from "../page/OrganizationChart";
import Hiring from "../page/Hiring";
import Training from "../page/Training";
import TaskManagement from "../page/TaskManagement";
import Payroll from "../page/Payroll";
import Reports from "../page/Reports";
import Settings from "../page/Settings";
import Messages from "../page/Messages";
import Calendar from "../page/Calendar";
import Reimbursement from "../page/Reimbursement";
import NoticePeriod from "../page/NoticePeriod";
import TimesheetReview from "../page/TimesheetReview";
const Index = () => {
  const [nav, setNav] = useState(true);
  const value = { nav, setNav };
  return (
    <>
      <div className="App">
        <NavContext.Provider value={value}>
          <Navbar />
          <Container
            stickyNav={<TopNavbar />}
            content={
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
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
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/reimbursement" element={<Reimbursement />} />
                <Route path="/notice_period" element={<NoticePeriod />} />
                <Route path="/timesheet_review" element={<TimesheetReview />} />
                <Route path="*" element={<main>NOT FOUND</main>} />
              </Routes>
            }
          />
        </NavContext.Provider>
      </div>
    </>
  );
};

export default Index;
