import { type HTMLAttributes, type FC } from "react";

const Logo: FC<HTMLAttributes<HTMLParagraphElement>> = ({ className }) => {
  return <p className={className}>AELL</p>;
};

export default Logo;
