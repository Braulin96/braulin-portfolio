import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";

import Paragraph from "components/Paragraph/Paragraph";
import Button from "components/Button/Button";

import Arrow from "assets/images/prev_arrow.svg";
import RectangleNextArrow from "assets/images/prev_arrow.svg";
import RectanglePrevArrow from "assets/images/prev_arrow.svg";
import Close from "assets/images/close.svg";

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
  description?: string;
  ariaLabel?: string;
};

const isFirstSlide = (currentSlide: number) => currentSlide === 0;
const isLastSlide = (currentSlide: number, totalSlides: number) =>
  currentSlide === totalSlides - 1;

const NextArrow = ({
  onClick,
  currentSlide,
  slideCount,
}: {
  onClick: () => void;
  currentSlide: number;
  slideCount: number;
}) => {
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
        alt="Next slide"
        className="m-auto md:size-[30px] size-[20px]"
        aria-hidden="true"
      />
    </button>
  );
};

const PrevArrow = ({
  onClick,
  currentSlide,
}: {
  onClick: () => void;
  currentSlide: number;
}) => {
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
        alt="Previous slide"
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
  description,
  ariaLabel,
}: CarouselProps) => {
  const [internalCurrentSlide, setInternalCurrentSlide] = useState(
    currentSlide || 0
  );
  const [showDescription, setShowDescription] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const sliderRef = useRef<Slider>(null);

  // Create a stable reference to the current slide for arrows
  const currentSlideRef = useRef(internalCurrentSlide);
  currentSlideRef.current = internalCurrentSlide;

  const handleSlideChange = (current: number, next: number) => {
    setInternalCurrentSlide(next);
    if (onSlideChange) onSlideChange(next);
  };

  const settings = {
    infinite: true,
    arrows: slides.length > 1 && displayArrows,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      slides.length > 1 && displayArrows && !showDescription ? (
        <NextArrow
          onClick={() => sliderRef.current?.slickNext()}
          currentSlide={internalCurrentSlide}
          slideCount={slides.length}
        />
      ) : undefined,
    prevArrow:
      slides.length > 1 && displayArrows && !showDescription ? (
        <PrevArrow
          onClick={() => sliderRef.current?.slickPrev()}
          currentSlide={internalCurrentSlide}
        />
      ) : undefined,
    beforeChange: handleSlideChange,
    afterChange: (current: number) => {
      // Ensure state is synced after animation completes
      setInternalCurrentSlide(current);
    },
  };

  // Sync external currentSlide prop with internal state
  useEffect(() => {
    if (currentSlide !== undefined && currentSlide !== internalCurrentSlide) {
      setInternalCurrentSlide(currentSlide);
      sliderRef.current?.slickGoTo(currentSlide);
    }
  }, [currentSlide, internalCurrentSlide]);

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      data-testid="Carousel"
      className={`Carousel relative w-full h-full ${customClasses || ""}`}
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
              <figcaption className="absolute bottom-0 left-0 right-0 px-4 pb-2 pt-10 z-10 bg-gradient-to-b from-transparent via-black/20 to-black/50 rounded-b-[14px]">
                <div className="flex justify-between w-full">
                  <Paragraph
                    text={title}
                    customClass="!text-white"
                    ariaLabel={`Project title: ${title}`}
                  />
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="relative w-full h-full">
          <div className="relative w-full h-full">
            <Slider
              {...settings}
              ref={sliderRef}
              className={`w-full h-full [&_.slick-list]:h-full [&_.slick-track]:h-full [&_.slick-slide]:h-full [&_.slick-slide>div]:h-full`}>
              {slides.map((slide, index) => (
                <div key={index} className="w-full h-full">
                  <img
                    src={slide.url}
                    alt={`${title} - Image ${index + 1} of ${slides.length}`}
                    className="w-full h-full transition-all duration-[4000ms] ease-in-out hover:scale-105 hover:opacity-90 rounded-[14px] object-cover object-center"
                  />
                </div>
              ))}
            </Slider>

            {/* Animated overlay */}
            <AnimatePresence>
              {showDescription && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-10 bg-[#1A2437]"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Text overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 z-20 rounded-b-[14px] transition-all duration-300 ${
              showDescription
                ? "bg-[#1A2437]"
                : "bg-gradient-to-b from-transparent via-black/30 to-black/80"
            }`}
            role="status"
            aria-live="polite">
            <div className="flex justify-between w-full gap-x-[30px] p-4">
              <AnimatePresence mode="wait">
                {showDescription ? (
                  <motion.div
                    key="description"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full relative overflow-hidden">
                    {title && (
                      <Paragraph
                        text={title}
                        customClass="!text-white !font-bold"
                        ariaLabel={`Project title: ${title}`}
                      />
                    )}
                    {description && (
                      <Paragraph
                        text={description}
                        customClass="!text-white !text-sm !font-bold"
                        ariaLabel={`Project description: ${description}`}
                      />
                    )}

                    <button
                      className="absolute cursor-pointer top-0 right-0 p-2 rounded-full bg-black/10 shadow-2xl"
                      onClick={() => setShowDescription(false)}
                      aria-label="Close project description">
                      <img
                        src={Close}
                        alt="Close description"
                        className="size-4"
                      />
                    </button>
                  </motion.div>
                ) : (
                  <button
                    key="show-button"
                    className="bg-white text-[#1A2437] px-4 py-2 rounded-lg font-medium md:text-sm text-xs"
                    onClick={() => setShowDescription(true)}>
                    Show Details
                  </button>
                )}
              </AnimatePresence>

              {!showDescription && (
                <Paragraph
                  text={`${internalCurrentSlide + 1}/${slides.length}`}
                  customClass="!text-white !text-sm !font-bold shrink-0 mt-auto"
                  ariaLabel={`Image ${internalCurrentSlide + 1} of ${
                    slides.length
                  }`}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
