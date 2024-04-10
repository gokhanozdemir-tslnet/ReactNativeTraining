/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes *//* eslint-disable prettier/prettier */
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";


const MyFlatList:any = ()=> {
    return (
        <View style={styles.container}>
              <FlatList
        data={[
          {key: "Devin"},
          {key: "Dan"},
          {key: "Dominic"},
          {key: "Jackson"},
          {key: "James"},
          {key: "Joel"},
          {key: "John"},
          {key: "Jillian"},
          {key: "Jimmy"},
          {key: "Julie"},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
        </View>
    );
};

export default MyFlatList;

const styles : any = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });