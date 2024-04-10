/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";





function App(): React.JSX.Element {
  const isDarkMode: boolean = useColorScheme() === "dark";

  const backgroundStyle: any = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const platform: string = Platform.OS;
  const version: string|number = Platform.Version;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <Text style={styles.container}>Merhaba</Text>
          <Text>{platform}</Text>
          <Text>{version}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "red",
      },
      android: {
        backgroundColor: "blue",
        color:"white",
        height:100
      },
    }),
  },
});

export default App;
