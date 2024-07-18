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

export type TCountry = {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  image: string;
};

interface Country {
  id: string;
  code: string;
  name: string;
  status: string;
  created_on: string;
  updated_on: string;
}

export interface TTools {
  blood_group: Record<string, string>;
  marital_status: Record<string, string>;
  religions: Record<string, string>;
  profile_for: Record<string, string>;
  countries: Country[];
}
