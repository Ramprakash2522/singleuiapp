import React, { Component, Fragment } from 'react';
import Model from './Model';
// import './App.css';
import GoogleMaps from "simple-react-google-maps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import logoSdg from "../Images/logoSdg.png"
import Banner from "../Images/Banner.jpg"
import Bamboo from "../Images/Bamboo.png"
import Clubhouse from "../Images/Clubhouse.png"
import Meditation from "../Images/Meditation.png"
import more from "../Images/more.png"
import Swimming from "../Images/Swimming.png"
import Zen from "../Images/Zen.png"
import StateMap from "../Images/StateMap.jpeg"
import video from "../Images/video.jpeg"
import WebIcon from "../Images/WebIcon.jpg"
import OIP from "../Images/OIP.jpg"
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,



        }

    }
 
    handleClose = () => {
        this.setState({ show: false })
    }
    render() {
        let data = [{
            "lat": -6.90678,
            "lng": 107.59763
        },
        {
            "lat": 22.54174,
            "lng": 88.3473
        }]
        console.log(this.state.show)
        return (
            <Fragment>
                <div className="container-fluid  bg-dark">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <img src={logoSdg} />
                        <div className="collapse navbar-collapse d-flex justify-content-between pl-5" id="navbarNav" >
                            <FontAwesomeIcon icon={faHome} className=" text-light" />
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Location & Plans</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Construction Status</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true">Rera nos.</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Contact us</a>
                                </li>
                            </ul>
                            <button className="btn btn-danger mr-2 "> Enquire</button>
                            <button className="btn btn-danger mr-2 "> Call Now</button>
                            <button className="btn  btn-danger mr-2">  Booking online</button>
                        </div>

                    </nav>
                    <div className="row bg-dark">
                        <div className="col-4 text-white">
                            <p>FOLLOWING PHASES HAVE BEEN APPROVED BY RERA :</p>
                        </div>
                        <div className="col-8">
                            <div >
                                <marquee className="text-white" >SOBHA Dream Gardens Phase 1 – Wing 8 and 9 : PRM/KA/RERA/1251/309/PR/181122/002165 |
                                SOBHA Dream Gardens Phase 2 – Wing 5, 6 and 7 : PRM/KA/RERA/1251/309/PR/190102/002269 | SOBHA Dream Gardens Phase 3 – Wing 3 and 4 : PRM/KA/RERA/1251/309/PR/190102/002270 | SOBHA Dream Gardens Phase 4 – Wing 1 and 2
                                : PRM/KA/RERA/1251/309/PR/181122/002154
                                    | SOBHA Dream Gardens Phase 5 – Wing 10 : PRM/KA/RERA/1251/309/PR/181122/002155</marquee>
                            </div>

                        </div>

                    </div>

                </div>

                <img src={Banner} className="image" />
                <Fragment>

                    <h3 className="mt-2"> Enquire Now</h3>
                    <div className="row  justify-content-center mt-3">
                        <div className="col-sm-4 mt-4 ">
                            <input className='form-control' placeholder="Name" />
                        </div>
                        <div className="col-sm-4  mt-4">
                            <input className='form-control' placeholder="Email" />
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-sm-4  mt-4">
                            <input  disabled className='form-control' placeholder="Sobhadreamgardens" />
                        </div>
                        <div className="col-sm-4  mt-4">
                            <input className='form-control'  minLength="10" placeholder="Contact *" />
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-sm-8  mt-4">
                            <input className='form-control' placeholder="Your Question" />
                        </div>
                    </div>
                    <div className=" mt-4">
                        <input type="checkbox" id="box" />
                        <label className=" ml-2" > By sharing my contact details, I agree to receive Calls from Sobha Sales team.</label>
                    </div>
                    <div>
                        <button className="btn btn-danger m-4 "> Submit</button>
                    </div>
                    <div className=" row side_amenities  justify-content-between">
                        <div className="col-10">
                            <div className="bg-light p-2 ">
                                <h3 className="mb-3">Amenities</h3>

                                <div className="row-sm-12">
                                    <div className="row ">

                                        <div className="col-sm-2" id="mision">
                                            <img src={Clubhouse} id="img1" alt="clubhouse " />
                                            <h6 className=" mt-4">clubhouse</h6>
                                        </div>

                                        <div className="col-sm-2" id="vision">
                                            <img src={Bamboo} id="img2" alt="bamboo" />
                                            <h6 className=" mt-4">Bamboo Walk</h6>
                                        </div>

                                        <div className="col-sm-2" id="servicios">
                                            <img src={Meditation} id="img3" alt="Meditation" />
                                            <h6 className=" mt-4">Meditation Lawn</h6>
                                        </div>

                                        <div className="col-sm-2" id="vision">
                                            <img src={Swimming} id="img5" alt="Swimming" />
                                            <h6 className=" mt-4">Multi Level Swimming Pool</h6>

                                        </div>
                                        <div className="col-sm-2" id="vision">
                                            <img src={Zen} id="img6" alt="Zen" />
                                            <h6 className=" mt-4">Zen Plaza</h6>
                                        </div>
                                        <div className="col-sm-2" id="mision">
                                            <img src={more} id="img4" alt="more" />
                                            <h6 className=" mt-4">Much more</h6>
                                        </div>
                                    </div>
                                </div>
                                <p className=" mt-5">Sobha Dream Garden, Bellahalli,off Thanisandra Road, North Bangalore Spread across 17 Acres. Sobha Dream Gardens is meticulously planned to offer a sense
                        of balance to your <br></br>life which echo the Japanese Zen Philosophies of simplicity, subtlety, and functionality.</p>
                            </div>
                        </div>

                        <div className="right-amenties ">
                            Amenities
                    </div>
                    </div>
                    <div className="row justify-content-center">
                        <button className="btn btn-danger m-4" data-bs-dismiss="modal" onClick={() => {
                            this.setState({ show: true })
                        }}>Know more</button>
                        {this.state.show && <Model

                            modelclose={this.handleClose}


                        />}
                    </div>
                </Fragment>

                <Fragment>
                    <div className=" row   justify-content-between p-4">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-sm-8">
                                    <GoogleMaps
                                        apiKey={"AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As"}
                                        style={{ height: "60vh", width: "100%" }}
                                        zoom={3}
                                        center={{ lat: 15, lng: 110 }}
                                        markers={data}
                                    />
                                </div>
                                <div className="col-sm-3">
                                    <h3 className="text-left  mt-2 text-danger">Connectivity</h3>
                                    <div className="address1">
                                        <div>
                                            <img src={OIP} id="img1" alt="oip " className="img1" />
                                        </div>
                                        <div>
                                            <p>Kundanhalli signal-5Km</p>
                                        </div>
                                    </div>
                                    <div className="address1">
                                        <div>
                                            <img src={OIP} id="img1" alt="oip " className="img1" />
                                        </div>
                                        <div>
                                            <p>Outer Ring Road - 4 Kms</p>
                                        </div>
                                    </div>
                                    <div className="address1">
                                        <div>
                                            <img src={OIP} id="img1" alt="oip " className="img1" />
                                        </div>
                                        <div>
                                            <p>Whitefield - 5 Kms</p>
                                        </div>
                                    </div>
                                    <div className="address1">
                                        <div>
                                            <img src={OIP} id="img1" alt="oip " className="img1" />
                                        </div>
                                        <div>
                                            <p>Nearest Hospitals- 7 kms</p>
                                        </div>
                                    </div>
                                    <div className="address1">
                                        <div>
                                            <img src={OIP} id="img1" alt="oip " className="img1" />
                                        </div>
                                        <div>
                                            <p>ne Work Hubs - 5 Kms</p>
                                        </div>
                                    </div>
                                    <div className="address1 mt-2">
                                        <div>
                                            <img src={WebIcon} id="img1" alt="oip " className="img1" />
                                        </div>
                                        <div>
                                            <p>www.sobhadreamseries.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" right-amenties ">
                            Location
                         </div>
                    </div>
                </Fragment>
                <Fragment>

                    <div className=" row   justify-content-between p-4">
                        <div className="col-10">
                            <h4 className="text-danger">Master Plan</h4>
                            <img src={StateMap} id="img7" alt="Master plan" />

                        </div>
                        <div className=" right-amenties ">
                            Master plan
                         </div>
                    </div>
                </Fragment>

                <Fragment>

                    <div className=" row  justify-content-between p-4">
                        <div className="col-10">

                            <img src={video} id="img7" alt="video" />
                            <div className="play-button ">play</div>
                        </div>
                        <div className=" right-amenties ">
                            Virtual Site
                        </div>
                    </div>
                </Fragment>


                <div className="text-left p-4 bg-light">
                    <span><b> Disclaimer :</b></span> The content is for information purposes only and does not constitute an offer to avail of
                        any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purpose only.
                         This is not the official website. Website maintained by online marketing agency. We may share data with
                         rera registered brokers/companies for further processing. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.
                    </div>

            </Fragment>

        )
    }

}

export default Landing;