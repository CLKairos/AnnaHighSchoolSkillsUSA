import { useState } from "react";
import skillsUSALogo from "./assets/skillsUSALogo.png";
import annaISDLogo from "./assets/annaISDLogo.png";
import sept3rd from "./minutes/09-03-2025.pdf";
import "./App.css";

//COMPONENTS!!

const AnnouncementBanner = () => (
  <div className="announcement-banner">
    <p>{/* call to action */}
      <strong>Go Follow Our Instagram!</strong>{" "}
      <a href="https://www.instagram.com/annahighschoolskillsusa/" target="_blank"> {/* link to instagram */}
        Click Here
      </a>
    </p>
  </div>
);

const Header = () => (
  <header className="header">
    {/* Lowkey I want to get a picture of the team and put it as a background for this section, kinda like how the annaisd site is */}
    <div className="logos">
      <a href="https://www.skillsusa.org/" target="_blank"> {/* link to skillsusa site */}
        <img src={skillsUSALogo} alt="SkillsUSA Logo" className="logo" />
      </a>
      <a href="https://ahs.annaisd.org/" target="_blank"> {/* link to annaisd site */}
        <img src={annaISDLogo} alt="Anna ISD Logo" className="logo" />
      </a>
    </div>
    <h1>SkillsUSA @ AnnaISD</h1>
  </header>
);

const Card = ({ title, children }) => (
  <div className="card">
    <h2>{title}</h2>
    {children}
  </div>
);


{/* I will admit that this wasn't my code but I did modify it a bit */}
const PdfModal = ({ file, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <object data={file} type="application/pdf" className="pdf-object" />
    </div>
  </div>
);  


//
function App() {
  const [showPdf, setShowPdf] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  return (
    <>
      <AnnouncementBanner />
      <Header />

      <main className="main-content">
        <Card title="About the Team">
          <p> {/* yea no I did NOT write all that, I'm good at programming not copywriting. */}
            SkillsUSA is more than a student organization. It is a movement. We prepare the next generation of leaders by equipping students with hands-on technical skills, professional confidence, and a lifelong commitment to excellence. Through SkillsUSA, students don’t just learn career skills. They build character, teamwork, and leadership. Together, we create a community of motivated, responsible citizens ready to contribute to the workforce and beyond. As the nation’s premier workforce development organization, SkillsUSA bridges the gap between classrooms and careers. We empower students to explore their passions, refine their skills, and step boldly into tomorrow’s workforce with confidence. SkillsUSA develops more than technical ability. It cultivates leaders. Students gain the confidence, collaboration skills, and real-world experience needed to excel in both their chosen careers and their communities.
          </p>
        </Card>

        <Card title="Our Sponsors">
          <ul>
            <li><strong>Club Sponsor</strong> - Erik Plossl</li>
            <li><strong>Comp Sci & Comp Tech</strong> - Erik Plossl</li>
            <li><strong>Photography</strong> - Jennilee Torres</li>
          </ul>
        </Card>

        <Card title="Meet the Leadership">
          <ul>
            <li><strong>President</strong> - Thomas McKinley</li>
            <li><strong>Secretary</strong> - Vacant</li>
            <li><strong>Treasurer</strong> - Opeyemi Opakunle</li>
            <li><strong>Parliamentarian</strong> - Vacant</li>
            <li><strong>Historian</strong> - Christian Larsen</li> {/* HEY THATS ME! */}
          </ul>
        </Card>

        {/* I want to make this a bit more dynamic later, but for now this is fine*/}
        <Card title="Next Meeting">
          <p>Feb 4th</p>
          <p>4:40 PM - 5:20 PM</p>
          <p>AHS Library</p>
          <div className="calendar-links">
            {/* improved with AI, but still my code */}
            {["apple", "google", "outlook"].map((platform) => (
              <a key={platform} href={`https://www.addevent.com/event/7pdmzqtdvv9g+${platform}`} target="_blank">
                <img src={`https://cdn.addevent.com/libs/imgs/icon-emd-share-${platform}-t1.png`} alt={`${platform} calendar`}/>
              </a>
            ))}
          </div>
        </Card>

        {/* this used to not be scaleable AT ALL, but now it is! */}
        <Card title="Previous Meeting Minutes">
          <button className="pdf-btn" onClick={() => { setPdfFile(sept3rd); setShowPdf(true); }}>
            9/3/25
          </button>
          {/* 
            <button className="pdf-btn" onClick={() => { setPdfFile(filename); setShowPdf(true); }}>
             Date Here
            </button>
          */}
        </Card>

        <Card title="Questions?">
          <p>Email Our Sponsor: <a href="mailto:erik.plossl@annaisd.org">Erik Plossl</a> @ erik.plossl@annaisd.org</p>
        </Card>

        <Card title="Follow Us">
          <p>
            <div className="calendar-links">
              <a href={`https://www.instagram.com/annahighschoolskillsusa/`} target="_blank">
                <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png`} style={{ height: "35px", width: "35px"}} alt={`Instagram logo`}/>
              </a>  
            </div>
          </p>
        </Card>
      </main>

      {showPdf && <PdfModal file={pdfFile} onClose={() => setShowPdf(false)} />}
    </>
  );
}

export default App;
