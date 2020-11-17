import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import YoutubeUI from './Tugas/Tugas12/App'

export default function App() {
  return (
    <View style={styles.container}>
			<View style={styles.navBar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
	navBar: {
		height: 55,
		backgroundColor: 'white',
		elevation: 3
	}
});
