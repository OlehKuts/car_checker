import {cars} from "./constants/cars";
import {CarItem} from "./components/CarItem"
import { useState } from "react";

export const App = () => {
  const [filteredCars, setFilteredCars] = useState(cars);
  const filterCars = (filterValue) =>{
    setFilteredCars(prev => {
      const newCars = cars.filter(car => car.carNumber.includes(filterValue.toUpperCase()))
      return newCars
    })
  }
  return (
    <>
    <div className="frame">
      <div className="list">
        <div className="head">
          <div className="title">
           <div>Cars - Huzara 8</div>
           <div>
</div>
          </div>
        </div>
      </div>
    </div>

    <div className="searchLine">
      <input
       placeholder="номер авто українською..."
       onChange={(e) => filterCars(e.target.value)} />
    </div>
    <div className="container">
      {filteredCars.length ? 
       <>{filteredCars.map(item => <CarItem key={item.carNumber} car={item} />)}</>
      : 
    <div className="noCarAvailable">Такого авто немає в переліку</div>
      }
      </div>

  </>
  );
}

export default App;
