import { styled, css } from "../../styles/stitches.config";

const baseContainer = css({
  width: "100%",
  mx: "auto",
  px: "$gutter",
});

export const Container = styled("div", baseContainer, {
  variants: {
    size: {
      prose: {
        maxWidth: "$proseContainer",
      },
      card: {
        maxWidth: "calc($containerWide + 96px)",
      },
      default: {
        maxWidth: "$containerWide",
      },
      normal: {
        maxWidth: "$containerNormal",
      },
      small: {
        maxWidth: "$containerSmall",
      },
      overflowRight: {
        maxWidth: "calc(100vw - ((100vw - 1200px) / 2))",

        "@desktopAndUp": {
          mr: 0,
          pr: 0,
        },
      },
      overflowLeft: {
        maxWidth: "calc(100vw - ((100vw - 1200px) / 2))",

        "@desktopAndUp": {
          ml: 0,
        },
      },
    },
  },

  defaultVariants: {
    size: "default",
  },
});

export const Section = styled("section", {
  variants: {
    size: {
      1: {
        py: "$7",
        "@tablet": {
          py: "$6",
        },
      },
      2: {
        py: "$9",
        "@tablet": {
          py: "$7",
        },
      },
      3: {
        py: "$10",
        "@tablet": {
          py: "$8",
        },
      },
      4: {
        py: "$11",
      },
    },
    tint: {
      white: {
        backgroundColor: "$white",
      },
      tint1: {
        backgroundColor: "$bgTint1",
      },
      tint2: {
        backgroundColor: "$bgTint2",
      },
      transparent: {
        backgroundColor: "transparent",
      },
    },
  },

  defaultVariants: {
    size: "3",
  },
});
