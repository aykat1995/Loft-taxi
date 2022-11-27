import React from 'react';
import Header from '../../components/Header/header.jsx';
import MapPage from '../map/mapPage.jsx';
import { ProfileWithAuth } from '../profile/profilePage.jsx';
import FormOfAuth from '../../components/Form/formOfAuth.jsx';
import { WithAuth } from '../../AuthContext.jsx';
import './mainPage.css'

const PAGES = {
  profile: (props) => <ProfileWithAuth {...props}/>,
  login: (props) => <FormOfAuth {...props}/>
}

export class Main extends React.Component {

  state = { 
    currentPage: 'map'
  };

  navigateTo = (page) => {
    if(this.props.isLoggedIn) {
      this.setState({ currentPage: page});
    } else {
      this.setState({ currentPage: 'login'});
    }
  };

  render() {
    return <>
      <Header navigateTo={this.navigateTo}/>
      <main className='main'>
        <section className='main__content'>
          <MapPage />
          { 
          PAGES[this.state.currentPage] && (
            <div className="window-modal" onClick={() => {this.navigateTo('map')}}>
              <div className="window-modal__content" onClick={(e) => {e.stopPropagation()}}>
                {PAGES[this.state.currentPage]({navigate: this.navigateTo})}
              </div>            
            </div> 
            )
          }                   
        </section>
      </main>
    </>
  }
}

export const MainWithAuth = WithAuth(Main);
