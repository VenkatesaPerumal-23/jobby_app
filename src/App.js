import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Header from './components/Header'
import Home from './components/Home'
import JobsList from './components/JobsList'
import JobDetailsItem from './components/JobsDetailsItem'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <div className="flex-container">
    <Header />
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={JobsList} />
      <ProtectedRoute exact path="/jobs/:id" component={JobDetailsItem} />
      <NotFound component={NotFound} />
    </Switch>
  </div>
)
export default App
