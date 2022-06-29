const DEFAULT = "Default";
const LABELS = {
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Less: "bg-teal-400",
  [DEFAULT]: "bg-blue-400",
};

const colorLabel = (label = DEFAULT) => {
  return LABELS[label] || LABELS[DEFAULT];
};

export default colorLabel;
