import Carousel, {CarouselItem} from "./Carusel";

function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem> <img src="/trollface1.png" alt="troll1" /> </CarouselItem>
        <CarouselItem>  <img src="/trollface2.png" alt="troll2" style={{ height: '300px' }} /> </CarouselItem>
        <CarouselItem> <img src="/trollface3.png" alt="troll3" style={{ height: '300px' }} /> </CarouselItem>
        <CarouselItem> <img src="/trollface4.png" alt="troll4" style={{ height: '300px' }} /> </CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
