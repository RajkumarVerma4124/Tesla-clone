import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup'
import TeslaAccount from './components/Login/TeslaAccount'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { login, logout, selectUser } from './features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase'
import Menu from './components/Login/Menu'


function App() {
  const user = useSelector(selectUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Header/>
            <Home />
          </Route>
          <Route exact path='/login'>
            {user ? <Redirect to='/teslaaccount' /> : <Login />}
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/teslaaccount'>
            {!user ? (
              <Redirect to='/login' />
            ) : (
              <>
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
