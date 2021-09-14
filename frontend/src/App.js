import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Instrumentos from './pages/Instrumentos'
import Promociones from './pages/Promociones'
import Inscripcion from './pages/Inscripcion';


function App() {
    return ( 
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Instrumentos" exact component={Instrumentos}/>
                    <Route path="/Promociones" exact component={Promociones}/>
                    <Route path="/Inscripcion" exact component={Inscripcion} />
                </Switch> 
            </Router> 
            <Footer />
        </div>
    );
}

export default App;