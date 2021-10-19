import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultList = ({ title, result }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultList;
