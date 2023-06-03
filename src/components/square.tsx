import { useEffect, useState } from "react";

type SquareColor = "red" | "blue" | "green" | "yellow" | "orange" | "purple" | "indigo";

type VisibleColor = SquareColor | "transparent";

const colors: Record<VisibleColor, string> = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  orange: "bg-orange-500",
  purple: "bg-purple-500",
  indigo: "bg-indigo-500",
  transparent: "bg-transparent",
};

export type SquareProps = {
  color: SquareColor;
  intervalMilliseconds: number;
  coordinates: {
    x: `left-${string}` | `right-${string}`;
    y: `top-${string}` | `bottom-${string}`;
  };
};

export function Square(props: SquareProps) {
  const [color, setColor] = useState<VisibleColor>("transparent");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) => (prev === "transparent" ? props.color : "transparent"));
    }, props.intervalMilliseconds);

    return () => {
      clearInterval(interval);
    };
  }, [props.color, props.intervalMilliseconds]);

  return (
    <div
      className={`absolute h-4 w-4 ${colors[color]} ${props.coordinates.x} ${props.coordinates.y}`}
    />
  );
}
