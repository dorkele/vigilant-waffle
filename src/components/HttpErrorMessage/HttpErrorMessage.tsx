import Head from "next/head";
import { Stack } from "../Primitives/Stack";
import { Heading } from "../Primitives/Heading";
import { Box } from "../Primitives/Box";
import { NextLink } from "../NextLink";
import { Link } from "../Primitives/Link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

type HttpErrorProps = {
  title: string;
  description: string;
};

export function HttpErrorMessage({ title, description }: HttpErrorProps) {
  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        ta: "center",
      }}
    >
      <Head>
        <title>{`${title} | ${description}`}</title>
      </Head>
      <Stack.V spacing="5" align="center">
        <Heading as="h2" size="10" color="light">
          404
        </Heading>
        <Heading as="h1" size="9">
          {title}
        </Heading>
        <NextLink href="/" asChild passHref>
          <Link iconBefore={ArrowLeftIcon} color="primary" spacing="3">
            Back to homepage
          </Link>
        </NextLink>
      </Stack.V>
    </Box>
  );
}
