import {BrowserRouter as Router , Routes,Route, Link} from 'react-router-dom';
import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Voting from './Voting';
import Procedure from './Procedure';
import Banner from './Banner'

export default function App() {
 return(
  <>
  <Router>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
   <div class="container-fluid">
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item">
      <Link to='/'>
        Home
      <img src='' alt=''/>
      </Link>
      </li>
      <li className="nav-item">
      <Link to='/procedure'>
        Procedure 
      </Link>
      </li>
      <li className="nav-item">
        <Link to='/voting'>
          Voting Page
        </Link>
      </li> 
    </ul>
      </div>
     </div>
   </nav>
    <Routes>
      <Route path='./' />
      <Route path='/procedure' element={<Procedure/>}/>
      <Route path='/voting' element={<Voting/>}/>
     </Routes>
  </Router>
{/* <div className="banner mt-5">
  <div className="head">
   <h3> This is a BlockChain based Voting System!!</h3>
  </div>
  <div>

  </div>
  </div> */}
  <Banner/>
 </>
)
}
