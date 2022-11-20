import React from 'react';
import Header from '../../components/Header/header.jsx';
import MapPage from '../map/mapPage.jsx';
import ProfilePage from '../profile/profilePage.jsx';
import AuthPage from '../login/authPage.jsx';

const PAGES = {
  map: <MapPage />,
  profile: <ProfilePage />,
  login: <AuthPage />
}

export default class Main extends React.Component {

  state = { 
    currentPage: 'map'
  };

  navigateTo = (page) => {
    this.setState({ currentPage: page});
  };

  render() {
    return <>
      <Header navigateTo={this.navigateTo}/>
      <main>
        <section>
          {PAGES[this.state.currentPage]}
        </section>
      </main>
    </>
  }
}
