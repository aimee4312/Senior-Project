import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import { StyleSheet, Button, View, SafeAreaView, Alert , TouchableOpacity, Text} from 'react-native';
import Bar from './components/NavigationBar';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
    <View>
      <Button
        title="Sign up"
        onPress={() => {
          console.log('Button pressed');
          Alert.alert('Simple Button pressed');
        }}
      />
    </View>
    <View>
      <Bar navigation={navigation}/>
    </View>
  </SafeAreaView>
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  bottomBar: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
  }
});

export default App;