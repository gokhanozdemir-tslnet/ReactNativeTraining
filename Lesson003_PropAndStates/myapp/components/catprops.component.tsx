/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { Text,  View } from "react-native";

const CatProps: any = ({ name }: { name: string }) => {
    return (
        <View>
            <Text>Merhaba xx {name}</Text>
        </View>
    );

};

export default CatProps;