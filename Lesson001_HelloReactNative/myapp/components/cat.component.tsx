/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Button, Text, View} from "react-native";
import {useState} from "react";

type CatProps = {
  name: string;
};

// tslint:disable-next-line:typedef
const Cat = (props: CatProps) => {
  const [name2, setName2] = useState("name2");
  
  return (
    <View>
      <Text>Hello , am your cat: {name2}</Text>
      <Button title="Change my name" onPress={() => setName2(props.name)} />
    </View>
  );
};

export default Cat;
