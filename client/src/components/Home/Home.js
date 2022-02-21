import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return <div>
      <nav className='navbar bg-dark'>
        <h1>
          <Link to='/' style={{color:"white"}}><i className="fa-solid fa-code"></i> Developer Hub</Link>
        </h1>

        <ul className='d-flex' style={{listStyle:"none"}}>
          <li><Link to='/register' style={{color:"white",padding:"20px",fontSize:"20px"}}>Register</Link></li>
          <li><Link to='/login' style={{color:"white",fontSize:"20px"}}>Login</Link></li>
        </ul>
      </nav>

      <section className='landing' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>Developer Hub</h1>
            <p className='lead'>
              Create a developer profile/portfolia, Share posts and get help from other developers
            </p>

            <div className='buttons'>
              <Link to='/register' className='btn btn-primary mr-3 f-5'>Sign Up</Link>
              <Link to='/login' className='btn btn-danger'>Login</Link>
            </div>
          </div>
        </div>
      </section>
  </div>
};

export default Home;
