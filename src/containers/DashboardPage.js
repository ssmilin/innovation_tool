import React, { Component } from 'react';
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
import { Widget, addResponseMessage  } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

//const DashboardPage = () => {
class DashboardPage extends Component {

  componentDidMount() {
    addResponseMessage("Hello ! How can i help you ?");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("Sure, Please give me a minute");
  }
  render() {
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
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <Carousel />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 m-b-15 ">
            <TablePage />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <RecentlyProducts data={Data.dashBoardPage.recentProducts}/>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <MonthlySales data={Data.dashBoardPage.monthlySales}/>
          <Widget   handleNewUserMessage={this.handleNewUserMessage}
          title="Athena Innovation Tool"
            subtitle="How can i help you ?"/>
          </div>
        </div>
      </div>
    );
  }
};

export default DashboardPage;
