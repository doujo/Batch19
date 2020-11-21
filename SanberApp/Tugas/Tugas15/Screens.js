import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

// import { AuthContext } from "./context";
const Tabs = createBottomTabNavigator()
const SkillStack = createStackNavigator()
const ProjectStack = createStackNavigator()
const AddStack = createStackNavigator()

const Drawer = createDrawerNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const SignIn = ({ navigation }) => (
  <ScreenContainer>
		<Text>Login Screen</Text>
		<Button
		title="Menuju Skill Screen"
		onPress={() => navigation.push('TabScreen')} />
  </ScreenContainer>
);

const DrawerContainer = () => (
	<Drawer.Navigator>
		<Drawer.Screen name="Home" component={SkillScreen} />
		<Drawer.Screen name="About" component={AboutScreen} />
	</Drawer.Navigator>
)

export const TabScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
			<Tabs.Navigator>
				<Tabs.Screen name="Skill" component={DrawerContainer}/>
				<Tabs.Screen name="Project" component={ProjectScreen}/>
				<Tabs.Screen name="Add" component={AddScreen}/>
			</Tabs.Navigator>
    </ScreenContainer>
  );
};

const SkillStackScreen = () => (
	<SkillStack.Navigator>
		<SkillStack.Screen name="ProjectScreen" component={ProjectScreen}/>
		<SkillStack.Screen name="SkillScreen" component={SkillScreen}/>
	</SkillStack.Navigator>
)

const AddStackScreen = () => (
	<AddStack.Navigator>
		<AddStack.Screen name="SkillScreen" component={SkillScreen}/>
		<AddStack.Screen name="ProjectScreen" component={ProjectScreen}/>
	</AddStack.Navigator>
)

const ProjectStackScreen = () => {
	<ProjectStack.Navigator>
		<ProjectStack.Screen name="SkillScreen" component={SkillScreen}/>
		<ProjectStack.Screen name="AddScreen" component={AddScreen}/>
	</ProjectStack.Navigator>
}

export const SkillScreen = ({ navigation }) => (
	<ScreenContainer>
		<Text>Skill Screen</Text>
		<Button
			title="Open drawer"
			onPress={() => navigation.toggleDrawer()}
		/>
	</ScreenContainer>
)

export const ProjectScreen = ({ navigation }) => (
	<ScreenContainer>
		<Text>Project Screen</Text>
	</ScreenContainer>
)

export const AddScreen = ({ navigation }) => (
	<ScreenContainer>
		<Text>Add Screen</Text>
	</ScreenContainer>
)

export const AboutScreen = ({ navigation }) => (
	<ScreenContainer>
		<Text>About Screen</Text>
		<Button
			title="Open drawer"
			onPress={() => navigation.toggleDrawer()}
		/>
	</ScreenContainer>
)
