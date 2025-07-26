export const getColorClass = (type?: string) => {
  switch (type) {
    case "design":
      return "text-secondary-purple-500";
    case "ui-library":
      return "text-primary-blue-500";
    case "framework":
      return "text-accent-green-500"; 
    case "language":
      return "text-sky-400"; 
    case "build-tool":
      return "text-rose-400"; 
    case "package-manager":
      return "text-slate-300"; 
    case "testing":
      return "text-secondary-purple-500";
    case "seo":
      return "text-teal-600"; 
    case "a11y":
      return "text-primary-blue-500"; 
    case "version-control":
      return "text-slate-300";
    case "styling":
      return "text-stone-400"; 
    case "api-integration":
      return "text-violet-300"; 
    default:
      return "text-white";
  }
};