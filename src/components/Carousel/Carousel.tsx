import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Paragraph from "components/Paragraph/Paragraph";

import Arrow from "assets/images/prev_arrow.svg";
import RectangleNextArrow from "assets/images/prev_arrow.svg";
import RectanglePrevArrow from "assets/images/prev_arrow.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.styles.scss";

type CarouselProps = {
  slides: { url: string }[];
  onSlideChange?: (nextSlide: number) => void;
  customClasses?: string;
  displayArrows?: boolean;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  currentSlide?: number;
  title: string;
  ariaLabel?: string;
};

const isFirstSlide = (currentSlide: number) => currentSlide === 0;
const isLastSlide = (currentSlide: number, totalSlides: number) =>
  currentSlide === totalSlides - 1;

const NextArrow = ({ onClick, currentSlide, slideCount }: any) => {
  const isLast = isLastSlide(currentSlide, slideCount);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!isLast) onClick();
    }
  };

  return (
    <button
      style={{
        backgroundImage: `url(${RectangleNextArrow})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`absolute right-1 md:right-2 top-1/2 z-30 flex -translate-y-1/2 text-center p-[12px] rounded-full bg-black/50 transition-all duration-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black ${
        isLast ? "opacity-0 pointer-events-none" : "cursor-pointer opacity-100"
      }`}
      onClick={isLast ? undefined : onClick}
      onKeyDown={handleKeyDown}
      disabled={isLast}
      aria-label={`Go to next slide. Current slide ${
        currentSlide + 1
      } of ${slideCount}`}
      tabIndex={isLast ? -1 : 0}>
      <img
        src={Arrow}
        alt=""
        className="m-auto md:size-[30px] size-[20px]"
        aria-hidden="true"
      />
    </button>
  );
};

const PrevArrow = ({ onClick, currentSlide }: any) => {
  const isFirst = isFirstSlide(currentSlide);

  const handlePrevClick = (event: React.MouseEvent) => {
    if (!isFirst) {
      event.preventDefault();
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!isFirst) onClick();
    }
  };

  return (
    <button
      className={`absolute left-1 md:left-2 top-1/2 z-30 flex -translate-y-1/2 text-center rounded-full p-[12px] bg-black/50 transition-all duration-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black ${
        isFirst ? "opacity-0 pointer-events-none" : "cursor-pointer opacity-100"
      }`}
      onClick={handlePrevClick}
      onKeyDown={handleKeyDown}
      disabled={isFirst}
      style={{
        backgroundImage: `url(${RectanglePrevArrow})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      aria-label={`Go to previous slide. Current slide ${currentSlide + 1}`}
      tabIndex={isFirst ? -1 : 0}>
      <img
        src={Arrow}
        alt=""
        className="m-auto rotate-180 md:size-[30px] size-[20px]"
        aria-hidden="true"
      />
    </button>
  );
};

const Carousel = ({
  slides,
  onSlideChange,
  customClasses,
  displayArrows = true,
  onMouseOver,
  onMouseOut,
  currentSlide,
  title,
  ariaLabel,
}: CarouselProps) => {
  const [internalCurrentSlide, setInternalCurrentSlide] = useState(
    currentSlide || 0
  );

  const settings = {
    infinite: true,
    arrows: slides.length > 1 && displayArrows,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: slides.length > 1 && displayArrows ? <NextArrow /> : null,
    prevArrow: slides.length > 1 && displayArrows ? <PrevArrow /> : null,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      setInternalCurrentSlide(nextSlide);
      if (onSlideChange) onSlideChange(nextSlide);
    },
  };

  let sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const slideIndex = currentSlide || 0;
    setInternalCurrentSlide(slideIndex);
    sliderRef.current?.slickGoTo(slideIndex);
  }, [currentSlide]);

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      data-testid="Carousel"
      className={`Carousel relative w-full md:max-h-[600px] md:h-[600px] ${
        customClasses || ""
      }`}
      role="region"
      aria-label={ariaLabel || `Image carousel for ${title}`}
      aria-live="polite">
      {slides?.length === 1 ? (
        <div className="relative w-full h-full">
          {slides?.map((slide, index) => (
            <figure key={index} className="relative w-full h-full">
              <img
                src={slide.url}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full max-h-[700px] object-cover transition-all duration-[4000ms] ease-in-out hover:scale-105 hover:opacity-90 rounded-[14px]"
              />
              {/* Overlay for single slide */}
              <figcaption className="absolute bottom-0 left-0 right-0 px-4 pb-2 pt-10 z-10 bg-gradient-to-b from-transparent via-black/20 to-black/50 rounded-b-[14px]">
                <div className="flex justify-between w-full">
                  <Paragraph
                    text={title}
                    customClass="!text-white"
                    ariaLabel={`Project title: ${title}`}
                  />
                  <Paragraph
                    text="1/1"
                    customClass="!text-white !text-sm !font-bold"
                    ariaLabel="Image 1 of 1"
                  />
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="relative w-full h-full">
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef.current = slider;
            }}
            className="w-full h-full [&_.slick-list]:h-full [&_.slick-track]:h-full [&_.slick-slide]:h-full [&_.slick-slide>div]:h-full"
            role="presentation">
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full">
                <img
                  src={slide.url}
                  alt={`${title} - Image ${index + 1} of ${slides.length}`}
                  className="w-full h-full max-h-[700px] object-cover transition-all duration-[4000ms] ease-in-out hover:scale-105 hover:opacity-90 rounded-[14px]"
                />
              </div>
            ))}
          </Slider>

          {/* Text overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 px-4 pb-2 pt-10 z-20 bg-gradient-to-b from-transparent via-black/20 to-black/50 rounded-b-[14px]"
            role="status"
            aria-live="polite">
            <div className="flex justify-between w-full">
              <Paragraph
                text={title}
                customClass="!text-white"
                ariaLabel={`Project title: ${title}`}
              />
              <Paragraph
                text={`${internalCurrentSlide + 1}/${slides.length}`}
                customClass="!text-white !text-sm !font-bold"
                ariaLabel={`Image ${internalCurrentSlide + 1} of ${
                  slides.length
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
