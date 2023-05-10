import React from "react";
import { Layout } from "../components/Layout";
import { HttpErrorMessage } from "../components/HttpErrorMessage/HttpErrorMessage";
import { Container, Section } from "../components/Primitives/Container";

export default function Custom404() {
  return (
    <Layout>
      <Section>
        <Container>
          <HttpErrorMessage
            title="This page doesn't exist"
            description="We can't find what you're looking for."
          />
        </Container>
      </Section>
    </Layout>
  );
}
