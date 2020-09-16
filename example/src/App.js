import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Button from './pages/Button';
import IconButton from './pages/IconButton';
import Fab from './pages/Fab';
import Text from './pages/Text';
import TextField from './pages/TextField';
import Select from './pages/Select';
import CheckBox from './pages/CheckBox';
import RadioButton from './pages/RadioButton';
import Slider from './pages/Slider';
import Cards from './pages/Cards';
import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/button' component={Button} />
          <Route exact path='/icon-button' component={IconButton} />
          <Route exact path='/fab' component={Fab} />
          <Route exact path='/text' component={Text} />
          <Route exact path='/check-box' component={CheckBox} />
          <Route exact path='/text-field' component={TextField} />
          <Route exact path='/select' component={Select} />
          <Route exact path='/radio-button' component={RadioButton} />
          <Route exact path='/slider' component={Slider} />
          <Route exact path='/cards' component={Cards} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
