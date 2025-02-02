"use client";
import React from "react";
import Banner from "./_containers/banner";
import EndlessPossibilities from "./_containers/endlessPossibilities";
import BookGeneralAccessTicket from "./_containers/bookGeneralAccessTicket";
import FinestCuisine from "./_containers/finestCuisine";
import CurateExperience from "./_containers/curateExperience";
import FindPlace from "./_containers/findPlace";
import Footer from "./_containers/footer";
import "./globals.css";

export default function Home() {
  return (
    <React.Fragment>
      <Banner />
      <EndlessPossibilities />
      <BookGeneralAccessTicket />
      <FinestCuisine />
      <CurateExperience />
      <FindPlace />
      <Footer />
    </React.Fragment>
  );
}
