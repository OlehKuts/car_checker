import { Icon } from "./Icon";
export const CarItem = ({ car, isAuth, idx }) => {
  const { section, brand, carNumber, color = "white", type, fee, appNum } = car;
  return (
    <>
      <div
        className="car_line"
        style={{
          backgroundColor: idx % 2 === 0 ? "aliceblue" : "white",
        }}
      >
        <div id="section">{section}</div>
        {isAuth ? <div id="section_2">{appNum}</div> : null}
        <div>{brand}</div>
        <div>{carNumber}</div>
        <div
          id={isAuth ? "section_3" : ""}
          style={{
            backgroundColor:
              type && color === "white"
                ? "lightGrey"
                : idx % 2 === 0
                ? "aliceblue"
                : "white",
          }}
        >
          <Icon name="hatchbackCar" color={color} size="30px" />
        </div>
        {isAuth ? (
          <div id={fee > 0 ? "section_4" : "secondAuto"}>
            {fee > 0 ? `${fee}` : `2-е авто`}
          </div>
        ) : null}
      </div>
    </>
  );
};
