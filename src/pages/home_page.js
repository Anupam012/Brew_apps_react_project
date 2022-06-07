
import React, {Component} from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";


  import { BrowserRouter, Link } from "react-router-dom";

import HeaderSec from '../component/header_sec.js';
import TabSec from '../component/tab_sec.js';



class HomePage extends Component {

   


    render(){
        
        return(
            <div className="home_page">
                <div className="container-fluid">
                    <HeaderSec/>
                    <TabSec/>
                
                </div>
            </div>
        );

        
    }

}
export default  HomePage;