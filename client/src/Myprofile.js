import React,{useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import Axios  from 'axios';

const Myprofile = () => {
    const [data,setData] = useState(null);
    const [review,setReview] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:5000/myprofile',{
            headers :{
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setData(res.data))

        Axios.get('http://localhost:5000/myreview',{
            headers :{
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setReview(res.data))
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
            {data && 
                <section className='container' key={data._id}>
                    <Link to='/dashboard' className='btn btn-light'>Back To Profile</Link>

                    <div className='profile-grid my-1'>
                        <div className='profile-top bg-primary p-2'>
                            <img className='round-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU" alt='' />

                            <h2>{data.fullname}</h2>
                            <p>{data.email}</p>
                            <p>{data.mobile}</p>
                        </div>

                        <div className='profile-github'>
                            <h2 className='text-primary my-1'>
                                <i className='fab fa-github'></i> Reviews and Ratings
                            </h2>
                            
                            <div className='repo bg-white p-1 m-1'>
                                {review>0 ?
                                review.map(review => 
                                <div>
                                    <h4><Link to='#'>{review.taskprovider}</Link></h4>
                                    <p>
                                        {review.rating}/5
                                    </p>
                                </div>) 
                                :
                                <p>No Review added yet</p>
                                }                                
                            </div>
                        </div>
                    </div>
                </section>
            }
            
        </div>
    )
}

export default Myprofile