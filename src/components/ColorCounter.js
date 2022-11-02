import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const ColorCounter = ({color}) => {
    return <View>
        <Text>{color}</Text>
        <Button title={`Increase ${color}`}/>
        <Button title={`Decrease  ${color}`}/>
    </View>
};

const style = StyleSheet.create({});

export default ColorCounter;