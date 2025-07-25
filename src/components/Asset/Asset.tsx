import "./Asset.styles.scss";

type AssetProps = {
  image?: string;
  customClass?: string;
  variant?: "default" | "fullRounded";
  specialization?: string;
};

const Asset = ({
  image,
  customClass = "",
  specialization,
  variant = "default",
}: AssetProps) => {
  return (
    <>
      <div
        data-testid="Asset"
        className={`Asset group relative ${customClass}`}>
        <div
          className={`relative overflow-hidden border-4 border-primary-blue/10 ${
            variant === "default"
              ? "rounded-lg transform rotate-3 size-[220px] md:size-[250px]"
              : "rounded-full size-[300px] md:size-[350px] lg:mr-[80px]"
          }`}>
          <div className="w-full h-full bg-slate-200 border-2 border-dashed rounded-full flex items-center justify-center text-slate-500">
            <img
              src={image}
              className="group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* bg overlay  */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        </div>
        {specialization && (
          <div className="absolute max-w-[250px] text-center -bottom-4 right-0 bg-primary-blue/80 px-4 py-1 rounded-lg text-sm text-[#121B2D] font-bold ">
            {specialization}
          </div>
        )}
      </div>
    </>
  );
};

export default Asset;
