import { styled } from "../../styles/stitches.config";

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax($$itemWidth, 1fr))",

  variants: {
    spacing: {
      1: {
        gap: "$1",
      },
      2: {
        gap: "$2",
      },
      3: {
        gap: "$3",
      },
      4: {
        gap: "$4",
      },
      5: {
        gap: "$5",
      },
      6: {
        gap: "$6",
      },
      7: {
        gap: "$7",
      },
      8: {
        gap: "$8",
      },
      9: {
        gap: "$9",
      },
      10: {
        gap: "$10",
      },
      11: {
        gap: "$11",
      },
      12: {
        gap: "$12",
      },
    },
  },
});
