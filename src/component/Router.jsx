/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Homepage from '../view/Homepage';
import OurPlanspage from '../view/OurPlanspage';
import Stockpage from '../view/Stockpage';
import About from '../view/About';
import Payment from '../view/Payment';
import Dashboard from '../view/dashboard/Dashboard';
import CmPanel from '../view/cmPanel/CmPanel';

import Login from './form/Login';
import SignUp from './form/SignUp';
import LogInModal from './modal/LogInModal';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Subscription from './modal/Subscription';
import Netflix from './netflixinc/Netflix';
import News from '../view/News';
import Portfolio from '../view/Portfolio';
import Contactpage from '../view/Contactpage';
import NewsDetails from '../view/NewsDetails';

const Router = () => {
  console.log('router ');
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        {' '}
        <Route exact path="/contactus" component={Contactpage} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/stock" component={Stockpage} />
        <Route exact path="/ourplans" component={OurPlanspage} />
        <Route exact path="/news" component={News} />
        {/* <Route exact path='/' component={Homepage} /> */}
        {/* <Route exact path='/ourplans' component={OurPlanspage} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/content/manager" component={CmPanel} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/loginmodal" component={LogInModal} />
        <Route exact path="/subsmodal" component={Subscription} />
        <Route exact path="/netflix" component={Netflix} />
        <Route exact path="/AllNews" component={NewsDetails} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
