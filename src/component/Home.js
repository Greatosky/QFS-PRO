import '../assets/Home.css';
import img from '../assets/img/qfs.png';
import two from '../assets/img/hero-background.jpg';
import thr from '../assets/img/one.png';
import fou from '../assets/img/two.png';
import one from '../assets/img/three.png';
import fiv from '../assets/img/Screenshot-2025-02-11-at-1.10.44 AM-1024x379.png';
// import six from '../assets/img/two.png';


function Hom() {

    const handleLogin = () => {
        window.location.href = './login'; 
    }
     const handlesign = () => {
        window.location.href = './sign'; 
    };
    return (
        <div className="body">
            <div id="home">
                <div className="img-logo">
                <img src={img} alt="qfs"  width="100" height="50"  />
                </div>
                <div>
                    <button onClick={handleLogin}>Login</button> 
                    <span onClick={handlesign}>Join QFS</span>
                </div>
            </div>
            <div className="home-content">
                <div className="home-content-text">
                    <div className="qfs-logo">
                        <img src={two} alt="qfs"  width="500" height="500"  />
                    </div>
                    <h1>Quantum <span>Financial</span> System <span> Ledger®</span></h1>
                    <p> <span>Build</span> with Ledger to bring <span>security</span> to your community.  <span>Easy. Accessible. Proven.</span> </p>
                </div>
            </div >
                <div className="home-header">
                    <div className="home-content-use">
                        <div className="contenar ">
                            <div>
                                <img src={thr} alt="qfs" width="40" height="40" />
                            </div>
                            <div className="list">
                                <h2>Desktop & mobile</h2>
                                <p>Manage your funds anytime and anywhere with our great mobile and web apps. Track prices and stay up to date with markets.</p>
                            </div>
                            
                        </div>

                        <div className="contenar">
                            <div>
                                <img src={fou } alt="qfs" width="40" height="40" />
                            </div>
                            <div className="list">
                                <h2>Safe and secure</h2>
                                <p>QFSLedger provides highly secure storage for your Lumens and other digital assets, offering 2FA and multisig protection.</p>
                            </div>
                        </div>

                        <div className="contenar ">
                            <div>
                                <img src={one } alt="qfs" width="40" height="40" />
                            </div>
                            <div className="list">
                                <h2>Simple & clean</h2>
                                <p>Nice design, simple interface, clear instructions and helpful tips. LOBSTR is an easy way to get started with crypto.</p>
                            </div>
                        </div> 
                    </div> 
                    
                </div>

                <div className="crypto-pack">
                    <hr className="lines"/>
                    <div className="addvertisement">
                        <div className="img">
                            <img src={fiv} alt="qfs"  width="500" height="250"  />
                        </div>
                        <div className="add-text">
                            <h2>All assets in one place</h2>
                            <p>Many companies have issued their tokens on Stellar network: stablecoins, tethered crypto assets, tech startups, ICOs.
                            Trade and manage them all with QFSLedger.</p>
                            <button>Creat Account</button>
                        </div>
                    </div>
                </div>
                <hr className="lines"/>


                <div className="home-content-list">
                    <div className="list-one fir">
                        <h2>1,000,000+</h2>
                        <h3>Total users</h3>
                        <p>Intuitive design and user-friendly interface make QFSLedger the go-to choice for beginners and pros. Easily send, receive, and trade your crypto.</p>
                    </div>
                    <div className="list-one fir">
                        <h2>4.75</h2>
                        <h3>On Google Play & App Store</h3>
                        <p>LOBSTR is the most trusted wallet on the Stellar network, thanks to its regular updates, powerful features, and ongoing support.</p>
                    </div>
                    <div className="list-one ">
                        <h2>5,000,000+</h2>
                        <h3>Monthly transactions</h3>
                        <p>Lightning-fast and affordable transactions with some of the lowest fees on the market, providing the seamless digital experience you deserve.</p>
                    </div>
                </div>
                <footer>
                   
                        <div className="footer-text">
                            <img src={img} alt="qfs"  width="100" height="50"  />
                            <p> QFSLedger is operated by an independent commercial entity unaffiliated with the Stellar Development Foundation. </p>
                        </div>
                </footer>
                
        </div>
    );
};

export default Hom;