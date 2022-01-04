import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const NewVacancy = React.lazy(() => import('./views/NewVacancy'));
const ClosedVacancy = React.lazy(() => import('./views/ClosedVacancy'));
const AddVacancy = React.lazy(() => import('./views/AddVacancy'));
const SettingInstitute = React.lazy(() => import('./views/SettingInstitute'));
const SettingDistrict = React.lazy(() => import('./views/SettingDistrict'));
const SettingRegion = React.lazy(() => import('./views/SettingRegion'));
const SettingLanguage = React.lazy(() => import('./views/SettingLanguage'));
const Appliers = React.lazy(() => import('./views/Appliers'));
const User = React.lazy(() => import('./views/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/new_vacancy', name: 'NewVacancy', component: NewVacancy },
  { path: '/closed_vacancy', name: 'ClosedVacancy', component: ClosedVacancy },
  { path: '/add_vacancy', name: 'AddVacancy', component: AddVacancy },
  { path: '/setting_district', name: 'SettingDistrict', component: SettingDistrict },
  { path: '/setting_region', name: 'SettingRegion', component: SettingRegion },
  { path: '/setting_language', name: 'SettingLanguage', component: SettingLanguage },
  { path: '/setting_institute', name: 'SettingInstitute', component: SettingInstitute },
  { path: '/appliers/:id', name: 'Appliers', component: Appliers },
  { path: '/user', name: 'User', component: User },
 
];

export default routes;
