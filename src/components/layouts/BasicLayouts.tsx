import router from "next/router";
import React from "react";
import Footer from "../widgets/footer/Footer";
import Navbar from "../widgets/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

type props = {
  children: React.ReactNode;
  title?: string;
};

const BasicLayouts = ({ children, title }: props) => {
  return (
    <Box>
      <Head>
        <title>{title ?? "IFASSION - Find your own passion for IT"}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default BasicLayouts;
