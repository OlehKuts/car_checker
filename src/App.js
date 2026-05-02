import { _authPassword, cars } from "./constants/cars";
import { CarItem } from "./components/CarItem";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Icon } from "./components/Icon";
import { useMediaQuery } from "react-responsive";

export const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 675 });
  const [filteredCars, setFilteredCars] = useState(cars);
  const [showLogin, setShowLogin] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [isAuth, setIsAuth] = useLocalStorage("isAuth", false);
  const filterCars = (filterValue) => {
    setFilteredCars((prev) => {
      const newCars = cars.filter((car) =>
        car.carNumber.includes(filterValue.toUpperCase()),
      );
      return newCars;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordValue === _authPassword) {
      setIsAuth(true);
    } else {
      alert("Невірний пароль");
      setIsAuth(false);
    }
    setShowLogin(false);
  };
  return (
    <>
      {isMobile ? (
        <>
          <div className="frame">
            <div className="list">
              <div className="head">
                <div className="title">
                  {showLogin ? (
                    <div className="loginDiv">
                      <form onSubmit={handleSubmit}>
                        <input
                          placeholder="введіть пароль..."
                          type="password"
                          onChange={(e) => setPasswordValue(e.target.value)}
                        />
                        <button>Submit</button>
                      </form>
                    </div>
                  ) : (
                    <div
                      onClick={() => setShowLogin(true)}
                      title={!isAuth ? "Клікніть тут для авторизації" : ""}
                    >
                      Parking
                      {isAuth ? (
                        <span id="authorizedIcon">
                          <Icon
                            name="authorized"
                            size="1.2rem"
                            color="#ffd38d"
                            secondColor="brown"
                          />
                        </span>
                      ) : null}
                    </div>
                  )}
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="searchLine">
            <input
              placeholder="номер авто українською..."
              onChange={(e) => filterCars(e.target.value)}
            />
          </div>
          <div className="container">
            {filteredCars.length ? (
              <>
                {filteredCars.map((item, idx) => (
                  <CarItem
                    key={item.carNumber}
                    car={item}
                    isAuth={isAuth}
                    idx={idx}
                  />
                ))}
              </>
            ) : (
              <div className="noCarAvailable">Такого авто немає в переліку</div>
            )}
          </div>
        </>
      ) : (
        <div className="notMobileExtension">
          Оберіть будь ласка розширення для телефонів, щоб скористатися
          функціоналом
        </div>
      )}
    </>
  );
};

export default App;
