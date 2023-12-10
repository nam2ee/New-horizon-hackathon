import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from '../assets';

export const navlinks = [
  {
    name: '/',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Docs',
    imgUrl: createCampaign,
    link: '/announcements',
  },
  {
    name: 'Payment',
    imgUrl: payment,
    link: '/payment',
    disabled: true,
  },
  {
    name: 'Withdraw',
    imgUrl: withdraw,
    link: '/withdraw',
    disabled: true,
  },
  {
    name: 'Profile',
    imgUrl: profile,
    link: '/profile',
    disabled: true,
  },
];
