import React, {useState} from 'react'
import "./Login.css"
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';

const Signup = () => {

    const [passhow, setshowpass] = useState(false)
    const [cpasshow, setshowcpass] = useState(false)

    const [inpval ,  setinpval] = useState({
        name: "", 
        email:"",
        password: "",
        cpassword: ""
    })
    console.log(inpval)

    const setval = (e)=>{
        const {name, value} = e.target
        console.log(e.target.value)
        setinpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
          
        })

    }

    const addUserdata = async(e)=>{
        e.preventDefault()
        const {name,email,password,cpassword} = inpval;
        if(name === " "){
          alert("please inter your name ")
        }else if(email === ""){
          alert("please inter your email")
        }else if(!email.includes('@')){
          alert("Enter your vaild email")
        }else if(password === ""){
          alert("Please Enter your password")
        }else if(password.length < 6){
          alert("password must be 6 latter")
        }else if(cpassword === ""){
          alert("please inter your correct password ")
        }else if(cpassword.length < 6){
          alert("Confirm password must be 6 latter")
        }else if(password !== cpassword){
          alert("password and confirm password is not match")
        }else{
         console.log("user registration successfully done ")
         const data = await fetch("/register",{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify({
            name,email,password,cpassword
          })
        })
            const res = await data.json()
           // console.log(res.status)
            if(res.status === 201){
              alert("user registration done ")
              setinpval({...inpval, name:"",email:"",password:"",cpassword:""})
            }
    
        }
    
      }
    
    return (
        <div className='container'>
        <div className="curved-shape"></div>
        <div className='form-box-Login'>
            <h2 className="animation" >Register</h2>
            <form>
                <div className='input-box animation' >
                    <input  type="text" name='name' onChange={setval} value={inpval.name} id="name" required />
                    <label className=''>Name </label>
                    <span> <PersonIcon /> </span>
                </div>
                <div className='input-box animation' >
                    <input type='text' name='email' onChange={setval} value={inpval.email} id="email" required />
                    <label className=''>Email </label>
                    <span> <PersonIcon /> </span>
                </div>
                
                <div className='input-box animation' >
                    <input type={!passhow ? "password" : "text"} onChange={setval} value={inpval.password} name="password" id="password" required  />
                    <label className=''>password</label>
                    <span onClick={()=> setshowpass(!passhow)}> { !passhow ? "Show" : "Hide" }  </span>
                </div>
                <div className='input-box animation' >
                    <input type={!cpasshow ? "password" : "text"} onChange={setval} name="cpassword" value={inpval.cpassword} id="cpassword" required />
                    <label className=''> Confirm password</label>
                    <span onClick={()=> setshowcpass(!cpasshow)}> {!cpasshow ? 'Show'  : "Hide"  }  </span>
                </div>
                <div className='input-box animation' >
                    <button className='btn'  onClick={addUserdata}> Register </button>
                </div>
                <div className='regi-link' >
                    <p>Don't have account  <NavLink to="/"> <span> Login </span></NavLink>    </p>
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

export default Signup