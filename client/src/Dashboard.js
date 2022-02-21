import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:5000/allprofiles',{
            headers :{
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setData(res.data))
    },[])

    if(!localStorage.getItem('token')){
        return <Redirect to='/login' />
    }
  return (
    <div>
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/' style={{color:"white"}}><i className="fa-solid fa-code"></i> Developer Hub</Link>
            </h1>

            <ul className='d-flex' style={{listStyle:"none"}}>
                <li><Link to="/myprofile" style={{color:"white",padding:"20px",fontSize:"20px"}}> My Profile </Link></li>
                <li><Link to='/login' onClick={()=> localStorage.removeItem('token')} style={{color:"white",fontSize:"20px"}}>Logout</Link></li>
            </ul>
        </nav>

        <section className='container'>
            <h1 className='large text-primary'>Developers</h1>
            <p className='lead'>
                <i className="fa-brands fa-connectdevelop"></i> Browse and connect with developers
            </p>

            <div className='profiles'>
                {data.length>=1 ? data.map(profile =>
                    <div key={profile._id} className='profile bg-light' style={{textAlign:"center"}}>
                    <img className='round-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU" alt='' />
                    <div>
                        <h2>{profile.fullname}</h2>
                        <p>{profile.email}</p>
                        <p>{profile.mobile}</p>
                        <Link to={`/indprofile/${profile.fullname}/${profile.email}/${profile.skill}/${profile._id}/${profile.mobile}`} className='btn btn-primary'>View Profile</Link>
                    </div>

                    <ul>
                        <li className='text-primary' style={{listStyle:"none"}}>
                            <i className='fas fa-check'> </i> {profile.skill}
                        </li>                       
                    </ul>
                </div>) : null}
                
            </div>
        </section>
    </div>
  )
}

export default Dashboard