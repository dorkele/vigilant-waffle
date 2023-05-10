import { styled } from "../../styles/stitches.config";
import { sharedTextVariants } from "./Shared";

const _Heading = styled("h2", sharedTextVariants, {
  color: "$textHeading",
  lineHeight: "$heading",
  fontWeight: "$heading",
  letterSpacing: "$heading",

  variants: {
    size: {
      1: {
        fontVariant: "all-small-caps",
        letterSpacing: "$caps",
        fontSize: "$2",
        fontWeight: "$medium",
      },
      2: {
        fontSize: "$2",

        lineHeight: "$body",
        letterSpacing: "$body",
        fontWeight: "$medium",
      },
      3: {
        fontSize: "$3",

        lineHeight: "$body",
        fontWeight: "$medium",
        letterSpacing: "$body",
      },
      4: {
        lineHeight: "$heading",
        fontWeight: "$medium",
        fontSize: "$4",
      },
      5: {
        fontSize: "$5",
      },
      6: {
        fontSize: "$6",
        "@tablet": {
          fontSize: "$5",
        },
      },
      7: {
        fontSize: "$7",
        "@tablet": {
          fontSize: "$6",
        },
      },
      8: {
        fontSize: "$8",
        lineHeight: "$title",
        "@tablet": {
          fontSize: "$7",
        },
      },
      9: {
        fontSize: "$9",
        lineHeight: "$title",
        letterSpacing: "$title",

        "@tablet": {
          fontSize: "$8",
        },
      },
      10: {
        fontSize: "$10",
        lineHeight: "$title",

        letterSpacing: "$title",

        "@tablet": {
          fontSize: "$9",
        },
      },
    },
  },

  defaultVariants: {
    size: "6",
  },
});

export const Heading = _Heading;
