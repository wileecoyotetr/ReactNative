import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return <View>
    <Text style={styles.text}>Hi there! Hello World</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go To Components Demo"
    ></Button>
    <Button
      title="Go to List"
      onPress={() => navigation.navigate('List')}>
    </Button>
    <Button
      title="Go to Image"
      onPress={() => navigation.navigate('Image')}>
    </Button>
    <Button
      title="Go to Counter"
      onPress={() => navigation.navigate('Counter')}>
    </Button>
    <Button
      title="Go to Color"
      onPress={() => navigation.navigate('Color')}>
    </Button>
    <Button
      title="Go to Square"
      onPress={() => navigation.navigate('Square')}>
    </Button>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
