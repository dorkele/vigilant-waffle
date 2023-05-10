import { styled } from "../../styles/stitches.config";

export const IconBox = styled("div", {
  width: "$$iconSize",
  height: "$$iconSize",
  display: "flex",
  alignItems: "center",

  "> svg": {
    width: "100%",
    height: "100%",
  },
  variants: {
    appearance: {
      avatar: {
        overflow: "hidden",
        borderRadius: "$2",
      },
      avatarRound: {
        overflow: "hidden",
        borderRadius: "$round1",
      },
    },
    size: {
      em: {
        $$iconSize: "1em",
      },
      1: {
        $$iconSize: "14px",
      },
      2: {
        $$iconSize: "18px",
      },
      3: {
        $$iconSize: "24px",
      },
      4: {
        $$iconSize: "40px",
      },
      5: {
        $$iconSize: "64px",
      },
      6: {
        $$iconSize: "96px",
      },
    },
  },
});
