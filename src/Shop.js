import Nav from "./components/Nav"
import ShopHeader from "./components/ShopHeader";
import CarList from "./components/CarList";

function Shop(props) {
    return (
      <div className="Shop">
        <Nav selectedCars={props.selectedCars} itemCount={props.itemCount} />
        <ShopHeader />
        <CarList cars={props.cars} addCar={props.addCar} />
      </div>
      
    );
  }
  
  export default Shop;
  