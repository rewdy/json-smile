import React from "react";
import { StyleColor } from "models";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  type?: "submit" | "button";
  color?: StyleColor;
  radiate?: boolean;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { color, radiate, className, onClick, type, ...restProps } = props;

  const [radiating, setRadiating] = React.useState<boolean>(false);

  const classList = ["btn", "btn-" + color];
  if (className) {
    classList.push(className);
  }
  if (radiate) {
    classList.push("btn-radiate");
  }
  if (radiating) {
    classList.push("radiate");
  }

  const mergedOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (radiate) {
      setRadiating(true);
      setTimeout(() => {
        setRadiating(false);
      }, 500);
    }
    if (onClick) onClick(e);
  };
  return (
    <button
      type={type || "button"}
      className={classList.join(" ")}
      onClick={mergedOnClick}
      {...restProps}
    />
  );
};
