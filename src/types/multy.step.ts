import { ChangeEvent } from 'react';

export interface StepOneProps {
  formData: {
    profile_for: string;
    gender: string;
    mobile_number: string;
    email: string;
    password: string;
    date_of_birth: string;
  };
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
}
export interface StepTwoProps {
  formData: {
    first_name: string;
    last_name: string;

    father_name: string;
    mother_name: string;

    marital_status: string;
    religion: string;
    nationality: string;
  };
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export interface StepThreeProps {
  formData: {
    highest_qualification: string;
    college_name: string;
    working_sector: string;
    profession: string;
    profession_details: string;
    monthly_income: string;
  };
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
}

interface FormData {
  father_occupation: string;
  mother_occupation: string;

  living_country: string;
  currently_living_in: string;
  city_living_in: string;
  family_details: string;
}

export interface StepFourProps {
  formData: FormData;
  handleInputChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

interface StepFiveFormData {
  height: string;
  weight: string;
  bodyType: string;
  race: string;
  blood_group: string;
}

export interface StepFiveProps {
  formData: StepFiveFormData;
  handleInputChange: (
    event: ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
}

export type TRegiForm = {
  [key: string]: string | number;
  profile_for: string;
  mobile_number: string;
  email: string;
  password: string;
  date_of_birth: string;

  gender: string;
  first_name: string;
  last_name: string;
  father_name: string;
  mother_name: string;
  marital_status: string;
  religion: string;
  nationality: string;
  highest_qualification: string;
  college_name: string;
  working_sector: string;
  profession: string;
  profession_details: string;
  monthly_income: string;

  father_occupation: string;
  mother_occupation: string;

  living_country: string;
  currently_living_in: string;
  city_living_in: string;
  family_details: string;
  height: string;
  weight: string;
  bodyType: string;
  race: string;
  blood_group: string;
};
