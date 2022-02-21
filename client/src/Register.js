import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Register = () => {

    const [data,setData] = useState({
        fullname:'',
        email:'',
        mobile:'',
        skill:'',
        password:'',
        confirmpassword:''
    })

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = e =>{
        e.preventDefault();
        Axios.post('http://localhost:5000/register',data)
        .then(()=> alert("User Register Successfully"))
        .catch(err => alert("User Already register"))
    }

  return (
    <div>
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/' style={{color:"white"}}><i className="fa-solid fa-code"></i> Developer Hub</Link>
            </h1>

            <ul className='d-flex' style={{listStyle:"none"}}>
                <li><Link to='/register' style={{color:"white",padding:"20px",fontSize:"20px"}}>Register</Link></li>
                <li><Link to='/login' style={{color:"white",fontSize:"20px"}}>Login</Link></li>
            </ul>
        </nav>

        <div className='container '>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <h1 className='large text-primary'>Sign Up</h1>
                    <p className='lead'><i className='fas fa-user'></i> Create Your Account</p>

                    <form className='form' onSubmit={submitHandler} autoComplete='off'>
                        <div className='form-group'>
                            <input type='text' placeholder="Name" name="fullname" className='form-control' onChange={changeHandler} required />
                        </div>

                        <div className='form-group'>
                            <input type='email' placeholder="Email address" className='form-control' name="email" onChange={changeHandler} required />
                        </div>

                        <div className='form-group'>
                            <input type='text' placeholder="Mobile" name="mobile" className='form-control'  onChange={changeHandler} required />
                        </div>

                        <div className='form-group'>
                            <input type='text' placeholder="Skill" name="skill" className='form-control' onChange={changeHandler} required />
                            <small className='form-text'>Please provide skills by separation of comma <b>( , )</b></small>
                        </div>

                        <div className='form-group'>
                            <input type='password' placeholder="Password" className='form-control' name="password" onChange={changeHandler} required />
                        </div>

                        <div className='form-group'>
                            <input type='password' placeholder="confirm Password" className='form-control' name="confirmpassword" onChange={changeHandler} required />
                        </div> 
                        <input type='submit' className='btn btn-primary' value="Register"/>
                    </form>

                    <p className='my-1'>
                        Already have an account? <Link to='/login'>Sign In</Link> 
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Register;