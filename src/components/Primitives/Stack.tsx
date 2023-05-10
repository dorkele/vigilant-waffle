import { styled, css } from "../../styles/stitches.config";

const spacingVariants = css({
  variants: {
    spacing: {
      0: {
        gap: 0,
      },
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
      13: {
        gap: "$13",
      },
    },
  },

  defaultVariants: {
    spacing: "7",
  },
});

const _HStack = styled("div", spacingVariants, {
  display: "flex",
  flexWrap: "wrap",

  variants: {
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    noShrink: {
      true: {
        "> *": {
          flexShrink: 0,
        },
      },
    },
    nowrap: {
      true: {
        flexWrap: "nowrap",
      },
    },
  },
});

const _VStack = styled("div", spacingVariants, {
  display: "flex",
  flexDirection: "column",

  variants: {
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
    },
    nowrap: {
      true: {
        flexWrap: "nowrap",
      },
    },
  },
});

export const Stack = Object.assign({}, { V: _VStack, H: _HStack });
