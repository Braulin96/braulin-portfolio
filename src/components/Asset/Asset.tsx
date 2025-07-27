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
        return "rounded-full size-[300px] md:size-[350px] lg:mr-[80px] border-4";
      default:
        return "size-[220px] md:size-[450px]";
    }
  };

  return (
    <figure
      data-testid="Asset"
      className={`Asset group relative ${customClass}`}
      role="img"
      style={{ height: "100%" }}
      aria-label={ariaLabel || alt}>
      <div
        className={`relative overflow-hidden border-primary-blue/10 ${getSizeClasses()}`}>
        <div className="w-full h-full bg-slate-200 border-2 border-dashed rounded-full flex items-center justify-center text-slate-500">
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
        <div
          className="absolute inset-0 bg-black/30 pointer-events-none"
          aria-hidden="true"></div>
      </div>
      {specialization && (
        <figcaption
          className="absolute max-w-[250px] text-center -bottom-4 right-0 bg-primary-blue/80 px-4 py-1 rounded-lg text-sm text-[#121B2D] font-bold"
          aria-label={`Technology stack: ${specialization}`}>
          {specialization}
        </figcaption>
      )}
    </figure>
  );
};

export default Asset;
