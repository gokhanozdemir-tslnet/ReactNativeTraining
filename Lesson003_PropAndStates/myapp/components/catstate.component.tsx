/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { Text, TextInput, View } from "react-native";



const CatState: any = () => {
    const [myName,setMyName] = useState("");
    return (<View>
        <Text>Merhaba {myName}</Text>
        <TextInput style={{ height: 40 }}
            placeholder="Type here to translate!"
            onChangeText={(newText)=>setMyName(newText)}
            />
    </View>);

};

export default CatState;