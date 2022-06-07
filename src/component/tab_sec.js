import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import classnames from 'classnames';

class TabSec extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
        }

        toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
            activeTab: tab
            });
        }
    }
    render(){
        return(
            <div className="tab_sec" >
                    {/* Tab Btn Sec */}
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Shop Trending 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                               Latest Shop
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                Most Popular
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4'); }}
                            >
                               In Groceries
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '5' })}
                                onClick={() => { this.toggle('5'); }}
                            >
                                In Temple
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '6' })}
                                onClick={() => { this.toggle('6'); }}
                            >
                                In Void
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '7' })}
                                onClick={() => { this.toggle('7'); }}
                            >
                               +RAYC
                            </NavLink>
                        </NavItem>
                    </Nav>
                     {/* Tab Btn Sec */}


                     {/* Tab Content Sec */}
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/construction_photo1.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/courses_photo_2.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/courses_photo_3.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/construction_photo2.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/civil_elect_photo3.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/construction_photo3.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/construction_photo1.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/courses_photo_2.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/service_photo4.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/service_photo7.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/civil_elect_photo1.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/construction_photo1.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/courses_photo_2.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/courses_photo_3.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/construction_photo2.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/civil_elect_photo1.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                               
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/service_photo5.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/courses_photo_2.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/service_photo7.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/construction_photo2.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/service_photo1.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                               
                            </Row>
                        </TabPane>
                        <TabPane tabId="5">
                            <Row>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/construction_photo1.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/courses_photo_2.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/courses_photo_3.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/construction_photo2.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/civil_elect_photo1.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                               
                            </Row>
                        </TabPane>
                        <TabPane tabId="6">
                            <Row>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/construction_photo1.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/courses_photo_2.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/service_photo4.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/service_photo7.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/civil_elect_photo1.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </TabPane>
                        
                        <TabPane tabId="7">
                        <Row>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/construction_photo1.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/courses_photo_2.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/courses_photo_3.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/construction_photo2.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="gallery_content">
                                        <div className="gallery_photo">
                                            <img src="images/civil_elect_photo1.png" alt="Gallery"/>
                                        </div>
                                        <div className="text_content">
                                           <h4 className="gallery_title">Title Name Here..</h4>
                                            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        </div>
                                    </div>
                                </div>
                               
                            </Row>
                        </TabPane>
                    </TabContent>
                    {/* Tab Content Sec */}
            </div>
        );
    }
}
export default  TabSec;