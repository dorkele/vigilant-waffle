import * as React from "react";
import { CustomerQuote } from "../lib/customer_quotes";
import { StyledCustomerLogo } from "./Logos/CustomerLogo";
import { Box } from "./Primitives/Box";
import { Container } from "./Primitives/Container";
import { Stack } from "./Primitives/Stack";
import { FeaturedQuote } from "./Quote";

export const FeaturedQuotesTabs = ({ quotes }: { quotes: CustomerQuote[] }) => {
  const [selectedQuote, setSelectedQuote] = React.useState(quotes[0]);

  return (
    <Stack.V spacing={{ "@tablet": "6" }}>
      <Container size="normal" css={{ p: 0, minHeight: 400 }}>
        <FeaturedQuote {...selectedQuote} />
      </Container>
      <Box
        css={{
          px: "$gutter",
          overflowX: "auto",
          scrollPaddingLeft: "$space$gutter",
          scrollPaddingRight: "$space$gutter",
          overscrollBehaviorInline: "contain",
          scrollSnapType: "inline mandatory",
          "@tablet": {
            marginLeft: "calc($space$gutter * -1)",
            marginRight: "calc($space$gutter * -1)",
          },
          backgroundSoftFadeEdges: "32px",
        }}
      >
        <Stack.H
          justify={"center"}
          spacing="8"
          nowrap
          align="end"
          css={{
            borderTop: "2px solid $gray4",
            "@tablet": {
              width: "max-content",
              minWidth: "100%",
            },
          }}
        >
          {quotes.map((quote) => (
            <QuoteTab
              key={quote.slug}
              quote={quote}
              isSelected={quote.slug === selectedQuote.slug}
              onClick={() => setSelectedQuote(quote)}
            />
          ))}
        </Stack.H>
      </Box>
    </Stack.V>
  );
};

interface QuoteTabProps {
  isSelected: boolean;
  quote: CustomerQuote;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const QuoteTab = ({ isSelected, quote, onClick }: QuoteTabProps) => {
  const { logo, name } = quote.quoteAuthor.company;

  return (
    <Box
      css={{
        width: "max-content",
        cursor: "pointer",
        pt: "$5",
        boxShadow: isSelected ? "0 -2px 0 0 $colors$gray13" : "none",
        flexShrink: 0,
        scrollSnapAlign: "start",
        "&:hover": {
          boxShadow: !isSelected && "0 2px 0 0 $colors$gray8",
        },
      }}
      onClick={onClick}
    >
      <StyledCustomerLogo src={logo} title={name} alt={name} size="2" />
    </Box>
  );
};
