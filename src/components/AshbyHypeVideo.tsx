import { CSS } from "@stitches/react";
import { Box } from "./Primitives/Box";

interface AshbyHypeVideoProps {
  css?: CSS;
}

export const AshbyHypeVideo = ({ css }: AshbyHypeVideoProps) => (
  <Box
    css={{
      position: "relative",
      paddingBottom: "56.25%",
      overflow: "hidden",
      height: 0,
      borderRadius: "$4",

      iframe: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      },

      ...css,
    }}
  >
    <iframe
      loading="lazy"
      src="https://www.youtube.com/embed/jHoAwGNFdqI?modestbranding=1&controls=1&rel=0&origin=https://ashbyhq.com"
      title="Ashby Hype Video"
      width="560"
      height="315"
      frameBorder="0"
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Box>
);
