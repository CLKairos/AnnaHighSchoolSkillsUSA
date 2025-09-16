import { useState } from "react";
import skillsUSALogo from "./assets/skillsUSALogo.png";
import annaISDLogo from "./assets/annaISDLogo.png";
import sept9th from "./minutes/09-03-2025.pdf";
import "./App.css";

/* -------------------- Components -------------------- */
const AnnouncementBanner = () => (
  <div className="announcement-banner">
    <p>
      <strong>Vote for our Leadership!</strong>{" "}
      <a href="https://forms.gle/nk2wZXGrcHVfZAQ67" target="_blank">
        Click Here
      </a>
    </p>
  </div>
);

const Header = () => (
  <header className="header">
    <div className="logos">
      <a href="https://www.skillsusa.org/" target="_blank">
        <img src={skillsUSALogo} alt="SkillsUSA Logo" className="logo" />
      </a>
      <a href="https://ahs.annaisd.org/" target="_blank">
        <img src={annaISDLogo} alt="Anna ISD Logo" className="logo" />
      </a>
    </div>
    <h1>SkillsUSA + AnnaISD</h1>
  </header>
);

const Card = ({ title, children }) => (
  <div className="card">
    <h2>{title}</h2>
    {children}
  </div>
);

const PdfModal = ({ file, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>
      <object data={file} type="application/pdf" className="pdf-object" />
    </div>
  </div>
);

/* -------------------- Main App -------------------- */
function App() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <AnnouncementBanner />
      <Header />

      <main className="main-content">
        <Card title="About the Team">
          <p>
            SkillsUSA is more than a student organization. It is a movement. We prepare the next generation of leaders by equipping students with hands-on technical skills, professional confidence, and a lifelong commitment to excellence. Through SkillsUSA, students don’t just learn career skills. They build character, teamwork, and leadership. Together, we create a community of motivated, responsible citizens ready to contribute to the workforce and beyond. As the nation’s premier workforce development organization, SkillsUSA bridges the gap between classrooms and careers. We empower students to explore their passions, refine their skills, and step boldly into tomorrow’s workforce with confidence. SkillsUSA develops more than technical ability. It cultivates leaders. Students gain the confidence, collaboration skills, and real-world experience needed to excel in both their chosen careers and their communities.
          </p>
        </Card>

        <Card title="Our Sponsors">
          <ul>
            <li><strong>Club Sponsor</strong> - Erik Plossl</li>
            <li><strong>Comp Sci & Comp Tech</strong> - Erik Plossl</li>
            <li><strong>Health Sciences</strong> - Bill Borowski & Kaitlyn Cook</li>
            <li><strong>Photography</strong> - Jennilee Torres</li>
          </ul>
        </Card>

        <Card title="Meet the Leadership">
          <ul>
            <li><strong>President</strong> - Thomas McKinley</li>
            <li><strong>Secretary</strong> - </li>
            <li><strong>Treasurer</strong> - </li>
            <li><strong>Parliamentarian</strong> - </li>
            <li>
              <strong>Historian</strong>  - <a href="https://christianlarsen.kairosllc.org">Christian Larsen</a>
            </li>
          </ul>
        </Card>

        <Card title="Next Meeting">
          <p>Oct. 8th (tentative)</p>
          <p>4:45 PM - 5:30 PM</p>
          <p>AHS Library</p>
          <div className="calendar-links">
            {["apple", "google", "outlook"].map((platform) => (
              <a
                key={platform}
                href={`https://www.addevent.com/event/At26720979+${platform}`}
                target="_blank"
              >
                <img
                  src={`https://cdn.addevent.com/libs/imgs/icon-emd-share-${platform}-t1.png`}
                  alt={`${platform} calendar`}
                />
              </a>
            ))}
          </div>
        </Card>

        <Card title="Previous Meeting Minutes">
          <button className="pdf-btn" onClick={() => setShowPdf(true)}>
            9/3/25
          </button>
        </Card>

        <Card title="Questions?">
          <p>
            Email Our Representative:{" "}
            <a href="mailto:erik.plossl@annaisd.org">Erik Plossl</a>
          </p>
        </Card>
      </main>

      {showPdf && <PdfModal file={sept9th} onClose={() => setShowPdf(false)} />}
    </>
  );
}

export default App;
