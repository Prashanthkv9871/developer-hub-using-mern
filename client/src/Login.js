import React,{useState} from 'react'
import { Link,Redirect} from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
    const [auth,setAuth] = useState(false);
    const [data,setData] = useState({
        email:'',
        password:''
    })

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = e =>{
        e.preventDefault();
        Axios.post('http://localhost:5000/login',data).then(
            res => {localStorage.setItem('token',res.data.token);setAuth(true)}
        )
    }

    if(auth){
        return <Redirect to='dashboard' />
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

        <section className='container'>
            <h1 className='large text-primary'>Sign In</h1>
            <p className='lead'><i className='fas fa-user'></i> Sign into Your Account</p>

            <form className='form' onSubmit={submitHandler} autoComplete='off'> 
                <div className='form-group'>
                    <input type='email' placeholder="Email address" className='form-control' name="email" onChange={changeHandler} required />
                </div>

                <div className='form-group'>
                    <input type='password' placeholder="Password" className='form-control' name="password" onChange={changeHandler} required />
                </div>

                <input type='submit' className='btn btn-primary' value='Login' />
            </form>
            <p className='my-1'>
                Don't have an account ? <Link to='/register'>Sign Up</Link>
            </p>
        </section>
    </div>
  )
}

export default Login