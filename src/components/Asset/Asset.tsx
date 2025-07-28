import "./Asset.styles.scss";

type AssetProps = {
  image?: string;
  customClass?: string;
  variant?: "default" | "fullRounded" | "flexible";
  specialization?: string;
  alt?: string;
  ariaLabel?: string;
};

const Asset = ({
  image,
  customClass = "",
  specialization,
  variant = "default",
  alt = "Profile image",
  ariaLabel,
}: AssetProps) => {
  // Dynamic sizing based on variant
  const getSizeClasses = () => {
    switch (variant) {
      case "flexible":
        return "w-full h-full min-h-[300px]";
      case "fullRounded":
        return "rounded-2xl size-[300px] md:size-[350px] lg:mr-[80px] border-4";
      default:
        return "size-[320px] lg:size-[450px]";
    }
  };

  return (
    <div className="relative ">
      <figure
        data-testid="Asset"
        className={`Asset group relative bg-transparent ${customClass}`}
        role="img"
        style={{
          animation:
            variant === "default" ? "smoothFloat 3s ease-in-out infinite" : "",
        }}
        aria-label={ariaLabel || alt}>
        <div
          className={`relative overflow-hidden border-primary-blue/10 ${getSizeClasses()}`}>
          <div
            style={{
              // animation:
              //   variant === "default"
              //     ? "smoothFloat 3s ease-in-out infinite"
              //     : "",
              height: "100%",
            }}
            className="w-full h-full bg-slate-200 border-2 border-dashed rounded-2xl flex items-center justify-center text-slate-500">
            {image && (
              <img
                src={image}
                alt={alt}
                className={`group-hover:scale-105 transition-transform duration-500 ${
                  variant === "flexible"
                    ? "w-full h-full object-cover"
                    : "w-full h-full object-cover"
                }`}
                loading="lazy"
              />
            )}
          </div>
          {/* bg overlay */}
          {/* <div
            className="absolute inset-0 bg-navbar-bg/30 pointer-events-none"
            aria-hidden="true"></div> */}
        </div>
      </figure>
      {specialization && (
        <figcaption
          className="absolute max-w-[250px] text-center -bottom-6 py-2 px-5 right-1/2 transform translate-x-1/2 bg-primary-blue/90 rounded-full text-sm text-white font-bold"
          aria-label={`Technology stack: ${specialization}`}>
          {specialization}
        </figcaption>
      )}
    </div>
  );
};

export default Asset;
