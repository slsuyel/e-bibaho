import { Card } from "antd";
import BasicInfoPartner from "./BasicInfoPartner";
import LocationDetails from "./LocationDetails";

const PartnerPre = () => {
  return (
    <Card className="container my-3">
      <div className="text-center">
        <h1>Your Partner Preferences</h1>
        <p>You will see Matches based on Preferences you have set</p>
      </div>

      <div className="card p-3">
        <BasicInfoPartner />
      </div>
      <div className="card p-3 mt-3 ">
        <LocationDetails />
      </div>
    </Card>
  );
};

export default PartnerPre;
