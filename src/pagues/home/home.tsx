import Button from "../../components/button/button";
import Circle from "../../components/circle/circle";
import Cross from "../../components/cross/cross";

const Home = () => {
  return (
    <div className="mv-home">
      <h1>Choose your figure</h1>
      <section className="d-flex flex-row ">
        <Circle cursorPointer opacityInHover />
        <Cross cursorPointer opacityInHover />
      </section>
      <Button text="PLAY" onClick={() => console.log("..")} />
      <section className="d-flex">
        <h2>Play with machine</h2>
        <input type="checkbox" />
      </section>
    </div>
  );
};

export default Home;
