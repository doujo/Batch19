import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	Button,
	Text,
	TextInput,
	Image,
	TouchableOpacity
} from 'react-native'

export default class loginPage extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.bigTitle}>
					Tentang Saya
				</Text>
				<View style={styles.brandLogoContainer}>
					<Image
						source={require('../../images/brandLogo.png')}
						style={{width: 80, height: 80}}
					/>
				</View>
				<Text style={styles.title}>Login</Text>
				<View style={styles.inputGroup}>
					<Text style={styles.text, styles.inputLabel}>
						Email
					</Text>
					<TextInput
						style={styles.inputText}
						placeholder="contoh: info@evolio.com"
						placeholderStyle={styles.inputText, styles.inputPlaceholder}
					/>
				</View>
				<View style={styles.inputGroup}>
					<Text style={styles.text, styles.inputLabel}>
						Password
					</Text>
					<TextInput
						style={styles.inputText}
						placeholder="Password"
						placeholderStyle={styles.inputText, styles.inputPlaceholder}
						secureTextEntry={true}
					/>
				</View>
				<TouchableOpacity style={{marginTop: 24, marginBottom: 32}}>
					<Text
						style={styles.button, styles.btnPrimary}
					>
						Masuk
					</Text>
				</TouchableOpacity>
				<Text style={styles.textCenter}>
					Belum Punya Akun ?
				</Text>
				<TouchableOpacity style={{marginTop: 16}}>
					<Text
						style={styles.button, styles.btnOutlinePrimary}
					>
						Registrasi
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		alignContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingVertical: 58
	},
	brandLogoContainer: {
    alignItems: 'center',
		marginBottom: 33,
	},
	title: {
		//styleName: Title;
		fontFamily: 'Nunito',
		fontSize: 28,
		fontStyle: 'normal',
		fontWeight: "700",
		lineHeight: 36,
		textAlign: 'center',
		marginBottom: '16px'
	},
	text: {
		fontFamily: 'Open Sans',
		fontSize: 16,
		fontStyle: 'normal',
		fontWeight: "400",
		lineHeight: 26,
		textAlign: 'left',
	},
	textCenter: {
		textAlign: 'center'
	},
	inputGroup: {
		marginBottom: 16
	},
	inputLabel: {
		marginBottom: 4
	},
	inputText: {
		height: 48,
		borderColor: '#52575C',
		borderWidth: 1,
		borderRadius: 10,
		paddingVertical: 11,
		paddingHorizontal: 20
	},
	inputPlaceholder: {
		color: '#CACCCF'
	},
	btnPrimary: {
		height: '48px',
		width: '100%',
		color: '#fff',
		backgroundColor: '#005B89',
		textAlign: 'center',
		paddingVertical: 12,
		borderRadius: 10,
	},
	btnOutlinePrimary: {
		height: '48px',
		width: '100%',
		color: '#005B89',
		textAlign: 'center',
		paddingVertical: 12,
		borderColor: '#005B89',
		borderWidth: 1,
		borderRadius: 10,
	},
})
