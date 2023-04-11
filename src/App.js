import Nav from "./components/Nav"
import HomeMain from "./components/HomeMain";

function App(props) {

  return (
    <div className="App">
      <Nav selectedCars={props.selectedCars} itemCount={props.itemCount}/>
      <HomeMain />
    </div>
  );
}

export default App;
