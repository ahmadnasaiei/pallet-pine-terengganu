import Carousel from "react-multi-carousel";
import s from "./CarouselComponent.module.css";
import "react-multi-carousel/lib/styles.css";

type CarouselItem = {
  id: number;
  imgPath: string;
};

type CarouselComponentProps = {
  imgPath: CarouselItem[];
};
const CarouselComponent = ({ imgPath }: CarouselComponentProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      ssr={true}
      responsive={responsive}
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5s"
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      autoPlay={true}
      autoPlaySpeed={5000}
      dotListClass={s.customDotList}
      itemClass={`${s.carouselItemInitial} ${s.carouselItem}`}
    >
      {imgPath.map((item) => (
        <div key={item.id} className={s.carouselImageWrapper}>
          <img src={item.imgPath} alt={`Slide ${item.id}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
