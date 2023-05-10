import { createMedia } from "@artsy/fresnel";
import { breakpoints, styled } from "../styles/stitches.config";

const MediaBreakpoints = createMedia({
  breakpoints,
});

export const mediaStyles = MediaBreakpoints.createMediaStyle();

export const { MediaContextProvider, Media: _Media } = MediaBreakpoints;

export const Media = styled(_Media, {});
