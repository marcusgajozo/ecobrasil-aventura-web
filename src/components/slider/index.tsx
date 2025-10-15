import React from "react";

interface SimpleSliderProps {
  value: number;
  trackClassName?: string;
  progressClassName?: string;
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({
  value,
  trackClassName = "w-full h-6 bg-gray-700 bg-opacity-50  overflow-hidden",
  progressClassName = "h-full bg-gradient-to-r from-success-700 to-success-500  transition-all duration-300 ease-in-out",
}) => {
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div
      className={trackClassName}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={progressClassName}
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
};

export default SimpleSlider;
