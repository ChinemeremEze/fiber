import ham from './Hamburger Menu.svg'
import headerImg from './Assets/hero-Illustration.png'
import screenshot from './Assets/Page Image.png'
import star from './Assets/star.svg'
import Checkmark from './Assets/Checkmark.svg'
import time from './Assets/time.svg'
import code from './Assets/code.svg'
import allSizes from './Assets/allSizes.svg'
import user1 from './Assets/User Avatar.svg'
import user2 from './Assets/User Avatar 2.svg'
import user3 from './Assets/User Avatar 32.svg'
import './App.scss';
import './Info.scss'
import './SampleView.scss'
import './Testimonial.scss'
import './Footer.scss'
import './normalize.css'
import './Responsive.scss'
function App() {
  return (
    <div className="App ">
        <NavBar/>
        <Section1/>
        <Info/>
        <SampleView/>
        <Testimonial/>
        <Footer/>
    </div>
  );
}

const NavBar = () =>{
  return(
    <nav class="navbar navbar-expand-lg">
    <a id="navBrand"class="navbar-brand" href="#">Fiber</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <img src={ham}/>
    </button>
    <div class="collapse navbar-collapse justify-content-around" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Community</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Sign In</a>
          </li>
          <li class="nav-item">
            <a class="nav-link styledLink" href="#">Sign Up</a>
          </li>
        </ul>
    </div>
  </nav>
  );
}

const Section1 = () =>{
  return(
    <div class="sec-one">
      <div class="heading">

        <div className="rating">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star}  />
          <img src={star} /> <p className="ratingAvg"> &nbsp; &nbsp;Rated 4.83/5(243 reviews)</p>
        </div>
        <h1>Create your porfolio in minutes.</h1>
        <p>With Fiber you can set up your porfolio in minutes, with dozons of premade, beautiful template </p>

        <p><a className="styledLink" href="#">Start Free Trial </a> </p>
        <p><a className="" id="underlinedLink" href="#">View Examples</a></p>

          <div className="">
          <img src={Checkmark} /><p>&nbsp;No credit Card Required&nbsp;</p>
          <img src={Checkmark} /><p>&nbsp; 10 Free Templates</p>
          </div>
      </div>
      <div className="headingImage">
        <img src={headerImg}/>
      </div>

    </div>
  );
}

const Info = () =>{
  return (
    <div className="info">
      <div className="infoHeading">
        <h2>Why Fiber?</h2>
        <h1>
          A good portoflio means good employability.
        </h1>
      </div>
     <div className="infoBody">
        <div className="card" id="time">
          <img src={time} />
          <h3>Build in minutes</h3>
          <p>With a selection of templates, you can build out a portfolio in less than 10 minutes.</p>
        </div>
        <div className="card" id="code">
        <img src={code} />
          <h3> Add custom CSS</h3>
          <p>Customize your portolio even more with the ability to add your own custom CSS styles.</p>
        </div>
        <div className="card" id="responsive">
        <img src={allSizes} />
          <h3> Responsive</h3>
          <p>All Fiber templates are fully responsive to ensure the expereince is seemless across all devices.</p>
        </div>
     </div>
    </div>
  )
}

const SampleView = () =>{
    return(
      <div className="sampleView">
          <div className="sampleText">
            <h1>Diversify your portfolio.</h1>
            <p>Create an even more impresive portfolio by creating casee studies for your projetcs. Simply following step-to-step guide.</p>
            <br/>
            <p><a className="sampleLink" href="#">Start Free Trial </a></p>
          </div>
          <div className="screenshot">
            <img src={screenshot} />
          </div>
      </div>
    )
}

const Testimonial = () =>{
    return(
        <div class="testimonial">
            <div class="review">
                <div className="reviewer">
                  <img src={user1}/>
                  <h3 className="reviewerName"> Sarah Andrews</h3>
                  <p className="reviewerRevenue"> 100k in revenue</p>
                </div>
                <div className="reviewerText">
                  <p>Setting up my portfolio with Fiber too no more than 10 minutes. Since then, 
                    my portfolio has attracted a lot of clients and made me more than $100k.</p>

                    
                </div>
                <p className="reviewerLink"><a href="#">View Sarah's Portfolio</a></p>
            </div>

            <div class="review">
                <div className="reviewer">
                  <img src={user2}/>
                  <h3 className="reviewerName"> Matthew Higgins</h3>
                  <p className="reviewerRevenue"> 20k in revenue</p>
                </div>
                <div className="reviewerText">
                  <p>I have been getting A LOT of leads ever since I used Fiber's premade templates,
                     now I just need to work on my case studies and I'll be ready to go!.</p>
                     
                </div>
                <p className="reviewerLink"><a href="#">View Matthew's Portfolio</a></p>
            </div>

            <div class="review">
                <div className="reviewer">
                  <img src={user3}/>
                  <h3 className="reviewerName"> Janice Dave</h3>
                  <p className="reviewerRevenue"> 30k in revenue</p>
                </div>
                <div className="reviewerText">
                  <p> I only just started freelancing this year and I have already made more than
                     I ever made in my full-time job. The templates are just so amazing.</p>
                     
                </div>
                <p className="reviewerLink"><a href="#">View Janice's Portfolio</a></p>
            </div>
        </div>
    )
}
const Footer = () =>{
  return(
    <footer className="footer">
      <div className="section fiber">
        <h2>Fiber</h2>
        <p>With Fiber, you can setup your own personal portfolio in 
          minutes with dozens of premade, beautiful templates.</p>

        <p>Made with ♥ in New Zealand</p>
      </div>
      <div className="section sitemap"> 
        <h2>Sitemap</h2>
        <p>Homepage</p>
        <p>Pricing</p>
        <p>Testimonials</p>
        <p>Features</p>
      </div>
      <div className="section resources">
       <h2>Resources</h2>
        <p>Support</p>
        <p>Contact</p>
        <p>FAQ</p>
      </div>
      <div className="section company"> 
        <h2>Company</h2>
        <p>About</p>
        <p>Customers</p>
        <p>Blog</p>
      </div>
      <div className="section portfolios">
        <h2>Portfolios</h2>
        <p>Sarah Andrews</p>
        <p>Matthew Higgins</p>
        <p>Janice Dave</p>
      </div>
    </footer>
  )
}

export default App;