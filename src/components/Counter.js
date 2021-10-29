import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Button } from 'react-native'

const Counter = () => {

  const [state, setState] = useState({
    count: 0
  })

  const add = () => {
    setState({
      count: state.count + 1
    })
  }

  const remove = () => {
    setState({
      count: state.count - 1
    })
  }

  return (
    <View style={{
      height: Dimensions.get('window').height,
      flex: 1,
      backgroundColor: '#FF5733',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
  }}>

      <Button title={'remove'} onPress={remove} />

      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          {state.count}
      </Text>
      <Button title={'add'} onPress={add} />
  </View>
  )

}

export default Counter