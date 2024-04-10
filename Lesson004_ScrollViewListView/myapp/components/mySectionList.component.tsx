/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes *//* eslint-disable prettier/prettier */
import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";


const MySectionList: any = () => {
    return (
        <View>
            <SectionList
                sections={[
                    { title: "D", data: ["Devin", "Dan", "Dominic"] },
                    {
                        title: "J",
                        data: [
                            "Jackson",
                            "James",
                            "Jillian",
                            "Jimmy",
                            "Joel",
                            "John",
                            "Julie",
                        ],
                    },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => `basicListEntry-${item}`}
            />
        </View>
    );
};

export default MySectionList;

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: "rgba(247,247,247,1.0)",
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});