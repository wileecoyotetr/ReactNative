import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {

    const friends = [
        { name: 'Friend #1', age: '29' },
        { name: 'Friend #2', age: '35' },
        { name: 'Friend #3', age: '30' },
        { name: 'Friend #4', age: '30' },
        { name: 'Friend #5', age: '31' },
        { name: 'Friend #6', age: '30' },
        { name: 'Friend #7', age: '36' },
        { name: 'Friend #8', age: '30' },
        { name: 'Friend #9', age: '30' },
        { name: 'Friend #10', age: '40' },
        { name: 'Friend #11', age: '25' },
        { name: 'Friend #12', age: '30' },
        { name: 'Friend #13', age: '27' },
    ];
    return (<FlatList

        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
            return <Text style={style.textStyle}>
                {item.name} - Age {item.age}
            </Text>
        }}
    />
    );
};

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
