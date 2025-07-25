export const getColorClass = (type?: string) => {
  switch (type) {
    case "design":
      return "text-purple-500";
    case "ui-library":
      return "text-blue-500";
    case "framework":
      return "text-green-500";
    case "language":
      return "text-yellow-400";
    case "build-tool":
      return "text-red-500";
    case "package-manager":
      return "text-orange-500";
    case "testing":
      return "text-pink-500";
    case "seo":
      return "text-teal-500";
    case "a11y":
      return "text-indigo-500";
    case "version-control":
      return "text-gray-500";
    case "styling":
      return "text-gray-200";
    case "api-integration":
      return "text-lime-500";
    default:
      return "tex-white";
  }
};