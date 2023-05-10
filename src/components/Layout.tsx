import React from "react";
import { Nav } from "./Nav/Nav";
import { Box } from "./Primitives/Box";
import { Footer } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <Box as="main" css={{ marginTop: "$sizes$headerHeight" }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
