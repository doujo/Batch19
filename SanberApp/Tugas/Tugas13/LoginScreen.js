import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity
} from 'react-native'

export default class loginPage extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Image
					source={require('../../images/logo-brand.png')}
					style={{width: 123, height: 48}}
				/>
			tes
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		alignContent: 'center'
	}
})
