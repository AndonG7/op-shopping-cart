import background from "../images/background.jpg"
import ferrari from "../images/red-ferrari-laferrari-car.png"

function HomeMain() {

  return (
    <div className="HomeMain" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
      <div className="left-home">
        <div className="text">
          <h3>The most luxurious cars</h3>
          <h1><span className="don">DON</span><span className="auto">AUTO</span></h1>
          <button className="cta">Catalog <span className="strelka"> {" >"}</span></button>
        </div>
      </div>
      <div className="right-home">
        <img alt="ferrari" src={ferrari}></img>
      </div>
    </div>
  );
}

export default HomeMain;
