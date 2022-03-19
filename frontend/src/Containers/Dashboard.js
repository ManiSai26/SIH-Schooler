import React from 'react';
import DashboardData from '../Components/DashboardData';
import DashboardNav from '../Components/DashboardNav';
import Dashboardnon from '../Components/Dashboardnon';
import DashboardRecommendation from '../Components/DashboardRecommendation';
import DashboardSideNav from '../Components/DashboardSideNav';
const Dashboard = () => {
    return ( 
        <div>
            <DashboardNav/>
            <DashboardSideNav/>
            <DashboardData/>
            {/* <DashboardRecommendation/> */}
            <Dashboardnon/>
        </div>
     );
}
 
export default Dashboard;