import { ChangeEvent } from 'react';

export interface StepOneProps {
  formData: {
    profile_for: string;
    gender: string;
    mobileNumber: string;
    email: string;
    password: string;
    dateOfBirth: string;
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

    maritalStatus: string;
    religion: string;
    nationality: string;
  };
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export interface StepThreeProps {
  formData: {
    highestQualification: string;
    collegeName: string;
    workingSector: string;
    profession: string;
    professionDetails: string;
    monthlyIncome: string;
  };
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
}

interface FormData {
  fatherStatus: string;
  fatherOccupation: string;
  motherStatus: string;
  motherOccupation: string;
  siblingsNotMarried: number;
  siblingsMarried: number;
  livingCountry: string;
  currentlyLivingIn: string;
  cityLivingIn: string;
  familyDetails: string;
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
  complexion: string;
  bloodGroup: string;
  physicalAttributeDetails: string;
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
  mobileNumber: string;
  email: string;
  password: string;
  dateOfBirth: string;

  gender: string;
  first_name: string;
  last_name: string;
  father_name: string;
  mother_name: string;
  maritalStatus: string;
  religion: string;
  nationality: string;
  highestQualification: string;
  collegeName: string;
  workingSector: string;
  profession: string;
  professionDetails: string;
  monthlyIncome: string;
  fatherStatus: string;
  fatherOccupation: string;
  motherStatus: string;
  motherOccupation: string;
  siblingsNotMarried: number;
  siblingsMarried: number;
  livingCountry: string;
  currentlyLivingIn: string;
  cityLivingIn: string;
  familyDetails: string;
  height: string;
  weight: string;
  bodyType: string;
  complexion: string;
  bloodGroup: string;
  physicalAttributeDetails: string;
};
