import { Person } from '../../types/types';
import TopBride from './TopBride';

import img1 from '../../assets/top/top_2.png';

import img3 from '../../assets/top/top_3.png';
import img6 from '../../assets/top/top_6.png';
import img7 from '../../assets/top/top_7.png';

import img4 from '../../assets/top/14.png';
import img_rahim from '../../assets/top/13.png';
import img5 from '../../assets/top/top_5.png';
import img8 from '../../assets/top/top_8.png';
import img9 from '../../assets/top/top_9.png';
import img10 from '../../assets/top/top_1.png';

const data: Person[] = [
  {
    name: 'Emma',
    photo: img1,
    age: '32 Years',
    height: '5ft 3in',
    location: 'USA',
    religion: 'Muslim',
    marital_status: 'Single',
    education: 'MBBS',
    occupation: 'Doctor',
    religious_practice: 'Moderate',
  },
  {
    name: 'Olivia',
    photo: img8,
    age: '28 Years',
    height: '5ft 2in',
    location: 'USA',
    religion: 'Muslim',
    marital_status: 'Single',
    education: 'BDS',
    occupation: 'Dentist',
    religious_practice: 'Occasional',
  },
  {
    name: 'Ava',
    photo: img3,
    age: '30 Years',
    height: '5ft 1in',
    location: 'USA',
    religion: 'Muslim',
    marital_status: 'Single',
    education: 'MBBS',
    occupation: 'Doctor',
    religious_practice: 'Occasional',
  },
  {
    name: 'Sophia',
    photo: img6,
    age: '29 Years',
    height: '5ft 5in',
    location: 'USA',
    religion: 'Muslim',
    marital_status: 'Married',
    education: 'MBBS',
    occupation: 'Doctor',
    religious_practice: 'Frequent',
  },
  {
    name: 'Isabella',
    photo: img7,
    age: '31 Years',
    height: '5ft 4in',
    location: 'UK',
    religion: 'Muslim',
    marital_status: 'Single',
    education: 'MBBS',
    occupation: 'Doctor',
    religious_practice: 'Frequent',
  },
  // Boys data
  {
    name: 'Muhammad',
    photo: img4,
    age: '30 Years',
    height: '5ft 8in',
    location: 'UK',
    religion: 'Muslim',
    marital_status: 'Single',
    education: 'Engineering',
    occupation: 'Engineer',
    religious_practice: 'Moderate',
  },
  {
    name: 'Aryan',
    photo: img5,
    age: '27 Years',
    height: '5ft 10in',
    location: 'USA',
    religion: 'Muslim',
    marital_status: 'Single',
    education: 'BBA',
    occupation: 'Businessman',
    religious_practice: 'Occasional',
  },
  {
    name: 'Rahim',
    photo: img_rahim,
    age: '33 Years',
    height: '6ft 0in',
    location: 'USA',
    religion: 'Muslim',
    marital_status: 'Married',
    education: 'MBA',
    occupation: 'Manager',
    religious_practice: 'Frequent',
  },
  {
    name: 'Kabir',
    photo: img9,
    age: '28 Years',
    height: '5ft 9in',
    location: 'UK',
    religion: 'Muslim',
    marital_status: 'Single',
    education: 'Computer Science',
    occupation: 'Software Developer',
    religious_practice: 'Frequent',
  },
  {
    name: 'Imran',
    photo: img10,
    age: '29 Years',
    height: '5ft 11in',
    location: 'USA',
    religion: 'Muslim',
    marital_status: 'Single',
    education: 'MBBS',
    occupation: 'Doctor',
    religious_practice: 'Moderate',
  },
];

const TopFive = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <h1 className="font-maven  text-center mb-3 fw-semibold">
        Our Top
        <span className=" text-info-emphasis fw-semibold"> Bride </span>&
        <span className=" text-info-emphasis fw-semibold"> Groom</span>
      </h1>

      <TopBride data={data} />
    </div>
  );
};

export default TopFive;
