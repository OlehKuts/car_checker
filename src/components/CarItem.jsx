import { useState } from "react";
import { Icon } from "./Icon";
export const CarItem = ({ car, isAuth, idx }) => {
  const {
    section,
    brand,
    carNumber,
    color = "white",
    type,
    fee,
    appNum,
    carAmount,
  } = car;
  const [isClicked, setIsClicked] = useState(false);
  const clicker = () => {
    if (!isAuth) return;
    setIsClicked((prev) => !prev);
  };
  return (
    <>
      <div
        className="car_line"
        onClick={clicker}
        style={{
          backgroundColor:
            isAuth && isClicked
              ? "lavender"
              : idx % 2 === 0
              ? "aliceblue"
              : "white",
        }}
      >
        <div id="section">{section}</div>
        <div>{brand}</div>
        <div>{carNumber}</div>
        <div
          style={{
            backgroundColor: isClicked
              ? "lavender"
              : type && color === "white"
              ? "lightGrey"
              : idx % 2 === 0
              ? "aliceblue"
              : "white",
          }}
        >
          <Icon name="hatchbackCar" color={color} size="30px" />
        </div>
      </div>
      {isAuth && isClicked ? (
        <div
          className="car_line"
          style={{
            backgroundColor: isAuth && isClicked ? "lavender" : "white",
          }}
        >
          <div>#{appNum}</div>
          <div>{fee} ₴</div>
          <div>{carAmount} авто</div>
        </div>
      ) : null}
    </>
  );
};
