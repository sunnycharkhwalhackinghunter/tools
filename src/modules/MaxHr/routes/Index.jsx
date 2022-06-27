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
import Resignation from "../page/Resignation";
import Leave from "../page/Leave";
import Notification from "../page/Notification";
import AnnouncementProfile from "../components/Pages/Profile/components/page/AnnouncementProfile";
import { UserDetails } from "../page/UserDetails";
import { ApplyLeave } from "../components/Pages/attendence/ApplyLeave";
import { PreviousLeaves } from "../components/Pages/attendence/PreviousLeaves";
import { EmployeesAttendance } from "../components/Pages/attendence/EmployeesAttendance";
import { EmployeesPerformance } from "../components/Pages/Performance/EmployeesPerformance";
import { Appraisal } from "../components/Pages/Performance/Appraisal";
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
                <Route path="/resignation" element={<Resignation />} />
                <Route path="/leave" element={<Leave />} />
                <Route path="/user_details" element={<UserDetails />} />
                <Route path="/notification" element={<Notification />} />
                <Route
                  path="/announcement_profile"
                  element={<AnnouncementProfile />}
                />
                <Route path="/apply_leave" element={<ApplyLeave />} />
                <Route path="/previous_leaves" element={<PreviousLeaves />} />
                <Route
                  path="/employees_attendance"
                  element={<EmployeesAttendance />}
                />
                <Route
                  path="/employees_performance"
                  element={<EmployeesPerformance />}
                />
                <Route path="/appraisal" element={<Appraisal />} />
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
