import React from 'react'
import './Dashboard.css'
const Dashboard = () => {
 return (
   <>
  <div className='header'>
    <img className='logo  ' src='./icon.png' alt=''/>
    <img className='logo-header' src='./goodspace.png' alt=''/>
    <div className='search'>
    <p style={{textAlign:'center',padding:'0 20px'}}>Search</p>
    </div>
    <div className='header-icon'>
      <img src="./feedback.jpg" alt=""/>
      <p>Feedback</p>
    </div>
    <div className='header-icon'>
      <img src="./hire.png" alt=""/>
      <p>Hire</p>
    </div>
    <div className='header-icon'>
      <img src="./best-seller.png" alt=""/>
      <p>Try Premium</p>
    </div>
    <div className='header-icon'>
      <img src="./notification icon.svg" alt=""/>
      <p>Notifications</p>
    </div>
    <div className='header-icon'>
      <img src="./chat icon.svg" alt=""/>
      <p>Message</p>
    </div>
    <img className='img-avatar-short' src='https://bit.ly/white-pigeon' alt=''/>
  </div>
  <div className='body-container'>
   <div className='col-1'>
   <div className='card-1'>
   <div className='row-11'> 
    <span className='edit-span'>Edit</span>
     <img className='img-avatar' src='https://bit.ly/white-pigeon' alt=''/>
     <span className='name'>John L. Glenn</span>
     <span className='location'>26, New Delhi</span>
     <div class='availability'>
      <div className='green-circle'></div>
      <span> Available Immediately</span>
      </div>
     </div>
     <hr/>
     <div className='row-12'>
      <span>Skills</span>
      <div className='skills-div'>
       <div>Python</div>
       <div>SQL</div>
       <div>C++</div>
      </div>
      <div className='type-of-work'>
      <p>Type of Work</p>
       <i></i>
      </div>
      <p className='work-from-home'>
        Work from home
        </p>
        <div className='compensation'>
          <p>Compensation</p>
          <i></i>
        </div>
        <div className='per-month'>
          <p>Per Month</p>
          <p>$25k - 50k</p>
        </div>
        <div className='per-hour'>
          <p>Per Hour</p>
          <p>$12 - 50</p>
        </div>
     </div>
     </div>
     <div className='card-2'>
        <img src="./best-seller.png" alt=""></img>
        <p>Try Premium Features</p>
    </div>
    <div className='card-3'>
        {/* <img src="./best-seller.png" alt=""></img> */}
        <p>Available Immediately</p>
    </div>
    </div>
    <div className='col-2'>
   <div className='card-1 h-500'>
   <div className='row-11'> 
     <img className='img-avatar' src='https://bit.ly/white-pigeon' alt=''/>
     <span className='name'>Binay Pratap Singh</span>
     <span className='location'>26, New Delhi</span>
     <div class='availability'>
      <div className='green-circle'></div>
      <span> Available Immediately</span>
      </div>
     </div>
     <hr/>
     <div className='row-12'>
      <span>Skills</span>
      <div className='skills-div'>
       <div>Python</div>
       <div>SQL</div>
       <div>C++</div>
      </div>
      <div className='type-of-work'>
      <p>Type of Work</p>
       <i></i>
      </div>
      <p className='work-from-home'>
        Work from home
        </p>
        <div className='compensation'>
          <p>Compensation</p>
          <i></i>
        </div>
        <div className='per-month'>
          <p>Per Month</p>
          <p>$25k - 50k</p>
        </div>
        <div className='per-hour'>
          <p>Per Hour</p>
          <p>$12 - 50</p>
        </div>
     </div>
     </div>
    </div>
    <div className='col-3'>
      <div className='card-4'>
        <div className='card-header'>Give Feedback to <span style={{color:'#2763FF'}}>Binay Pratap Singh</span></div>
        <div className='sub-body'>
          <div className='sub-body-1'>
            <span>Your feedback is <span style={{color:'#2763FF'}}>confidential</span></span>
            <p>Your feedback would be anonymous and won't be shared with anyone</p>
            <button>Okay</button>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
 )
}

export default Dashboard
