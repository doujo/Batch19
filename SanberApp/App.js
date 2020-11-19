import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	FlatList
} from 'react-native';

import LoginScreen from './Tugas/Tugas13/LoginScreen'
import RegisterScreen from './Tugas/Tugas13/RegisterScreen'
import AboutScreen from './Tugas/Tugas13/AboutScreen'

export default function App() {
  return (
		<>
			<AboutScreen />
		</>
  );
}
