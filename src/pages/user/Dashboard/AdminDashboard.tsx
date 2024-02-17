import MonthlyEarn from "./MonthlyEarn";
import Summary from "./Summary";
import SummaryChart from "./SummaryChart";

const AdminDashboard = () => {
  return (
    <div>
      <div className="row mx-auto my-2">
        <SummaryChart />
        <MonthlyEarn />
      </div>
      <Summary />
    </div>
  );
};

export default AdminDashboard;
