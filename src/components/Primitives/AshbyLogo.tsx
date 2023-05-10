import Logo from "../../assets/ashby-logo.svg";
import { styled } from "../../styles/stitches.config";

export const AshbyLogo = styled(Logo, {
  variants: {
    color: {
      primary: {
        color: "$primary",
      },
      black: {
        color: "$gray13",
      },
    },
    size: {
      default: {
        height: 24,
      },
      small: {
        height: 22,
      },
    },
  },

  defaultVariants: {
    color: "primary",
    size: "default",
  },
});
