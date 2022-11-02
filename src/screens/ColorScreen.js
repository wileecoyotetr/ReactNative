import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorScreen = () => {


    return (
        < View >
            <Button title="Add a Color"
                onPress={() => {
                    setCounter(counter + 1)
                    console.log("counter:" + counter)
                }}></Button>
            <View
            //'rgb(0,250,0)' 
                style={{ height: 100, width: 100, backgroundColor: randomRgb() }}>

            </View>
        </View >
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() *256);
    const green = Math.floor(Math.random() *256);
    const blue = Math.floor(Math.random() *256);

    return `rgb (${red},${green},${blue})`
}

const style = StyleSheet.create({});

export default ColorScreen;