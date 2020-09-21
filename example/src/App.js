import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Button from './pages/Button';
import IconButton from './pages/IconButton';
import Fab from './pages/Fab';
import Text from './pages/Text';
import TextField from './pages/TextField';
import Select from './pages/Select';
import Slider from './pages/Slider';
import Cards from './pages/Cards';
import Avatar from './pages/Avatar';
import Divider from './pages/Divider';
import Controls from './pages/Controls';
import Tab from './pages/Tab';
import Badge from './pages/Badge';
import Tooltip from './pages/Tooltip';
import Table from './pages/Table';
import ProgressIndicators from './pages/ProgressIndicators';
import Dialog from './pages/Dialog';
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
          <Route exact path='/text-field' component={TextField} />
          <Route exact path='/select' component={Select} />
          <Route exact path='/slider' component={Slider} />
          <Route exact path='/cards' component={Cards} />
          <Route exact path='/avatar' component={Avatar} />
          <Route exact path='/divider' component={Divider} />
          <Route exact path='/controls' component={Controls} />
          <Route exact path='/tab' component={Tab} />
          <Route exact path='/badge' component={Badge} />
          <Route exact path='/tooltip' component={Tooltip} />
          <Route exact path='/table' component={Table} />
          <Route
            exact
            path='/progress-indicator'
            component={ProgressIndicators}
          />
          <Route exact path='/dialog' component={Dialog} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
