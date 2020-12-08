import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indonesia, Provinsi } from './pages'
import KetCovid from './CardKeterangan/ketCovid'


const App = () =>{
    return (
        <header className = "bgcolor">
        <div>
            <div className = 'cont'>
                <KetCovid/> 
            </div>
            <Router>
                <div className='home'>
                    <nav className='nav'>
                        <ul>
                            <li className = 'cont'>    
                                <Link to="/Global">
                                    Global
                                </Link> 
                            </li>
                            <li className ='cont'>
                                <Link to="/Indonesia">
                                    Indonesia
                                </Link>
                            </li>
                            <li className = 'cont'>
                                <Link to="/Provinsi">
                                    Provinsi
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route path="/Indonesia">
                        <Indonesia />
                    </Route>
                    <Route path="/Provinsi">
                        <Provinsi />
                    </Route>
                    <Route path="/Global">
                        <Global />
                    </Route>
                </Switch>
            </Router>
        </div>

        </header>
    )
}

export default App;


