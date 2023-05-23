import { Route, Switch } from 'wouter'
import Layout from './assets/components/Layout'
import Home from './assets/pages/Home'
import Login from './assets/components/Login'
import SignUp from './assets/components/SignUp'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={Home} />
      </Switch>
    </Layout>
  )
}
export default App
