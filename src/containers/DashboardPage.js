import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionLightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
//import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/dashboard/InfoBox';
//import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import RecentlyProducts from '../components/dashboard/RecentlyProducts';
import globalStyles from '../styles';
import Data from '../data';
import TablePage from '../containers/Tablepage';

const DashboardPage = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}></h3>

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={ActionLightbulbOutline}
                   color={pink600}
                   title="Total Ideas"
                   value="89"
          />
        </div>


        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={ThumbUp}
                   color={cyan600}
                   title="Likes"
                   value="4231"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Assessment}
                   color={purple600}
                   title="Approved"
                   value="10"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Face}
                   color={orange600}
                   title="Total Members"
                   value="20"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md m-b-15">
          <TablePage />
        </div>

       
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <RecentlyProducts data={Data.dashBoardPage.recentProducts}/>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
        <MonthlySales data={Data.dashBoardPage.monthlySales}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
