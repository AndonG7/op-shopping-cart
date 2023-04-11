import background from "../images/don-fleet.jpg"


function ShopHeader() {
    return (
      <div className="ShopHeader" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
        <div className="overlay"></div>
        <h1>Choose the car of your liking</h1>
      </div>
    );
  }
  
export default ShopHeader;
  