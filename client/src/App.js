import './App.css';
import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import 'animate.css';


function App() {

  useEffect(() =>{
    Aos.init();
    Aos.refresh();
    Aos.refreshHard();
} , []);



  return (

    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col col-xxl-12 position-relative">
            <img src="images/banner.webp" alt="" className='w-100 ' height={"78.5%"} />
          </div>

          <div className="col col-12 banner_eric position-absolute  ">
            <div className="row">
              <div className="col col-2 mx-auto">
                <img src="images/seals-removebg-preview.png" className='img-fluid animate__animated animate__fadeInDown animate__delay-0.5s' alt="" />
              </div>
            </div>
            <div className="row pb-5">
              <div className="col col-6 p-5 mx-auto text-center">
                <img src="images/ERIC_white.png" alt="" className='img-fluid animate__animated animate__fadeInUp animate__delay-1s'/> <br />
                <div className="btn animate__animated animate__fadeInRight animate__delay-2s w-25" >FUTURE IS NOW</div>
                <h1 className="text-light animate__animated animate__zoomIn animate__delay-3s">Creating Intelligent Robotics for a Connected Future.</h1>
              </div>
            </div>            
          </div>
          <div className="row specs_row justify-content-center ">
              <div className="col col-xxl-3  text-center">
                <div className="card" data-aos="fade-up"  data-aos-duration="500" >
                  <div className="card-body">
                    <h1 className="card-title"><i className="fa-solid fa-asterisk"></i></h1>
                    <div className="card-text">
                      <h6>We are ERIC</h6>
                      <h5>Nurturing Innovations</h5>
                      <h6>With the brightest minds & the latest cutting-edge technology, we provide multi-faceted unmanned systems & solutions.</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-xxl-3  text-center">
                <div className="card" data-aos="fade-up"  data-aos-duration="1000" >
                  <div className="card-body">
                    <h1 className="card-title"><i className="fa-solid fa-user-gear"></i></h1>
                    <div className="card-text">
                      <h6>We are ERIC</h6>
                      <h5>Nurturing Innovations</h5>
                      <h6>With the brightest minds & the latest cutting-edge technology, we provide multi-faceted unmanned systems & solutions.</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-xxl-3  text-center">
                <div className="card" data-aos="fade-up"  data-aos-duration="2000" >
                  <div  className="card-body">
                    <h1 className="card-title"><i className="fa-solid fa-user-plus"></i></h1>
                    <div className="card-text">
                      <h6>We are ERIC</h6>
                      <h5>Nurturing Innovations</h5>
                      <h6>With the brightest minds & the latest cutting-edge technology, we provide multi-faceted unmanned systems & solutions.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="row">
        
          <div className="row w-75 mx-auto">
            <h1>OUR PRODUCTS</h1>
            <div className="col col-8 " data-aos="zoom-out-right"  data-aos-duration="5000" >
              <h2 className='mt-5' >Panther-E</h2>
              <h6>Revolutionize shopfloor auditing with our cutting-edge Autonomous Mobile Robot (AMR). Employ ML, Computer Vision, and seamless SAP/ERP integration to streamline Manufacturing excellence system and Industry 4.0.</h6>
            </div>
            <div className="col col-4" data-aos="zoom-out-left"  data-aos-duration="1500">
              <img src="images/panther_e.png" className='img-fluid' alt="" />
            </div>
            
            <div className="col col-4" data-aos="zoom-out-right"  data-aos-duration="1500">
              <img src="images/Hexa_drone-1.png" className='img-fluid' alt="" />
            </div>
            <div className="col col-8 "data-aos="zoom-out-left"  data-aos-duration="1500">
              <h2 className='mt-5'>Hexa Drone </h2>
              <h6>Elevate your security measures with our autonomous surveillance drone, utilizing waypoint navigation and computer vision to proactively monitor your facility’s perimeter, detect anomalies, and ensure optimal efficiency and safety.</h6>
            </div>

            <div className="col col-8 " data-aos="zoom-out-right"  data-aos-duration="1500">
              <h2 className='mt-5'>ARC-1 </h2>
              <h6>Experience hassle-free water body cleaning with our advanced autonomous rover, utilizing mapping capabilities, efficient waste storage to delivering an eco-friendly solution for aquatic maintenance.</h6>
            </div>
            <div className="col col-4" data-aos="zoom-out-left"  data-aos-duration="1500">
              <img src="images/arc.png" className='img-fluid' alt="" />
            </div>

          </div>
          
        </div>

      <div className="row p-5 service_row">
        <div className="col col-4">
          <h5 data-aos="fade-right" data-aos-duration="500" >Services and Solutions</h5>
          <h2 data-aos="fade-right" data-aos-duration="1000" >OUR PURPOSE IS TO DELIVER EXELLENCEIN SERVICES AND EXECUTION</h2>
          <h6 className='p-4' data-aos="fade-right" data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus temporibus eligendi provident dicta, ex numquam excepturi ducimus aliquid illum laudantium accusamus autem suscipit eum impedit voluptatibus voluptatem voluptates delectus, incidunt optio, distinctio deleniti reiciendis? Cumque accusamus vitae, veritatis magni officiis iste omnis reiciendis unde exercitationem eius ipsa totam quod quas?</h6>
        </div>
        <div className="col col-8">
          <div className="row">
            <div className="col col-6 p-3">
              <div className="card text-light color_card" data-aos="zoom-in-up" data-aos-duration="800"  >
                <div className="card-body">
                  <h5 className="card-title">Robotics solutions</h5>
                  {/* <h6 className="card-subtitle mb-2 text-body-light">Card subtitle</h6> */}
                  <p>Automated Guided Vehicles (AGVs) and Automated Mobile Robots (AMRs) <br /> Remotely Operated Vehicles (ROVs) & Automated Underwater Vehicles (AUVs) as Unmanned Underwater Vehicles (UUVs) <br />
                    Design and layout of PCBs <br />
                   Other hardware design solutions.</p>
                </div>
              </div>
            </div>
            
            <div className="col col-6 p-3">
              <div className="card bg-transparent" data-aos="zoom-in-up" data-aos-duration="1200" >
                <div className="card-body">
                  <h5 className="card-title">Mechatronics solutions</h5>
                  {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
                  <p>Custom microntroller and microprocessor based solutions <br /> Automation and programmed logical controls <br /> Power and driving electronics <br />Automation cells and workflow optimization <br />Remote surveillance and auditing</p>
                </div>
              </div>
            </div>
            
            <div className="col col-6 p-3">
              <div className="card bg-transparent" data-aos="zoom-in-up" data-aos-duration="1600" >
                <div className="card-body">
                  <h5 className="card-title">Drone Solutions</h5>
                  {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
                  <p>Experienced with various configurations of fixed-wing, VTOL and hybrid drones
 <br />Completely in-house hardware design solutions
<br />Robust design and development of system architecture for a wide range of applications.
<br />State-of-the-art electronics setup and configuration.</p>
                </div>
              </div>
            </div>
            
            <div className="col col-6 p-3">
              <div className="card text-light color_card" data-aos="zoom-in-up" data-aos-duration="2000" >
                <div className="card-body">
                  <h5 className="card-title">Project Consultancy</h5>
                  {/* <h6 className="card-subtitle mb-2 text-body-light">Card subtitle</h6> */}
                  <p>Project planning & management as well as risk assessment & mitigation.
<br />Expert guidance to cover all aspects of robot design and development
<br />Ability to understand and address unique project challenges.
<br />CTA facility for a free first call with us!</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="row our_team_row justify-content-center p-5 text-center">
        <h1 className='mb-5' >MEET OUR TEAM</h1> 
        <div className="col col-3 ">
          <div className="card  " data-aos="zoom-in-up" data-aos-duration="400" >
          <img src="images/Chirag-Jhawar-1.jpg" className="card-img-top w-75 mx-auto" data-aos="zoom-in-up" data-aos-duration="2000" alt="..."/>
            <div className="card-body ">
              <h4 className="card-title">Chirag Jhawar</h4>
              <h5 className="card-subtitle mb-2 text-body-secondary">Team Lead :Development</h5>
              <i data-aos="flip-left" data-aos-duration="3000" className="fa-brands fa-linkedin fa-2xl"></i>
            </div>
          </div>
        </div>
        <div className="col col-3">
        <div className="card " data-aos="zoom-in-up" data-aos-duration="800" >
          <img src="images/Rohit-Panikar-1.jpg" className="card-img-top w-75 mx-auto" data-aos="zoom-in-up" data-aos-duration="2500" alt="..."/>
            <div className="card-body">
              <h4 className="card-title">Rohit Panikar</h4>
              <h5 className="card-subtitle mb-2 text-body-secondary">Team Lead :Software</h5>
              <i data-aos="flip-left" data-aos-duration="3000" className="fa-brands fa-linkedin fa-2xl"></i>
            </div>
          </div>
        </div>
        <div className="col col-3">
        <div className="card " data-aos="zoom-in-up" data-aos-duration="1200" >
          <img src="images/Mohit-Bishnoi-1.jpg" className="card-img-top w-75 mx-auto" data-aos="zoom-in-up" data-aos-duration="3000" alt="..."/>
            <div className="card-body">
              <h4 className="card-title">Mohit Bishnoi</h4>
              <h className="card-subtitle mb-2 text-body-secondary"> Team Lead :Electronics</h>
              <i data-aos="flip-left" data-aos-duration="3000" className="fa-brands fa-linkedin fa-2xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="row get_in_touch_row  mb-5">
        <div className="row text-center">
          <h1>GET IN TOUCH</h1>
          <h4>Interested in our Automation and Robotics Solutions?</h4>
          <h6>Request a Call Back today and let our experts guide you through the process</h6>
        </div>
        <div className="row justify-content-center">
          <div className="col col-6  " data-aos="fade-right" data-aos-duration="1000">
            <div className="row">
              <div className="col col-5 form-floating m-3">
                  <input type="text" className="form-control" id="Name" placeholder="Name"/>
                  <label for="Name">Name</label>
              </div>
              <div className="col col-5 form-floating m-3">
                <input type="email" className="form-control" id="email" placeholder="Email"/>
                <label for="email">Email</label>
              </div>
              <div className="col col-5 form-floating m-3">
                  <input type="number" className="form-control" id="phone" placeholder="Phone"/>
                  <label for="phone">Phone</label>
              </div>
              <div className="col col-5 form-floating m-3">
                <input type="text" className="form-control" id="Company" placeholder="Company"/>
                <label for="Company">Company</label>
              </div>
              <div className="col col-11 m-3 form-floating">
                <input type="text" className="form-control" id="message" placeholder="Message"/>
                <label for="Message">Message</label>
              </div>
              <div className="col-11 submit  m-3 text-center mx-auto">
                <button type="submit" className="btn text-light ">Send Message</button>
              </div>
            </div>
          </div>

          <div className="col col-4 p-4" data-aos="fade-left" data-aos-duration="1500">
            <div className="card w-75" >
              <div className="card-body">
                <h5 className="card-title">CONTACT</h5>
                <ul className="list-group card-text">
                  <li className="list-group-item">20/8, D1 Block, MIDC, Chinchwad, Pune – 411019, Maharashtra</li>
                  <li className="list-group-item">+91 70380 90881</li>
                  <li className="list-group-item">+91 750793 3091</li>
                  <li className="list-group-item">ericrobotics@premierseals.in</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="row text-light pt-2 text-center " style={{backgroundColor:"rgb(3, 3, 96)"}}>
        <div className="col col-6 ">
          <p>© Premier Seals 2023</p>
        </div>
        <div className="col col-6">
        <p>Terms and Conditions | Privacy Policy | Cookies</p>
        </div>
      </div>

      </div>
    </>

  );
}

export default App;
