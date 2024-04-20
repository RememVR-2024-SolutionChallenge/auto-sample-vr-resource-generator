import dotenv from 'dotenv';
dotenv.config();

export const GATEWAY_SERVER_URL = process.env.GATEWAY_SERVER_URL as string;
export const ADMIN_KEY = process.env.ADMIN_KEY as string;

type genderType = 'male' | 'female';

export const AVATAR = [
  {
    title: '서영',
    gender: 'female' as genderType,
    fileDirectory: '/assets/avatars/seoyoung',
  },
  {
    title: '서연',
    gender: 'female' as genderType,
    fileDirectory: '/assets/avatars/seoyeon',
  },
  {
    title: '진우',
    gender: 'male' as genderType,
    fileDirectory: '/assets/avatars/jinwoo',
  },
  {
    title: '귀정',
    gender: 'male' as genderType,
    fileDirectory: '/assets/avatars/guijung',
  },
];

type sceneType = 'indoor' | 'outdoor' | 'unbound';

export const SCENE = [
  {
    title: '',
    type: '' as sceneType,
    fileDirectory: '',
  },
  {
    title: '',
    type: '' as sceneType,
    fileDirectory: '',
  },
  {
    title: '',
    type: '' as sceneType,
    fileDirectory: '',
  },
];
