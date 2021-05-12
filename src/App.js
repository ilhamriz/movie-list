import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './organisms/Header';
import Movies from './organisms/Movies';
import Home from './organisms/Home';
import Footer from './organisms/Footer';
import ScrollToTop from './atoms/ScrollToTop';

function App() {  
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Movies} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
