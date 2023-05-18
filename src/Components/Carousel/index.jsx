import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className="relative translate-y-[-125px] hidden sm:block">
      <BsChevronLeft
        className={`${
          currentSlide === 0 && "disable"
        } absolute left-[-35px] cursor-pointer text-2xl text-white`}
        onClick={() => {
          previous();
        }}
      />

      <BsChevronRight
        className="absolute right-[-35px]  cursor-pointer text-2xl text-white"
        onClick={() => {
          next();
        }}
      />
    </div>
  );
};

export const Carousel = ({
  children,
  itemsSuperLarge = 5,
  itemsDesktop = 4,
  itemsTablet = 3,
  itemsMobile = 1,
  setIsSwipping
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1480 },
      items: itemsSuperLarge,
    },
    desktop: {
      breakpoint: { max: 1480, min: 1024 },
      items: itemsDesktop,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: itemsTablet,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: itemsMobile,
    },
  };
 
  return (
    <MultiCarousel
      swipeable={true}
      draggable={true}
      beforeChange={() => setIsSwipping(true)}
      afterChange={() => setIsSwipping(false)}
      showDots={false}
      arrows={false}
      responsive={responsive}
      infinite={true}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px h-full  "
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
    >
      {children}
    </MultiCarousel>
  );
};
