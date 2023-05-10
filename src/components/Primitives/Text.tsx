import { styled } from "../../styles/stitches.config";
import { sharedTextVariants } from "./Shared";

export const Paragraph = styled("p", sharedTextVariants, {
  color: "$textDefault",
  lineHeight: "$body",
  fontWeight: "$body",
  letterSpacing: "$body",

  variants: {
    lineClamp: {
      3: {
        display: "-webkit-box",
        WebkitLineClamp: "3",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
      4: {
        display: "-webkit-box",
        WebkitLineClamp: "4",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
    },
    size: {
      prose: {
        fontSize: "$35",
      },
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
      4: {
        fontSize: "$4",
      },
      5: {
        fontSize: "$5",

        "@mobile": {
          fontSize: "$4",
        },
      },
    },
  },

  defaultVariants: {
    size: "4",
  },
});
