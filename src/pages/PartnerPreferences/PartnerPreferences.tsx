import { TUserProfile } from '../../types';

type DetailsProps = {
  profile?: TUserProfile;
};
const PartnerPreferences = ({ profile }: DetailsProps) => {
  return (
    <div className="">
      <div className="offset-md-2">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">
              {`${profile?.gender == 2 ? 'Her' : 'His'}`} Preferences
            </h2>
            <p className="card-text">You match 8/10 of her Preferences</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>You match:</strong>
              </li>
              <li className="list-group-item">
                <strong>Age:</strong> 26 to 30
              </li>
              <li className="list-group-item">
                <strong>Height:</strong> 5' 7"(170cm) to 6' 2"(187cm)
              </li>
              <li className="list-group-item">
                <strong>Marital Status:</strong> Never Married
              </li>
              <li className="list-group-item">
                <strong>Religion / Community:</strong> Muslim
              </li>
              <li className="list-group-item">
                <strong>Mother Tongue:</strong> Bengali, English
              </li>
              <li className="list-group-item">
                <strong>Country Living in:</strong> Australia, Austria,
                Bangladesh, Belgium, Canada, Denmark, and more
              </li>
              <li className="list-group-item">
                <strong>Qualification:</strong> Bachelor / Undergraduate,
                Doctorate, Master
              </li>
              <li className="list-group-item">
                <strong>Working With:</strong> Private Company, Government /
                Public Sector, Defense / Civil, and more
              </li>
              <li className="list-group-item">
                <strong>Profession Area:</strong> Science, Sales & Marketing,
                Others, Merchant Navy, Medical & more
              </li>
              <li className="list-group-item">
                <strong>Working As:</strong> Customer Support / BPO / KPO
                Professional, Accounting Professional, and more
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPreferences;
