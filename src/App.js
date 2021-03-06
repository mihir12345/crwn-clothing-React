import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
  <Switch>
  <Route exact path='/' component={Homepage}/>
    <Route  path='/shop' component={ShopPage}/>
  </Switch>
  
  
    </div>
  );
}

export default App;
