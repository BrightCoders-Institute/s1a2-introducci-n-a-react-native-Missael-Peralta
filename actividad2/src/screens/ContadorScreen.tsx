import React, { useState } from 'react';
import {Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface ContadorScreenProps {
    initialValue?: number;
  }
  
  export const ContadorScreen: React.FC<ContadorScreenProps> = ({ initialValue = 10 }) => {
    const [contador, setContador] = useState(initialValue);
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Contador: {contador}</Text>
  
        <TouchableOpacity
          style={styles.fabLocationBR}
          onPress={() => setContador(contador + 1)}
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>+1</Text>
          </View>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.fabLocationBL}
          onPress={() => setContador(contador - 1)}
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>-1</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  ContadorScreen.defaultProps = {
    initialValue: 10,
  };

ContadorScreen.defaultProps = {
    initialValue: 10,
  };
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center'
    },
    title:{
        fontSize: 40, 
        textAlign: 'center', 
        top:  -15, 
    }, 
    fabLocationBR:{
        position: 'absolute', 
        bottom: 25, 
        right: 25, 

    },

    fabLocationBL:{
        position: 'absolute', 
        bottom: 25, 
        left: 25, 

    },
    fab:{
        backgroundColor: '#5856D6', 
        justifyContent:"center",
        width: 60, 
        height: 60, 
        borderRadius: 100, 
    }, 
    fabText:{
        color: 'white', 
        fontSize: 25, 
        fontWeight: 'bold', 
        alignSelf:'center', 
    }
   
})
