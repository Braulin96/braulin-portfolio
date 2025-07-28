import { useEffect } from "react";

import AOS from "aos";

import "aos/dist/aos.css";

type FadeOnScrollProps = {
  data?: string;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
};

const FadeOnScroll = ({
  data = "fade-up",
  duration = 700,
  delay = 100,
  children,
  offset,
  className,
  style,
}: FadeOnScrollProps) => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      once: "true",
    });
  }, []);
  const offsetValue = offset || 200;
  return (
    <div
      style={style}
      role="presentation"
      aria-hidden="false"
      className={className}
      data-aos={data}
      data-aos-offset={offsetValue}
      data-aos-easing="ease-in-sine"
      data-aos-duration={duration}
      data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default FadeOnScroll;
