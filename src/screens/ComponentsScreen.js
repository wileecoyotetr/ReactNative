import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {

    const greeting =  <Text style={style.textStyle10}>HELLLLLOOOOO</Text>;

    return <View>
        <Text style={style.textStyle}>This is the components screen</Text>
        <Text>Hi there</Text>
       {greeting}
    </View>;
};

const style = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    textStyle5: {
        fontSize: 5
    },
    textStyle10: {
        fontSize: 10
    }
});

export default ComponentsScreen;