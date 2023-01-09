import React from "react"
import {Link, Route, Switch } from "react-router-dom"
import HomePage from './pages/home'
import AboutPage from './pages/about'
import SignPage from './pages/sign'
import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"

const App = () => {
  return (
    <div>
      <header>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <Typography variant="h5">React Homework</Typography>
          <Box mr={0} padding={5}>
            <Button color='inherit' variant="outlined">
              <Link to='/pages/home'>Home</Link>
            </Button>
            <Button color='inherit' variant="contained">
              <Link to='/pages/about'>About</Link>
            </Button>
            <Button color='inherit' variant="outlined">
              <Link to='/pages/sign'>Sign In</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
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

// <div>
    //   <header>
    //     <div>
    //       <p><Link to='/pages/home'>Home</Link></p>
    //       <p><Link to='/pages/about'>About</Link></p>
    //       <p><Link to='/pages/sign'>Sign In</Link></p>
    //     </div>
    //   </header>

    //   <hr />

    //   <main>
    //     <Switch>
    //       <Route exact path='/pages/home'>
    //         <HomePage />
    //       </Route>
    //       <Route exact path='/pages/about'>
    //         <AboutPage />
    //       </Route>
    //       <Route exact path='/pages/sign'>
    //         <SignPage />
    //       </Route>
    //     </Switch>
    //   </main>
    // </div>