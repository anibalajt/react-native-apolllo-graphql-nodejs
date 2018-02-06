import React from "react";
import { graphql, compose } from "react-apollo";
import getPlaceHolder from "../utils/placeHolder";

const Sample = ({ placeHolder, loading }) => {
  if (loading) {
    return <div> loading... </div>;
  }

  return (
    <div>
      <div>
        <span >{placeHolder.email}</span>
      </div>
      <div>
        <span >{placeHolder.password}</span>
      </div>
      <div>
        <span >
          {placeHolder.rpassword}
        </span>
      </div>
    </div>
  );
};

export default graphql(getPlaceHolder, {
  props: ({ data: { placeHolder, loading } }) => ({
    placeHolder,
    loading
  })
})(Sample);
