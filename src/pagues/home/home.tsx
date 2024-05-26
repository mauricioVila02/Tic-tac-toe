import Button from "../../components/button/button";
import Circle from "../../components/circle/circle";
import Cross from "../../components/cross/cross";
import "./../../styles/global.css";

const Home = () => {
  return (
    <div className="mv-home mv-center-element w-100 h-100">
      <h1>Choose your figure</h1>
      <section className="d-flex flex-row ">
        <Circle cursorPointer opacityInHover />
        <Cross cursorPointer opacityInHover />
      </section>
      <Button text="PLAY" onClick={() => console.log("..")} />
      <section className="d-flex">
        <h2>Play with machine my friend</h2>
        <input type="checkbox" />  
      </section>
    </div>
  );
};

export default Home;
