import logo from "../images/logo.png"

function Nav(props) {

    return (
      <div className="Nav">
        <div className="logo">
            <img alt="logo" src={logo}></img>
        </div>
        <div className="menu">
            <span className="home" ><a href="/">Home</a></span>
            <span className="shop" ><a href="/shop">Shop</a></span>
        </div>
      </div>
    );
  }
  
  export default Nav;
  