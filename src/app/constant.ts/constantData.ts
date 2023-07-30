import { NAV } from "./interface";

export const FREQUENTLY_USED_DATA: any = [
    {
        title: 'View Funds',
        message: 'You have used this service 20 times in the last week!',
        actionButton: 'Action CTA>>'
    },
    {
        title: 'Manage Users',
        message: 'You have used this service 40 times in the last week!',
        actionButton: 'Action CTA>>'
    },
    {
        title: 'View Orders',
        message: 'You have used this service 50 times in the last week!',
        actionButton: 'Action CTA>>'
    }
]

export const ORDER_DETAILS_DATA: any = [
    {
        count: 18,
        status: 'Total Order',
        percentage: '+2.4%',
        icon: './assets/images/box_open.svg'
    },
    {
        count: 10,
        status: 'In progress',
        percentage: '+2.1%',
        icon: './assets/images/wallet.svg'
    },
    {
        count: 5,
        status: 'Completed Order',
        percentage: '+2.5%',
        icon: './assets/images/clock.svg'
    },
    {
        count: 18,
        status: 'Cancelled order',
        percentage: '+1.0%',
        icon: './assets/images/box_closed.svg'
    },
]

export const INDIAN_STATES = [
    'All branches',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];

  export const NAV_BAR: Array<NAV> = [
    {
        title: 'User Management',
        url:'',
        isActive: false,
        isDisabled: false,
    },
    {
        title: 'My Order',
        url:'',
        isActive: false,
        isDisabled: false,
    },
    {
        title: 'Report',
        url:'',
        isActive: false,
        isDisabled: false,
    },
    {
        title: 'Stamp Inventory',
        url:'',
        isActive: false,
        isDisabled: false,
    },
    {
        title: 'Bar Codes',
        url:'',
        isActive: false,
        isDisabled: true,
    },
    {
        title: 'User Management',
        url:'',
        isActive: false,
        isDisabled: false,
    }
]
  