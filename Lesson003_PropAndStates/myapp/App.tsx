/* eslint-disable prettier/prettier */
import React from "react";

import {SafeAreaView, Text, View} from "react-native";
import CatProps from "./components/catprops.component";
import CatState from "./components/catstate.component";

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>Props and State</Text>
      </View>
      <CatProps name="test name"/>
      <CatState />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     alignContent: "center",
//   }
// });

export default App;
