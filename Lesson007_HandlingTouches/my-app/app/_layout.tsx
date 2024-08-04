import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Alert, Button, SafeAreaView, SafeAreaViewBase, SafeAreaViewComponent, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const myOnPress = (e) => {
    Alert.alert("Merhaba");
  }

  return (
    <View style={styles.content}>
      <View style={styles.panel1}>
        <Button title='Pres Me' onPress={myOnPress} ></Button>
      </View>
      <View style={styles.panel2}>
        <TouchableHighlight onPress={myOnPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={myOnPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback onPress={myOnPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={myOnPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight
          onPress={myOnPress}
          onLongPress={myOnPress}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}


const styles = StyleSheet.create(
  {
    content: {
      flex: 1,
      backgroundColor: "gray",
      justifyContent: "center",
      alignContent: "center",
      paddingLeft: 20,
      paddingRight: 20,
      rowGap: 29
    },
    panel1: {
      backgroundColor: "red",
      flex: 1,
      justifyContent: "center"
    },
    panel2: {
      flex: 4,
      flexDirection: "column",
      width: "100%",
      backgroundColor: "yellow",
      justifyContent: "center"
    },
    button: {
      marginBottom: 30,
      alignItems: 'center',
      backgroundColor: '#2196F3',

    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white',
    },
  }
);