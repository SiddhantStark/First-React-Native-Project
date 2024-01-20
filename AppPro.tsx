import React from 'react'
import { View, Text } from 'react-native';
import { StyleSheet, useColorScheme } from 'react-native';
//React import is necessary

//JSX.element is a TypeScript feature which is used to check if we are returning JSX element or not
function AppPro () : JSX.Element {

    const isDarkMode = useColorScheme();

    return (
        //View is same as non scrolling <div> in Web dev
        //Text is same as <p> in web dev
    <View style={styles.container}>
        <Text>Hello World!!</Text>
    </View>
    
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppPro;