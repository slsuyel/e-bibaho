import { useLocation } from 'react-router-dom';
import BasicInfoEdit from './BasicInfoEdit';
import BackBtn from '../../../../components/reusable/BackBtn';
import ReligiousEdit from './ReligiousEdit';
import FamilyEdit from './FamilyEdit';
import EditPartnerInfo from '../PartnerPreferences/EditPartner/EditPartnerInfo';
import EditPartnerLocation from '../PartnerPreferences/EditPartner/EditPartnerLocation';
import ContactEdit from './ContactEdit';
import EducationEdit from './EducationEdit';

const EditProfileInfo = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const section = searchParams.get('sec');

  return (
    <div className="container py-5">
      <BackBtn />
      {section === 'basic' ? (
        <BasicInfoEdit />
      ) : section == 'religious' ? (
        <ReligiousEdit />
      ) : section == 'edu-career' ? (
        <EducationEdit />
      ) : section == 'family' ? (
        <FamilyEdit />
      ) : section == 'partner-basic' ? (
        <EditPartnerInfo />
      ) : section == 'partner-location' ? (
        <EditPartnerLocation />
      ) : section == 'my-contact' ? (
        <ContactEdit />
      ) : (
        'Others'
      )}
    </div>
  );
};

export default EditProfileInfo;
