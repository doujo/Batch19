import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {SignIn, TabScreen} from './Screens'

const Stack = createStackNavigator()

const Index = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="SignIn" component={SignIn}/>
			<Stack.Screen name="TabScreen" component={TabScreen}/>
		</Stack.Navigator>
	</NavigationContainer>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Index
