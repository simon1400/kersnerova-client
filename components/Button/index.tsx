import { FC } from "react";
import { ButtonS } from "./styles"

interface IButton {
  children: string;
  href: string;
}

const Button: FC<IButton> = ({href, children}) => {
  return (
    <ButtonS href={href} variant="contained">
      {children}
    </ButtonS>
  )
}

export default Button