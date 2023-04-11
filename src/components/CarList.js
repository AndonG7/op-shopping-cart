function CarList(props) {
    return (
      <div className="CarList">
        <h2 style={{color: "rgb(180, 0, 0)", fontSize: "2.5em"}}>All Cars</h2>
        <div className="car-list">
            {props.cars.map((car, index) => {
                        return (
                          <div className="car" key={index} onClick={() => props.addCar(car)}>
                                <img className="car-image" src={car.src} alt={car.alt}></img>
                                <div className="details">
                                    <h2 className="car-title">{car.name}</h2>
                                    <p className="performance">
                                        <span className="hp">{car.hp}hp  |  </span>
                                        <span className="acs">0-100 in {car.acs}s</span>
                                    </p>
                                    <p className="price">Price {car.price} €</p>
                                </div>
                            </div>
                        );
                    })}
        </div>
      </div>
    );
  }
  
export default CarList;
  