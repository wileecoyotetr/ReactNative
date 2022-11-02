import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetails";

const ImageScreen = () => {
    return <View>
        <ImageDetail
            title="Forest"
            rank="4"
            imageSource={require('../../assets/forest.jpg')} ></ImageDetail>
        <ImageDetail
            title="Beach"
            rank="5"
            imageSource={require('../../assets/beach.jpg')} ></ImageDetail>
        <ImageDetail
            title="Mountain"
            rank="3"
            imageSource={require('../../assets/mountain.jpg')}  ></ImageDetail>
    </View>
};

const style = StyleSheet.create({});

export default ImageScreen;