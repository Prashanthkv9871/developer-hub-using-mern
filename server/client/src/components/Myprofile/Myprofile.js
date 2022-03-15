import React,{useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import Axios  from 'axios';
import './Myprofile.css'

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
                    <Link to='/' className='Link'><i className="fa-solid fa-code"></i> Developer Hub</Link>
                </h1>

                <ul className='d-flex' style={{listStyle:"none"}}>
                    <li><Link to="/myprofile" className='Link mr-3'> My Profile </Link></li>
                    <li><Link to='/login' onClick={()=> localStorage.removeItem('token')} className='Link'>Logout</Link></li>
                </ul>
            </nav>
            {data && 
                <div className='container mt-3' key={data._id}>
                    <div className='row justify-content-center'>
                        <div className='col-md-7'>
                            <Link to='/dashboard' className='btn btn-secondary mb-2'>Back To Profile</Link>
                            <div className='profile-grid my-1 bg-secondary p-4 d-flex justify-content-between'>
                                <div className='p-2'>
                                    <img className='img' width='150' height='120' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNPLxLXSyKtMINHZ9QSGR-aHUZ8V0tG1uow&usqp=CAU" alt='' />

                                    <h2 className='text-light'>{data.fullname}</h2>
                                    <p className='text-light'>{data.email}</p>
                                    <p className='text-light'>{data.mobile}</p>
                                </div>

                                <div className='profile-github'>
                                    <h2 className='text-light my-1'>
                                        <i className='fab fa-github'></i> Reviews and Ratings
                                    </h2>
                                    
                                    <div className='p-1 m-1 bg-dark'>
                                        {review ?
                                        review.map((review,index) => 
                                        <div key={index}>
                                            <h4><Link to='#'>{review.taskprovider}</Link></h4>
                                            <p className='text-light'>
                                                {review.rating}/5
                                            </p>
                                        </div>) :
                                        <p className='text-light'>No review</p>
                                        }                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Myprofile