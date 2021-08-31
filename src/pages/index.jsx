import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Nav from "../components/nav";
import Hero from "../components/hero";
import AboutGame from "../components/about-game";
import AboutDeveloper from "../components/about-dev";
import Footer from "../components/footer";

export default function IndexPage({ data }) {
  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <div className="min-h-screen bg-hero bg-top bg-contain bg-no-repeat relative">
        <div className="relative overflow-hidden">
          <Nav />
          <main>
            <Hero />
            <AboutGame />
            <AboutDeveloper />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
