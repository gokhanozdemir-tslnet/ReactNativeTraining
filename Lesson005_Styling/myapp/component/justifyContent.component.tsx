/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = {
    direction: string,
    color: string,
    height: number
}

const JustifyContent = (props: Props) => {
    const { direction ,color ,height } = props;

    console.log(direction);
    return (
        <View style={{justifyContent:direction,height:height, backgroundColor:color}}>
            <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
            <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
            <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
    },
    box: {
        width: 30,
        height: 30,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '48%',
        textAlign: 'center',
    },
    selected: {
        backgroundColor: 'coral',
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: 'coral',
    },
    selectedLabel: {
        color: 'white',
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
    },
});


export default JustifyContent;