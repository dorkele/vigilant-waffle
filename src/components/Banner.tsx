import { ChevronRightIcon } from "@radix-ui/react-icons";
import { styled } from "../styles/stitches.config";
import { NextLink } from "./NextLink";
import { Box } from "./Primitives/Box";
import { IconBox } from "./Primitives/IconBox";
import { Link } from "./Primitives/Link";
import { Stack } from "./Primitives/Stack";
import { Paragraph } from "./Primitives/Text";
import Config from "../lib/config";

const StyledBanner = styled("div", {
  p: "$1",
  borderRadius: "$round",
  overflow: "hidden",
  boxShadow: "$elevation1",
  gradientRight:
    "hsl(245deg 50% 25%) 0%,hsl(244deg 50% 30%) 23%,hsl(244deg 50% 36%) 33%,hsl(244deg 51% 42%) 42%,hsl(245deg 51% 47%) 50%,hsl(245deg 58% 53%) 57%,hsl(254deg 66% 56%) 63%,hsl(269deg 66% 57%) 70%,hsl(282deg 65% 57%) 76%,hsl(294deg 63% 58%) 83%,hsl(306deg 72% 62%) 91%,hsl(315deg 95% 68%) 100%",
});

const SpecialBanner = ({ children }) => (
  <StyledBanner>
    <Box
      css={{
        background: "$white",
        borderRadius: "$round",
        py: "$3",
        px: "$5",
        "@mobile": {
          py: "$2",
          px: "$4",
        },
      }}
    >
      <Stack.H align="baseline" spacing="4">
        {children}
      </Stack.H>
    </Box>
  </StyledBanner>
);

export const HomepageBanner = () => (
  <SpecialBanner>
    <Paragraph
      size="3"
      css={{
        color: "$textDark",
        fontWeight: "$medium",
      }}
    >
      {Config.homepage_banner.banner_text}
    </Paragraph>
    <NextLink href={Config.homepage_banner.link_url} passHref asChild>
      <Link target={"_blank"} color="primary">
        <Stack.H align="center" spacing="0">
          {Config.homepage_banner.link_text}{" "}
          <IconBox
            size={{
              "@initial": "2",
              "@tablet": "1",
            }}
            css={{
              "@mobile": {
                display: "none",
              },
            }}
          >
            <ChevronRightIcon />
          </IconBox>
        </Stack.H>
      </Link>
    </NextLink>
  </SpecialBanner>
);
