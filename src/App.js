import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loader from 'react-loader'
import Header from './components/header';
import Footer from './components/footer';

const Loading = () => {
  return <Loader>loading...</Loader>
}
const Main = Loadable({
  loader: () => import('./components/webinarMainPage'),
  loading: Loading
});
const Webinar = Loadable({
  loader: () => import('./components/webinar'),
  loading: Loading
})
export default class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
                <Switch>
                    <React.Fragment>
                        
                        <Route exact path="/" component={Main} />
                        <Route path="/footer" component={Footer} />
                        <Route exact path="/ongoingwebinar" component={Webinar} />
  
  
                    </React.Fragment>
                </Switch>
            </BrowserRouter>
    )
  }
}


