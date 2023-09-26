import "./App.css";
import qrImage from "./images/image-qr-code.png";

function App() {
  return (
    <main>
      <div className="main-box">
        <div className="image">
          <img src={qrImage} alt="QR-image" />
        </div>
        <div className="content-box">
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
