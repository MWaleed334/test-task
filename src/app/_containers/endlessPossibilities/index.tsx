import React from "react";
import PageContainer from "@/app/utils/helpers/PageContainer";
import HeadingParagraph from "@/app/_components/heading&Paragraph/heading&Paragraph";
import VideoPlayBanner from "./helpers/VideoPlayBanner";
import GetYourGeneralAccesTicket from "./helpers/GetYourGeneralAccesTicket";
import { tree } from "next/dist/build/templates/app-page";

const EndlessPossibilities = () => {
  return (
    <PageContainer>
      <div className="lg:mr-20 lg:ml-20 mr-2 ml-2">
        <HeadingParagraph
          heading={"Mall Of: Endless Possibilities"}
          paragraph={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          className="text-center mb-8 "
        />
        <VideoPlayBanner />
        <GetYourGeneralAccesTicket />
      </div>
    </PageContainer>
  );
};

export default EndlessPossibilities;
