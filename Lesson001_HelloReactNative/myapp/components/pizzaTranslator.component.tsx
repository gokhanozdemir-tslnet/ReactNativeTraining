/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { useState } from "react";
import { Text, TextInput, View } from "react-native";


// tslint:disable-next-line:typedef
const PizzaTranslator = () => {

    const [text, setText] = useState("");

    return (
        <View style={{padding: 10}}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Type here to translate!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
                {text.split(" ").map(word => word && "🍕").join(" ")}
            </Text>
        </View>
    );
};


export default PizzaTranslator;