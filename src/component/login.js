import React, {useState} from 'react'
import  './Login.css';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink , useNavigate} from 'react-router-dom';



const Login = () => {
    const [pasShow, setpasShow] = useState(false)

  const [inpval, setinpval] = useState({
    email:'',
    password:'', 
  });
  // console.log(inpval)

  const history = useNavigate()

  const setval = (e)=>{
    const {name,value} = e.target
    // console.log(e.target.value)
    setinpval(()=>{
      return{
        ...inpval, 
        [name]:value
    }})
  }

  const loginuser = async (e) =>{
    e.preventDefault()
    const {email, password} = inpval

    if(email === ""){
       alert("please inter your email")
    }else if(!email.includes('@')){
      alert("Enter your vaild email")
    }else if(password === ""){
      alert("Please Enter your password")
    }else if(password.length < 6){
      alert("password must be 6 latter")
    }else{
      //console.log("user Login succesfully done ")
      
      const data = await fetch("/login",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({
          email,password  
        })
      })
      const res = await data.json()
       console.log(res)
        if(res.status === 201){
          // console.log("result: ", res.result);
          // console.log("token: ", res.result.token);
         localStorage.setItem("usersdatatoken", res.result.token)
         history('/dash')
          setinpval({...inpval,email:"",password:""})
        }
          
    }
  }
  return (
    <div className='container'>
        <div className="curved-shape"></div>
        <div className='form-box-Login'>
            <h2 className="animation" >Login</h2>
            <form action='#'>
                <div className='input-box animation' >
                    <input type='email' name='email' value={inpval.email} onChange={setval} id='email' required />
                    <label className=''>Username </label>
                    <span> <PersonIcon /> </span>
                </div>
                <div className='input-box animation' >
                    <input type={!pasShow ? "password" : "text"} onChange={setval} value={inpval.password} name='password' id='password' required />
                    <label className=''>password</label>
                    <span onClick={()=> setpasShow(!pasShow)}>  {!pasShow ? "Show" : "Hide"}  </span>
                </div>
                <div className='input-box animation' >
                    <button className='btn' onClick={loginuser} > Login </button>
                </div>
                <div className='regi-link' >
                    <p>Don't have account  <NavLink to="/signup"> <span> Sign Up </span></NavLink>    </p>
                </div>
            </form>
        </div>
        <div className='info-content Login'>
            <h2 >
                WELCOME Back STRUGITS   
            </h2>
            <p> loginloginloginloginloginloginloginlogin loginloginv</p>

        </div>
      
    </div>
  )
}

export default Login
