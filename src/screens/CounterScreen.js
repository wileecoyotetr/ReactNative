import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    return (
        < View >
            <Button title="Increase"
                onPress={() => {
                    //counter++;
                    setCounter(counter + 1)
                    console.log("counter:" + counter)
                }}></Button>
            <Button title="Decrease"
                onPress={() => {
                    // counter--
                    setCounter(counter - 1)
                    console.log("counter:" + counter)
                }}></Button>
            <Text>Current Count: {counter}</Text>
        </View >
    );
};

const style = StyleSheet.create({});

export default CounterScreen;