import { css } from "../../styles/stitches.config";

export const sharedTextVariants = css({
  variants: {
    italic: {
      true: {
        fontStyle: "italic",
      },
    },
    strikethrough: {
      true: {
        textDecoration: "line-through",
      },
    },
    underline: {
      true: {
        textDecoration: "underline",
      },
    },
    color: {
      primary: { color: "$primary" },
      heading: { color: "$textHeading" },
      dark: { color: "$textDark" },
      default: { color: "$textDefault" },
      muted: { color: "$textMuted" },
      light: { color: "$textLight" },
      inherit: { color: "currentColor" },
    },
    font: {
      sans: { fontFamily: "$primary" },
      serif: { fontFamily: "$serif", letterSpacing: "$body !important" }, // FIXME: Remove use of important
    },
    code: {
      true: {
        fontFamily: "$mono",
        backgroundColor: "$gray3",
        paddingX: "0.3em",
        paddingTop: "0.15em",
        paddingBottom: "0.2em",
        lineHeight: "normal",
        fontSize: "85%",
        borderRadius: "$1",
        color: "$orange10",
      },
    },
  },
});
