import { styled } from "../../styles/stitches.config";

export const Clickable = styled("button", {
  all: "unset",
  boxSizing: "border-box",
  cursor: "pointer",
  borderRadius: "$1",
  transition: "background 120ms ease-out",

  "&:hover": {
    backgroundColor: "$gray3",
  },

  "&:focus-visible": {
    outline: "2px solid $gray11",
    outlineOffset: 2,
  },

  "&:active, &[aria-expanded='true']": {
    backgroundColor: "$gray4",
  },
});
