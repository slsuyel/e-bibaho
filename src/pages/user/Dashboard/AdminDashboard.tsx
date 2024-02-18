import BarsikProtibedon from "./BarsikProtibedon";
import MonthlyEarn from "./MonthlyEarn";
import Summary from "./Summary";
import SummaryChart from "./SummaryChart";
import TotalStudents from "./TotalStudents";

const AdminDashboard = () => {
  return (
    <div>
      <div className="row mx-auto my-2">
        <SummaryChart />
        <MonthlyEarn />
      </div>
      <Summary />
      <TotalStudents />
      <BarsikProtibedon />
    </div>
  );
};

export default AdminDashboard;
