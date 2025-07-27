import { useRef, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

type SlideCarouselProps = {
  slides: {
    name: string;
    icon?: string;
    type?: string;
  }[];
  variant?: string;
  children?: (slide: any, index: number) => React.ReactNode;
  ariaLabel?: string;
};

const SlideCarousel = memo(
  ({
    children,
    ariaLabel,
    slides,
    variant = "default",
  }: SlideCarouselProps) => {
    const swiperRef = useRef<any>(null);

    return (
      <div className="max-w-[500px]">
        <Swiper
          ref={swiperRef}
          slidesPerView="auto"
          spaceBetween={24}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: variant === "reverse",
          }}
          speed={900}
          modules={[Autoplay]}
          className="tools-swiper"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          role="grid"
          aria-label={
            ariaLabel || "Collection of development tools and technologies"
          }>
          {slides.map((slide, index) => (
            <SwiperSlide key={`${slide.name}-${index}`} className="!w-auto">
              {children ? children(slide, index) : null}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
);

SlideCarousel.displayName = "SlideCarousel";

export default SlideCarousel;
