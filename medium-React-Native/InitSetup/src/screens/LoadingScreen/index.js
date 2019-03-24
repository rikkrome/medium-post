import React, { Component } from "react";
import { View, Text } from "react-native";
import { fonts, colors, width } from "../../components/styles";
import ProgressBar from "../../components/progressBar";
export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true
    };
  }

  render() {
    const { container, backgroundColor } = styles;
    return (
      <View style={[container, backgroundColor]}>
        <View style={{ padding: 10 }}>
          <Text style={{ ...fonts.Heading.h1, color: colors.mainColors.white }}>
            Loading...
          </Text>
        </View>
        <ProgressBar
          indeterminate={true}
          indeterminateAnimationDuration={3000}
          useNativeDriver={true}
          width={width / 1.5}
          color={colors.mainColors.midBlue}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundColor: {
    backgroundColor: colors.mainColors.darkBlue
  }
};
