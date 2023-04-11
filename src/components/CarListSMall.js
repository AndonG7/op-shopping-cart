function CarListSmall(props) {
    let total=0;

    props.selectedCars.map((car) => {
      total = total+car.price;
    });

    return (
      <div className="CarListSmall">
        {props.selectedCars.map((car, index) => {
          return (
            <div className="car-small" key={index}>
              <div class="car-image-small">
                <img src={car.src} alt={car.alt}></img>
              </div>
              <div className="details-small">
                <h2 className="car-title-small">{car.name}</h2>
                <p className="price-small">Price {car.price} €</p>
              </div>
            </div>
          );
        })}
        <div className="total">
          <span>Total: {total} €</span>
          <button className="checkout">To Checkout</button>
        </div>      
      </div>
    );
  }
  
export default CarListSmall;
  