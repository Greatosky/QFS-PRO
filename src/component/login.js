import '../assets/loging.css';
// import myBackgroundImage from '../assets/img/fi.jpg';
import mypic from '../assets/img/ti.jpg';

function Login() {
     const handlecreate = () => {
        window.location.href = 'https://greatosky.github.io/QFS-PRO/#/sign'; 
    }
    return (

        <div className="log-body" >

            <div className='login-container'>
                <div className='login-img'>
                    <img src={mypic} width={'200px'} alt='' />
                </div>
                    <div className='login'>
                       <div>
                                <h1>Login to Get Started</h1>
                                <span>Your ease of mind is our priority.</span> <br/>                                
                                <form>
                                    <div className='login-form'>
                                        <label htmlFor="email">Email</label> <br />
                                        <input type="text" id="email" name="email" required placeholder='Email' />
                                    </div>
                                    <div className='login-form pass'>
                                        <label htmlFor="email">Password</label> <br />
                                        <input type="password" id="password" name="password" required placeholder='Password' />
                                    </div>
                                </form>
                                {/* <button type="submit" className='butto'>Login</button> <br /> */}

                                 <div className='direct'>
                                        <div> <p><input type="radio" className='rad'></input> Remember me</p> </div>
                                        <div> <p>Forgot password?</p></div>
                                </div>

                                <div className='other'>
                                    <button className='butt'>Login to your Account</button> <br />
                                     <div> <p onClick={handlecreate} style={{cursor:"pointer"}}>Create Account</p></div>
                                </div>
                               
                                 <div className="l">
                                    
                                    {/* <span className='or'> <hr className='li' /> Or <hr className='link'/> </span> */}
                                </div> 
                        </div>
                    </div>
            </div>

        </div>
    ); 
};
export default Login;