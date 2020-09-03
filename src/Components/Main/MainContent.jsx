import React from 'react';

import ConsultationPage from "./ForClient/ConsultationPage/ConsultationPage";
import Home from "./HomePage/Home";
import { Switch, Route } from 'react-router-dom'
import HellingerPage from "./ForClient/HellingerPage/HellingerPage";
import BuisnessPage from "./ForClient/BusinessConsultationPage/BuisnessPage";


const MainContent= ()=>{
    return(

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/psy-site' component={Home}/>
                <Route path='/consultation' component={ConsultationPage}/>
                <Route path='/buisness' component={BuisnessPage}/>
                <Route path='/hellinger' component={HellingerPage}/>
                <Route path='/keys' component={ConsultationPage}/>

            </Switch>

    )
}

export default MainContent
