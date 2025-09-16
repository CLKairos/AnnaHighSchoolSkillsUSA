import { useState } from 'react'
import skillsUSALogo from './assets/skillsUSALogo.png'
import annaISDLogo from './assets/annaISDLogo.png'
import sept9th from './minutes/09-03-2025.pdf'
import './App.css'

function App() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <div className="announcement-banner">
        <h2>Announcement</h2>
        <p>VOTE FOR OUR LEADERSHIP! <a href='https://forms.gle/nk2wZXGrcHVfZAQ67'>Google Form</a></p>
      </div>
      <div className='titlecard'>
        <div className='logos'>
          <a href="https://www.skillsusa.org/" target="_blank">
            <img
              src={skillsUSALogo}
              className="logo"
              alt="SkillsUSA logo featuring a stylized flag design representing teamwork and leadership in a professional, welcoming tone"
            />
          </a>
          <a href="https://ahs.annaisd.org/" target="_blank">
            <img
              src={annaISDLogo}
              className="logo"
              alt="Anna Independent School District logo with bold text Anna ISD, conveying a sense of community and academic pride"
            />
          </a>
        </div>
        <h1>SkillsUSA + AnnaISD</h1>
        <br />
      </div>
      <div className="card">
        <h2>About the Team</h2>
        <p>SkillsUSA is more than a student organization. It is a movement. We prepare the next generation of leaders by equipping students with hands-on technical skills, professional confidence, and a lifelong commitment to excellence. Through SkillsUSA, students don’t just learn career skills. They build character, teamwork, and leadership. Together, we create a community of motivated, responsible citizens ready to contribute to the workforce and beyond. As the nation’s premier workforce development organization, SkillsUSA bridges the gap between classrooms and careers. We empower students to explore their passions, refine their skills, and step boldly into tomorrow’s workforce with confidence. SkillsUSA develops more than technical ability. It cultivates leaders. Students gain the confidence, collaboration skills, and real-world experience needed to excel in both their chosen careers and their communities.</p>
      </div>
      <div className="card">
        <h2>Our Sponsors</h2>
        <h3>Club Sponsor</h3>
        <p>Erik Plossl</p>
        <h3>Comp Sci & Comp Tech</h3>
        <p>Erik Plossl</p>
        <h3>Health Sciences</h3>
        <p>Bill Borowski & Kaitlyn Cook</p>
        <h3>Photography</h3>
        <p>Jennilee Torres</p>
      </div>
      <div className="card">
        <h2>Meet the Leadership</h2>
        <p>President - Thomas McKinley</p>
        <p>Secretary - </p>
        <p>Treasurer - </p>
        <p>Parliamentarian - </p>
        <p>Historian - <a href='https://christianlarsen.kairosllc.org'>Christian Larsen</a></p>
      </div>
      <div className="card">
        <h2>Our Next Meeting</h2>
        <p>Oct. 8th (tentative)</p>
        <p>4:45 PM - 5:30 PM</p>
        <p>AHS Library</p>
        <sub>Add to Calendar</sub>
        <p style={{margin:"0px 0px 10px 0px",textAlign:"center",fontSize:"0px"}}>
          <a href="https://www.addevent.com/event/At26720979+apple" title="Apple" target="_blank" style={{display:"inline"}}>
            <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-apple-t1.png" alt="Apple calendar icon for adding event" width="35" style={{width:"35px",display:"inline"}} />
          </a>
          <a href="https://www.addevent.com/event/At26720979+google" title="Google" target="_blank" style={{display:"inline"}}>
            <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-google-t1.png" alt="Google calendar icon for adding event" width="35" style={{width:"35px",display:"inline"}} />
          </a>
          <a href="https://www.addevent.com/event/At26720979+outlook" title="Outlook" target="_blank" style={{display:"inline"}}>
            <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlook-t1.png" alt="Outlook calendar icon for adding event" width="35" style={{width:"35px",display:"inline"}} />
          </a>
        </p>
      </div>
      <div className='card'>
        <h2>Previous Meeting Minutes</h2>
        <button onClick={() => setShowPdf(true)}>
          <p>9/3/25</p>
        </button>
      </div>
      {showPdf && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
          onClick={() => setShowPdf(false)}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "90vw",
              maxHeight: "90vh",
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              position: "relative"
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "#e74c3c",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "5px 10px",
                cursor: "pointer"
              }}
              onClick={() => setShowPdf(false)}
            >
              Close
            </button>
            <object data={sept9th} type="application/pdf" width="800px" height="600px" style={{maxWidth:"95vw",maxHeight:"95vh"}}></object>
          </div>
        </div>
      )}
      <div className="card">
        <h2>Questions?</h2>
        <p>Email Our Representative! <a href="mailto:erik.plossl@annaisd.org">Erik Plossl</a></p>
      </div>
    </>
  )
}

export default App
