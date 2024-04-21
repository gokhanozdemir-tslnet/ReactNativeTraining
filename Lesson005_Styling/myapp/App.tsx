/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme,

} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import FlexboxRowLayout from './component/flexboxRowLayout.component';
import FlexboxColumnLayout from './component/flexboxColumnLayout.component';
import JustifyContent from './component/justifyContent.component';



function App(): React.JSX.Element {
  return (

    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View><Text>flexbox: sırasıyla row ve column</Text></View>
      <FlexboxRowLayout />
      <FlexboxColumnLayout />
      <View><Text>justifycontent: </Text></View>
      <JustifyContent direction="center" color="blue" height={120} />
      <JustifyContent direction="flex-start" color="green" height={120} />
      <JustifyContent direction="flex-end" color="gray" height={120} />
      <JustifyContent direction="space-between" color="lime" height={120} />
      <JustifyContent direction="space-evenly" color="black" height={120} />
      <JustifyContent direction="space-around" color="blue" height={120} />
    </ScrollView>

  );
}


export default App;
