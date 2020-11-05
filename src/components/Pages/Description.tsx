import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Description(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tudo bom, tô joia!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
});