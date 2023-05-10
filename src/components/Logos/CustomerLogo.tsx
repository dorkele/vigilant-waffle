import { styled } from "../../styles/stitches.config";
import { Image } from "../Primitives/Image";

export const StyledCustomerLogo = styled(Image, {
  maxHeight: "100%",

  variants: {
    size: {
      3: {
        maxHeight: 24,
        maxWidth: 190,

        "@mobile": {
          maxHeight: 18,
          maxWidth: 120,
        },
      },
      2: {
        height: 22,
        maxWidth: 180,

        "@mobile": {
          height: 18,
          maxWidth: 120,
        },
      },
      1: {
        height: 20,
        maxWidth: 160,

        "@mobile": {
          height: 16,
          maxWidth: 100,
        },
      },
    },
  },
});
