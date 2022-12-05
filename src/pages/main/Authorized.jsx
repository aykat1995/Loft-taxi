import React from 'react'
import Header from '../../components/Header/header.jsx'
import MapPage from '../map/mapPage.jsx'
import { ProfileWithAuth } from '../profile/profilePage.jsx'
import './Authorized.css'

const PAGES = {
  profile: (props) => <ProfileWithAuth {...props}/>
}

export default class Authorized extends React.Component {

  state = { 
    currentPage: 'map'
  };

  navigateTo = (page) => {
      this.setState({ currentPage: page})
  }

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

          {/* <Switch>
            <Route path='/' exact component={TestComponent} />
            <Route path='/profile' component={ProfileWithAuth} />
          </Switch> */}
          
        </section>
      </main>
    </>
  }
}

export const TestComponent = () => {
  return (
    <h1>Test</h1>
  )
}

