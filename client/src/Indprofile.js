import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Axios from 'axios';

const Indprofile = ({match}) => {
    const [rating,setRating] = useState(null);
    const [taskprovider,setTaskprovider] = useState(null);

    const submitHandler = e =>{
        Axios.get('http://localhost:5000/myprofile',{
            headers :{
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setTaskprovider(res.data.fullname))

        let review = {
            taskprovider,
            taskworker:match.params.id,
            rating
        }
        Axios.post('http://localhost:5000/addreview',review,{
            headers :{
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => alert(res.data))
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
            <Link to='/dashboard' className='btn btn-light'>Back To Profile</Link>

            <div className='profile-grid my-1'>
                <div className='profile-top bg-primary p-2'>
                    <img className='round-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU" alt='' />

                    <h2>{match.params.fullname}</h2>
                    <p>{match.params.email}</p>
                    <p>{match.params.mobile}</p>
                </div>

                <div className='profile-github'>
                    <h2 className='text-primary my-1'>
                        <i className='fab fa-github'></i> Reviews and Ratings
                    </h2>
                    
                    <div className='repo bg-white p-1 m-1'> 
                        <div>
                            <h4>Enter your reviews</h4>

                            <form className='form' autoComplete='off' onSubmit={submitHandler}>
                                <div className='form-group'>
                                    <input type='text' placeholder="Enter your rating out of 5" className='form-control' name="rating" onChange={e =>setRating(e.target.value)}/>
                                </div>
                                <input type='submit' className='bt btn-primary' value='Add Rating'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Indprofile;