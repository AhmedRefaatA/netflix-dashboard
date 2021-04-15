import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ResponsiveHome from '../Home/ResponsiveHome';
import ResponsiveMemberShip from '../MemberShip/ResponsiveMemberShip';
import Dashboard from '../Dashboard/Dashboard';
import Signup from '../SignUp/SignUp';
import '../General/Assets/CSS/Semantic.css'
import Login from '../Login/Login';
import EditUser from '../EditUser/EditUser';
import Chat from '../Chat/Chat';
// import VideoStream from '../VideoPage/VideoStream';


class App extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            images: [
                {id:0  , describtion:"" , link:"https://images2.alphacoders.com/724/thumbbig-724132.jpg",},
                {id:1  , describtion:"" , link:"https://images3.alphacoders.com/114/thumbbig-11439.png" ,},
                {id:2  , describtion:"" , link:"https://images2.alphacoders.com/589/thumbbig-589553.png",},
                {id:3  , describtion:"" , link:"https://images4.alphacoders.com/573/thumbbig-57394.jpg" ,},
                {id:4  , describtion:"" , link:"https://images5.alphacoders.com/496/thumbbig-496726.jpg",},
                {id:5  , describtion:"" , link:"https://images6.alphacoders.com/311/thumbbig-311266.jpg",},
                {id:6  , describtion:"" , link:"https://images2.alphacoders.com/233/thumbbig-233960.jpg",},
                {id:7  , describtion:"" , link:"https://images2.alphacoders.com/520/thumbbig-520923.jpg",},
                {id:8  , describtion:"" , link:"https://images2.alphacoders.com/616/thumbbig-616013.jpg",},
                {id:9  , describtion:"" , link:"https://images2.alphacoders.com/617/thumbbig-617235.png",},
                {id:10 , describtion:"" , link:"https://images5.alphacoders.com/689/thumbbig-689398.jpg",},
                {id:11 , describtion:"" , link:"https://images.alphacoders.com/306/thumbbig-306943.jpg" ,},
            ],
            ask: [
                {id:"0" , question:"Who Is Netflix!"   , answer:"Netflix is a movie streaming platform" ,},
                {id:"1" , question:"Is netflix Free!"  , answer:"Yes! netflix is a free" ,},
                {id:"2" , question:"Is netflix legal!" , answer:"Yes! netflix is a legal (and free) video streaming application." ,},
            ],
            cards: [
                {id:0 , title:"watch HD" , describtion:"Enjoy streaming in high quality"      , link:"fas fa-tv"},
                {id:1 , title:"Trending" , describtion:"Keep tracking of most modern works"   , link:"fas fa-fire"},
                {id:2 , title:"Family"   , describtion:"Enjoy your account with multi access" , link:"fas fa-users"},
            ],
            payments: [
                {id:0 , link:"https://image.flaticon.com/icons/png/128/888/888870.png"},
                {id:1 , link:"https://image.flaticon.com/icons/png/128/825/825461.png"},
                {id:2 , link:"https://image.flaticon.com/icons/png/128/825/825466.png"},
            ],
            plans: [
                {id:0 , header:"1 month free" , title:"Individual" , describtion:"$9.99/month after offer period 1 account" , type:[{id:0 , 
                    text:[
                        {
                            id:0,
                            feature:"Listen to music ad-free",
                        },
                        {
                            id:1,
                            feature:"Play anywhere - even offline",
                        },
                        {
                            id:2,
                            feature:"On-demand playback",
                        },
                    ],
            },],},
                {id:1 , header:"1 month free" , title:"Duo"        , describtion:"$12.99/month after offer period 2 account" , type:[{id:0 , 
                    text:[
                        {
                            id:0,
                            feature:"2 Premium accounts for a couple under one roof",
                        },
                        {
                            id:1,
                            feature:"Duo Mix: a playlist for two, regularly updated with music you both enjoy",
                        },
                        {
                            id:2,
                            feature:"Ad-free music listening, play offline, on-demand playback",
                        },
                    ],
            },],},
                {id:2 , header:"1 month free" , title:"Family"     , describtion:"$14.99/month after offer period 6 account" , type:[{id:0 , 
                    text:[
                        {
                            id:0,
                            feature:"6 Premium accounts for family members living under one roof",
                        },
                        {
                            id:1,
                            feature:"Family Mix: a playlist for your family, regularly updated with music you all enjoy",
                        },
                        {
                            id:2,
                            feature:"Block explicit music",
                        },
                        {
                            id:3,
                            feature:"Ad-free music listening, play offline, on-demand playback",
                        },
                        {
                            id:4,
                            feature:"Spotify Kids: a separate app made just for kids",
                        },
                    ],
            },],},
                {id:3 , header:"1 month free" , title:"Student"    , describtion:"$4.99/month after offer period 1 account" , type:[{id:0 , 
                    text:[
                        {
                            id:0,
                            feature:"Hulu (ad-supported) plan",
                        },
                        {
                            id:1,
                            feature:"SHOWTIME",
                        },
                        {
                            id:2,
                            feature:"Listen to music ad-free",
                        },
                        {
                            id:3,
                            feature:"Play anywhere - even offline",
                        },
                        {
                            id:4,
                            feature:"On-demand playback",
                        },
                    ],
            },],},
            ],
            footer: [
                {id:0 , heading:"About Us"   , footerLink1:"Owners" , footerLink2:"Policy" , footerLink3:"Objective" , link:"/" ,},
                {id:1 , heading:"Services"   , footerLink1:"Movies" , footerLink2:"Series" , footerLink3:"TV Shows"  , link:"/" ,},
                {id:2 , heading:"Contact Us" , footerLink1:"Email"  , footerLink2:"Phone"  , footerLink3:"Address"   , link:"/" ,},
            ],
            social: [
                {id:0 , footerLink:"Facebook"  , class:"fab fa-facebook-f" , style:{ marginLeft: "10px" } , link:"/" ,},
                {id:1 , footerLink:"Instagram" , class:"fab fa-instagram"  , style:{ marginLeft: "10px" } , link:"/" ,},
                {id:2 , footerLink:"Twitter"   , class:"fab fa-twitter"    , style:{ marginLeft: "10px" } , link:"/" ,},
            ],
        };
    }
    render() { 
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route 
                        path='/' 
                        exact 
                        render={
                            props => 
                            <ResponsiveHome
                            responsiveCarouselImages={this.state.images}
                            responsiveMoviesImages={this.state.images}
                            responsiveAccordionAsk={this.state.ask}
                            responsiveFooterFooter={this.state.footer} 
                            responsiveFooterSocial={this.state.social}
                            {...props}
                            />} />
                        <Route 
                        path='/premium' 
                        exact 
                        render={
                            props => 
                            <ResponsiveMemberShip
                            responsiveWhyCards={this.state.cards}
                            responsivePaymentPayments={this.state.payments}
                            responsivePlanPlans={this.state.plans}
                            responsiveFooterFooter={this.state.footer} 
                            responsiveFooterSocial={this.state.social}
                            {...props}
                            />} />
                        <Route 
                        path='/dashboard' 
                        exact 
                        render={
                            props => 
                            <Dashboard
                            responsiveFooterFooter={this.state.footer} 
                            responsiveFooterSocial={this.state.social}
                            {...props}
                            />} />
                        <Route
                        path='/login'
                        exact
                        render={
                            props =>
                            <Login
                            responsiveFooterFooter={this.state.footer} 
                            responsiveFooterSocial={this.state.social}
                            {...props}
                            />
                        }
                        />
                        <Route
                        path='/signup'
                        exact
                        render={
                            props =>
                            <Signup
                            responsiveFooterFooter={this.state.footer} 
                            responsiveFooterSocial={this.state.social}
                            {...props}
                            />
                        }
                        />
                        <Route
                        path='/edituser'
                        exact
                        render={
                            props =>
                            <EditUser
                            {...props}
                            />
                        }
                        />
                        <Route
                        path='/chat'
                        exact
                        render={
                            props =>
                            <Chat
                            {...props}
                            />
                        }
                        />
                        {/* <Route
                        path='/chat'
                        exact
                        render={
                            props =>
                            <VideoStream
                            {...props}
                            />
                        }
                        /> */}
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
 
export default App;
