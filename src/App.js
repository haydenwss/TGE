import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div className="app-container">

      <HelmetProvider>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Total Glass Effects</title>
          <link rel="canonical" href="http://www.totalglasseffects.com" />
          <meta name="description" content="Description" CONTENT="Vancouver and Lower Mainland Glass Services. Vancouver and Lower Mainland Glass Services." />
        </Helmet>
      </HelmetProvider>

      <Router> 
      <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/projects' exact component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

