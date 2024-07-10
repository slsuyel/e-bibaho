import SingleProfile from '../pages/SingleProfile/SingleProfile';
import LoggedProfile from '../pages/user/Profile/LoggedProfile';
import UserDashboard from '../pages/user/Profile/UserDashboard';
import UserPhoto from '../pages/user/Profile/UserPhoto';
import PartnerPre from '../pages/user/Profile/PartnerPreferences/PartnerPre';
import NewMatches from '../pages/Matches/NewMatches';
import TodayMatches from '../pages/Matches/TodayMatches';
import MyMatches from '../pages/Matches/MyMatches';
import NearMe from '../pages/Matches/NearMe';
import MoreMatches from '../pages/Matches/MoreMatches';
import RecentlyViewed from '../pages/Matches/RecentlyViewed';
import MessageLayout from '../pages/Message/MessageLayout';
import AccountSetting from '../pages/user/Settings/AccountSetting';
import Notification from '../pages/user/Notification/Notification';
import Cart from '../pages/Pricing/Cart';
import EditProfileInfo from '../pages/user/Profile/Edit/EditProfileInfo';
import SearchPage from '../pages/Search/SearchPage';
export const userRoute = [
  {
    path: 'profile',
    element: <UserDashboard />,
  },
  {
    path: 'cart/:id',
    element: <Cart />,
  },
  {
    path: 'profile/messages',
    element: <MessageLayout />,
  },
  {
    path: 'profile/notifications',
    element: <Notification />,
  },
  {
    path: 'profile/my-profile',
    element: <LoggedProfile />,
  },
  {
    path: 'profile/edit/',
    element: <EditProfileInfo />,
  },
  {
    path: 'profile/dashboard',
    element: <UserDashboard />,
  },
  {
    path: 'profile/photos',
    element: <UserPhoto />,
  },
  {
    path: 'profile/acc-settings',
    element: <AccountSetting />,
  },
  {
    path: 'profile/partner-preferences',
    element: <PartnerPre />,
  },
  {
    path: 'search-res',
    element: <SearchPage />,
  },

  {
    path: 'search-res/:id',
    element: <SingleProfile />,
  },

  {
    path: 'matches/new-matches',
    element: <NewMatches />,
  },
  {
    path: 'matches/todays-matches',
    element: <TodayMatches />,
  },

  {
    path: 'matches/my-matches',
    element: <MyMatches />,
  },
  {
    path: 'matches/near-me',
    element: <NearMe />,
  },
  {
    path: 'matches/recently-viewed',
    element: <RecentlyViewed />,
  },
  {
    path: 'matches/more-matches',
    element: <MoreMatches />,
  },
];
