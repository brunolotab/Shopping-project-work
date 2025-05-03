import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function Signin() {
  
        const [input, setInput] = useState({
        email: '',
        password: ''

    })
    console.log(input);

    const [message, setMessage] = useState('')



    const handlesubmit = (e) => {
        e.preventDefault();
        // if (input.email === '' || input.password === '') {
        //      alert('enter your email & password');
        //      return window.location.assign('signin')
        // }
        // else{
        //    alert ('your data is saved');
        //   sessionStorage.setItem("stored", JSON.stringify(input));
        // }


        if (input.email === 'Admin') {
        
          localStorage.setItem("item", JSON.stringify(input));
        //  return window.location.assign('/')

        }
        
        
    
        const admin = JSON.parse(localStorage.getItem("item"))

        console.log(admin);
        

        // if (admin) {
        //     window.location.assign('/')

        // }
        // else {
        //     alert ('invalid credentials')
        // }
    }

        const [toggle, setToggle] = useState();

        return (
            <div>
            <h2>please signin</h2>
                <div className='homeform'>
                    {/* <div className='image'><img src={imagepos} alt='' /></div> */}
                    <div className='formdetails'>
                        <div className='text-sidebar text-xl'>Welcome, softPOS</div>
                        <form onSubmit={handlesubmit}>
                            <div>Busness Email</div>
                            <div className='inputdetails'>
                                <input  placeholder='Enter Email'
                                    onChange={(e) => { setInput({ ...input, email: e.target.value }) }} />
                            </div>
                            <div>Password</div>
                            <div className='inputdetails flex items-center justify-between'>
                                <input type={toggle ? 'password' : 'text'} placeholder='Enter Your Password'
                                    //  value={data.password}
                                    onChange={(e) => { setInput({ ...input, password: e.target.value }) }} />
                                {/* <div className='text-[#000] text-[1.5rem]' onClick={() => { setToggle(!toggle) }}>{toggle ? <FaEyeSlash /> : <FaEye />}</div> */}
                            </div>
                            <div>Forgot Password?<span className='text-[12px] text-sidebar pl-[3px] cursor-pointer'>Reset Here</span></div>
                            {/* <div className='border-none h-12 text-center'><button className='bg-red-400 mt-[-20px] ' type='submit' >Login</button></div> */}
                            <div><button type='submit' className='bg-sidebar'>Submit</button></div>

                        </form>
                        {/* <div><button className='bg-sidebar' onClick={handlelogin}>Login</button></div> */}
                        <div>{message}</div>



                    </div>
                </div>
            </div >
        )
    }

    export default Signin

//     const Div = styled.div`
// .homeform {
//     display: flex;
//     /* justify-content: space-between; */
//     gap: 7rem;
//     padding: 4rem;
//     padding-left: 10rem;
//     margin-top: 2rem;
//     /* height: 90%; */
// }
// .formdetails {
//     padding: 2.5rem;
//     line-height: 3.4rem;
//     width: 50%;
//     border: 1px solid #eeee;
//     /* box-shadow: 15px 15px 10px 5px #cccc; */
//     box-shadow: 0px 0px 15px #ddd;

//     border-radius: 8px;
//     height: 65%;
//     padding-bottom: 3rem;
//     /* margin-bottom: 6rem; */

// }
// .inputdetails {
//     border: 1px solid #000;
//     padding: 8px;
//     width: 100%;
//     border-radius: 3px;
//     outline: none;

// }
// input {
//     outline: none;
//     font-size: 16px;
// }
// button {
//     width: 100%;
//     padding: 8px;
//     color: #ffff;
//     font-weight: bold;
//     border-radius: 10px;
// }
// .image {
//     height: 30%;
//     width: 55%;
//     /* border: 1px solid black; */
//     margin-right: 4rem;
// }
// img {
//     height: 100%;
//     width: 100%;
// }
// input::placeholder {
//     font-size: 15px;
// }
// `
 

