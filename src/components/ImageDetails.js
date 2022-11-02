import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
    console.log(props);
    return <View>
        <Image source={props.imageSource}></Image>
        <Text>{props.title}</Text>
        <Text>Image score : {props.rank}</Text>
    </View>
};

const style = StyleSheet.create({});

export default ImageDetail;