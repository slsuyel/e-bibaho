// import { Card } from "antd";
// import BasicInfoPartner from "./BasicInfoPartner";
// import LocationDetails from "./LocationDetails";
// import OthersPreferences from "./OthersPreferences";

// const PartnerPre = () => {
//   return (
//     <Card className="container my-3">
//       <div className="text-center">
//         <h1>Your Partner Preferences</h1>
//         <p>You will see Matches based on Preferences you have set</p>
//       </div>

//       <div className="row">
//         <div className="card col-md-6 p-3">
//           <BasicInfoPartner />
//         </div>
//         <div className="card col-md-6 p-3 mt-3 ">
//           <LocationDetails />
//         </div>
//         <div className="card col-md-6 p-3 mt-3 ">
//           <OthersPreferences />
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default PartnerPre;
import { Card } from 'antd';
import BasicInfoPartner from './BasicInfoPartner';
import LocationDetails from './LocationDetails';
import OthersPreferences from './OthersPreferences';

const PartnerPre = () => {
  return (
    <Card className="container py-5 font-maven">
      <div className="text-center">
        <h1 className="mt-5 font-maven">
          Your <span className="fw-medium text-info-emphasis">Partner </span>
          Preferences
        </h1>
        <p>You will see Matches based on Preferences you have set</p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <BasicInfoPartner />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <LocationDetails />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <OthersPreferences />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PartnerPre;
