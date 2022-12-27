import React from "react"
import {Link, Route, Switch } from "react-router-dom"
import HomePage from './pages/home'
import AboutPage from './pages/about'
import SignPage from './pages/sign'

const App = () => {
  return (
    <div>
      <header>
        <div>
          <p><Link to='/pages/home'>Home</Link></p>
          <p><Link to='/pages/about'>About</Link></p>
          <p><Link to='/pages/sign'>Sign In</Link></p>
        </div>
      </header>

      <hr />

      <main>
        <Switch>
          <Route exact path='/pages/home'>
            <HomePage />
          </Route>
          <Route exact path='/pages/about'>
            <AboutPage />
          </Route>
          <Route exact path='/pages/sign'>
            <SignPage />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App