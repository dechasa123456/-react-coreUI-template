import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Vacancy',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New',
        to: '/new_vacancy',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Closed',
        to: '/closed_vacancy',
      },
      
    ],
  },
  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Setting',
    route: '/base',
    icon: 'cil-settings',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Languages',
        to: '/setting_language',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Institution',
        to: '/setting_institute',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Districts',
        to: '/setting_district',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Regions',
        to: '/setting_region',
      },
      
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Backup',
    to: '/theme/colors',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'User',
    to: '/user',
    icon: 'cil-user',
  }
]

export default _nav
