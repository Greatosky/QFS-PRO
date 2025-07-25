import '../assets/loging.css';
import mypic from '../assets/img/ti.jpg';


function Sign() {
    const handlesign = () => {
        window.location.href = './login'; 
    }
  return (
    <div className="log-body">

            <div className='login-container'>
                    <div className='login-img logo'>
                        <img src={mypic} alt="Logo" width={'200px'}  />
                    </div>
                    <div className='login sign'>
                        <h1>Create Account</h1>
                        <span>Your ease of mind is our priority</span> <br/>
                        
                        <form>
                            <div className='login-form'>
                                <label htmlFor="name">Enter Full Name</label> <br />
                                <input type="name" name="name" required placeholder='Full Name' />
                            </div>
                            <div className='login-form '>
                                <label htmlFor="email">Enter Email </label> <br />
                                <input type="email"  name="email" required placeholder='Email' />
                            </div>
                             <div className='login-form'>
                                <label htmlFor="password">Enter Password</label> <br />
                                <input type="password" name="password" required placeholder='Password' />
                            </div>
                        </form>
                       
                        <div className='other'>
                            <button className='butt'>Create Account</button>
                        </div>
                            <div className='direct'>
                                <div> <p> Already have Account</p> </div>
                                <div> <p onClick={handlesign} style={{cursor:"pointer"}}>Sign In</p></div>
                            </div>
                    </div>
            </div>

        </div>
  );
}
export default Sign;
