/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import Cat from "./components/cat.component";
import PizzaTranslator from "./components/pizzaTranslator.component";


function App(): React.JSX.Element {
  return (
    <ScrollView>
      <Text>Some Text</Text>
      <View>
        <Text>Some More Text</Text>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
          style={{ width: 200, height: 200 }} />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          defaultValue="You can type here"
        />
        <Cat name="sdfsdfsdfs" />
        <Cat name="myname" />
        <PizzaTranslator />
      </View>
    </ScrollView>
  );
}
export default App;
