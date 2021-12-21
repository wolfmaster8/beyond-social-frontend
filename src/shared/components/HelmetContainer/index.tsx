import React from "react";
import { Helmet } from "react-helmet";
import { APP_TITLE_NAME } from "../../utils/consts";

type Props = {
  pageTitle: string;
};

function HelmetContainer({ pageTitle }: Props): JSX.Element {
  return (
    <Helmet>
      <title>
        {APP_TITLE_NAME} - {pageTitle}
      </title>
    </Helmet>
  );
}

export default HelmetContainer;
