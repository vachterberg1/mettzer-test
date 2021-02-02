import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './screens/home-page'
import DashboardPage from './screens/dashboard'
import GlobalStyle from './styles/global'

// const store = configureStore();

const App = () => {
  return (
<>
        <BrowserRouter>
        <GlobalStyle />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/dashboard" component={DashboardPage}/>
          </Switch>
        </BrowserRouter>
      </>
  )
}

export default App;
