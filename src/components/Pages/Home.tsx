import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from "../../types/navigation";

type Props = StackScreenProps<RootStackParamList, "Home">;

export default function Home({navigation}: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Oi tudo bom?</Text>
            <Button 
                onPress={() => navigation.navigate("Description")}
                title="Responder"
            />
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