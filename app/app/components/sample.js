import React from "react";
import {
  TextInput,
  Text,
  TouchableHighlight,
  View,
  Dimensions
} from "react-native";
import { graphql, compose } from "react-apollo";
import getPlaceHolder from "../utils/placeHolder";

import { contentInput, input, btn, textBtn } from "../utils/style";

const Sample = ({ placeHolder, loading }) => {
  if (loading) {
    return <div> loading... </div>;
  }

  return (
    <View>
      <View style={contentInput}>
        <Text style={[textBtn, { color: "#000" }]}>{placeHolder.email}</Text>
      </View>
      <View style={[contentInput]}>
        <Text style={[textBtn, { color: "#000" }]}>{placeHolder.password}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={[textBtn, { color: "#000" }]}>
          {placeHolder.rpassword}
        </Text>
      </View>
    </View>
  );
};

export default graphql(getPlaceHolder, {
  props: ({ data: { placeHolder, loading } }) => ({
    placeHolder,
    loading
  })
})(Sample);
