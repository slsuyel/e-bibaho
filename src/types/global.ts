import { BaseQueryApi } from '@reduxjs/toolkit/query';
import { ReactNode } from 'react';

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export interface ScrollToTopProps {
  children?: ReactNode;
}

interface BloodGroup {
  id: string;
  name: string;
}

interface MaritalStatus {
  id: number | string; // Assuming id could be either number or string based on the example
  name: string;
}

interface Religion {
  id: number | string; // Assuming id could be either number or string based on the example
  name: string;
}

interface ProfileFor {
  id: number;
  name: string;
}

interface MonthlyIncome {
  id: number | string;
  name: string;
}

export interface TCountry {
  id: string;
  code: string;
  name: string;
  status: string;
  image?: string;
}

export interface TTools {
  blood_group: BloodGroup[];
  marital_status: MaritalStatus[];
  religions: Religion[];
  profile_for: ProfileFor[];
  monthly_income: MonthlyIncome[];
  countries: TCountry[];
}

export interface TUserProfile {
  country?: string;
  date_of_birth?: string;
  email?: string;
  first_name?: string;
  gender?: number;
  id?: string;
  image?: string;
  last_name?: string;
  maritalStatus?: string;
  marital_status?: number;
  mobile_number?: string;
  monthly_income?: number;
  monthlyincome?: string;
  profileFor?: string;
  profile_for?: number;
  profile_image?: string;
  religion?: number;
  religions?: string;
}
