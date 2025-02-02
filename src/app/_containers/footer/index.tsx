import React from "react";
import UnforgettableExp from "./helpers/UnforgettableExp";
import PageContainer from "@/app/utils/helpers/PageContainer";
import FindRest from "./helpers/FindRest";
import FollowLinks from "./helpers/FollowLinks";
import PolicyAndBanks from "./helpers/PolicyAndBanks";

const Footer = () => {
  return (
    <div className="border-t-2">
      <PageContainer>
        <div>
          <UnforgettableExp />
          <FindRest />
          <FollowLinks />
          <PolicyAndBanks />
        </div>
      </PageContainer>
    </div>
  );
};

export default Footer;
