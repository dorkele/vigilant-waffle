import * as React from "react";
import { Box } from "./Primitives/Box";
import { Paragraph } from "./Primitives/Text";

interface G2LogoProps {
  width: number;
  height: number;
  displayText: boolean;
}

export const G2Logo = ({ width, height, displayText }: G2LogoProps) => {
  return (
    <Box css={{ textAlign: "center" }}>
      {displayText ? (
        <Paragraph css={{ textAlign: "center", marginBottom: "5px" }} size="2">
          Read our reviews
        </Paragraph>
      ) : null}

      <a
        href="https://www.g2.com/products/ashby-ashby/reviews?utm_source=review-widget"
        title="Read reviews of Ashby on G2"
        target={"_blank"}
      >
        <img src={"/logos/g2.svg"} width={width} height={height} />
      </a>
    </Box>
  );
};
