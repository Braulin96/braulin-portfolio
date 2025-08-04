import { useRef, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

type Slide = {
  name: string;
  icon?: string;
  type?: string;
};

type SlideCarouselProps = {
  slides: Slide[];
  variant?: string;
  children?: (slide: Slide, index: number) => React.ReactNode;
  ariaLabel?: string;
};

const SlideCarousel = memo(
  ({
    children,
    ariaLabel,
    slides,
    variant = "default",
  }: SlideCarouselProps) => {
    const swiperRef = useRef<SwiperType | null>(null);

    // Duplicate slides for seamless infinite loop
    const duplicatedSlides = [...slides, ...slides, ...slides];

    return (
      <div className="w-full overflow-hidden">
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
          speed={1500}
          modules={[Autoplay]}
          className="tools-swiper w-full"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          role="grid"
          aria-label={
            ariaLabel || "Collection of development tools and technologies"
          }>
          {duplicatedSlides.map((slide, index) => (
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
