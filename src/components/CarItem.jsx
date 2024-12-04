import { Icon } from "./Icon";
export const CarItem = ({ car }) => {
  const { section, brand, carNumber, color = "white", type } = car;
  return (
    <div className="car_line">
      <div id="section">{section}</div>
      <div>{brand}</div>
      <div>{carNumber}</div>
      <div
        style={{
          backgroundColor: type && color === "white" ? "lightGrey" : "white",
        }}
      >
        <Icon name="hatchbackCar" color={color} size="30px" />
      </div>
    </div>
  );
};
