import {
  PagesTopTitle,
  UserName,
  InfoCard,
  EmployeesChart,
  CalendarApp,
  HolidaysApp,
  CelebrationsApp,
  WhoAwayApp,
  WorkingFormatChart,
  ApprovalsCard,
  WorkingTimeChart,
} from "../components/Pages/Dashboard/index";
import CardIconImg from "../../../pics/profile.jpeg";
import CardIconImg2 from "../../../pics/profile2.jpeg";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
const Dashboard = () => {
  const ApprovalsCardData = [
    {
      toptitle: "Today(01)",
      cat1: [
        {
          userImg: CardIconImg,
          name: "Sonali Bhagat",
          DOB: "Printer:INR 2400",
          link: "/",
          ApprovalsCardIcon: <IoEllipsisVerticalSharp />,
        },
        {
          userImg: CardIconImg2,
          name: "Sonali Bhagat",
          DOB: "Printer:INR 2400",
          link: "/",
          ApprovalsCardIcon: <IoEllipsisVerticalSharp />,
        },
      ],
    },
    {
      toptitle: "Today(01)",
      cat1: [
        {
          userImg: CardIconImg2,
          name: "Sonali Bhagat",
          DOB: "Printer:INR 2400",
          link: "/",
          ApprovalsCardIcon: <IoEllipsisVerticalSharp />,
        },
        {
          userImg: CardIconImg,
          name: "Sonali Bhagat",
          DOB: "Printer:INR 2400",
          link: "/",
          ApprovalsCardIcon: <IoEllipsisVerticalSharp />,
        },
      ],
    },
  ];
  const ApprovalsCardData2 = [
    {
      toptitle: "Today(01)",
      cat1: [
        {
          userImg: CardIconImg,
          name: "Sonali Bhagat",
          DOB: "Printer:INR 2400",
          link: "/",
        },
        {
          userImg: CardIconImg2,
          name: "Sonali Bhagat",
          DOB: "Printer:INR 2400",
          link: "/",
        },
      ],
    },
    {
      toptitle: "Today(01)",
      cat1: [
        {
          userImg: CardIconImg2,
          name: "Sonali Bhagat",
          DOB: "Printer:INR 2400",
          link: "/",
        },
        {
          userImg: CardIconImg,
          name: "Sonali Bhagat",
          DOB: "Printer:INR 2400",
          link: "/",
        },
      ],
    },
  ];

  return (
    <>
      <div className="custom_container">
        <UserName />
        <PagesTopTitle title="dashbaord" />

        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          <InfoCard />
          <EmployeesChart />
          <WorkingFormatChart />
          <WhoAwayApp />
          <CelebrationsApp />
          <HolidaysApp />
          <CalendarApp />
          <WorkingTimeChart />
        </div>
        <PagesTopTitle title="Request for Approvals" />
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <ApprovalsCard data={ApprovalsCardData} title="Reimbursement" />
          <ApprovalsCard data={ApprovalsCardData} title="Leave" />
          <ApprovalsCard data={ApprovalsCardData2} title="Timesheet" />
          <ApprovalsCard data={ApprovalsCardData} title="Notice Period" />
          <ApprovalsCard data={ApprovalsCardData} title="Resignation" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
