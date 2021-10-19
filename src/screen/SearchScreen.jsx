import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResult();

  const filterResultByPrice = (price) => {
    //price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price == price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
      <ResultList title="Cost Effective" result={filterResultByPrice("$")} />
      <ResultList title="Bit Pricier" result={filterResultByPrice("$$")} />
      <ResultList title="Big Spender" result={filterResultByPrice("$$$")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
