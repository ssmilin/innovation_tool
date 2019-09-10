import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Form Page', icon: <Web/>, link: '/form' },
    { text: 'Table Page', icon: <GridOn/>, link: '/table' },
    { text: 'Login Page', icon: <PermIdentity/>, link: '/login' }
  ],
  tablePage: {
    items: [
      {id: 1, name: 'BPO Automation', price: 'Approved', category: 'Clinicals'},
      {id: 2, name: 'New Idea', price: 'Patent Filed', category: 'Collector'},
      {id: 3, name: 'Quick search', price: 'Peding Evaluation', category: 'Platform'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Hackathan 2019', text: 'Submit your ideas and win exiting prizes'},
      {id: 2, title: 'New idea workshop', text: 'Participate and provide solution'},
      {id: 3, title: 'User success stories', text: 'Share your success stories'},
      {id: 4, title: 'How to file patent', text: 'Workshop reg patent file'}
    ],
    monthlySales: [
      {name: 'Jan', uv: 37},
      {name: 'Feb', uv: 30},
      {name: 'Mar', uv: 20},
      {name: 'Apr', uv: 27},
      {name: 'May', uv: 20},
      {name: 'Jun', uv: 18},
      {name: 'Jul', uv: 26},
      {name: 'Aug', uv: 29},
      {name: 'Sep', uv: 35}
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
