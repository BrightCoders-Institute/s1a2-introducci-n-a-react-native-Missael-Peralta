import { useNavigation } from '@react-navigation/native';
import React from 'react'; 
import { Text, TouchableOpacity, View } from 'react-native';



export const HolaMundoScreen = () => {
  const navigation =  useNavigation(); 

  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <Text style = {{
          fontSize: 45, 
          textAlign: 'center',
        }}>
          Hola mundo!
        </Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('Stack')}
        style={{
          backgroundColor: 'purple', 
          padding: 10, 
          marginTop: '20%', 
          width: '50%', 
          alignSelf: 'center', 
          borderRadius: 15, 
        }}
        >
          <Text
          style={{
            fontSize: 15, 
            textAlign: 'center', 
            color: 'white', 
          }}
          >
            Go to stack screen

          </Text>

        </TouchableOpacity>
      </View>
  )
}
