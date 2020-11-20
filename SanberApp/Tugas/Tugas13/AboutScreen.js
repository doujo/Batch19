import React, { Component } from 'react'
import {
	View,
	Image,
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native'

export default class AboutScreen extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Text style={[styles.bigTitle, styles.textCenter]}>
					Tentang Saya
				</Text>
				<View style={styles.photoContainer}>
					<Image
						source={require('../../images/userPhoto.png')}
						style={{width: 150, height: 150}}
					/>
				</View>
				<Text style={[styles.title, styles.textCenter]}>
					Maulana Haikal
				</Text>
				<Text style={[styles.subTitle, styles.textCenter]}>
				  Software Engineer
				</Text>

				<View style={[styles.flexRowContainer, {marginTop: 16}]}>
					<TouchableOpacity
						style={[
							styles.card,
							styles.shadowNormal,
							{
								backgroundColor: '#fff',
								height: 100,
								width: '50%',
								margin: 5,
								alignItems: 'center'
							}
						]}>
						<Image
							source={require('../../images/iconGitlab.svg')}
							style={{width: 48, height: 48}}
						/>
						<Text style={styles.text}>Gitlab</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.card,
							styles.shadowNormal,
							{
								backgroundColor: '#fff',
								height: 100,
								width: '50%',
								margin: 5,
								alignItems: 'center'
							}
						]}>
						<Image
							source={require('../../images/iconGithub.svg')}
							style={{width: 48, height: 48}}
						/>
						<Text style={styles.tex}>Github</Text>
					</TouchableOpacity>
				</View>

				<View style={[styles.card, styles.shadowNormal, {marginTop: 32}]}>
					<Text style={[
						styles.subTitle,
						styles.borderBottom
						]}>
						Kontak
					</Text>
					<View style={[styles.flexColumContainer, {paddingVertical: 16}]}>
						<TouchableOpacity
							style={[
								styles.card,
								{
									backgroundColor: '#fff',
									height: 50,
									width: '100%',
									marginVertical: 5
								}
							]}>
							<View style={{
								flex: 1,
								paddingHorizontal: 10,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'flex-start',

							}}>
								<Image
									source={require('../../images/iconFacebook.svg')}
									style={{width: 16, height: 16, marginRight: 8}}
								/>
								<Text style={styles.text}>Evolio</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								styles.card,
								{
									backgroundColor: '#fff',
									height: 50,
									width: '100%',
									marginVertical: 5
								}
							]}>
							<View style={{
								flex: 1,
								paddingHorizontal: 10,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'flex-start',

							}}>
								<Image
									source={require('../../images/iconInstagram.svg')}
									style={{width: 16, height: 16, marginRight: 8}}
								/>
								<Text style={styles.text}>@evolio.official</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								styles.card,
								{
									backgroundColor: '#fff',
									height: 50,
									width: '100%',
									marginVertical: 5
								}
							]}>
							<View style={{
								flex: 1,
								paddingHorizontal: 10,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'flex-start',

							}}>
								<Image
									source={require('../../images/iconTwitter.svg')}
									style={{width: 16, height: 16, marginRight: 8}}
								/>
								<Text style={styles.text}>@evolio</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		paddingVertical: 48,
		paddingHorizontal: 20
	},
	photoContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	bigTitle: {
		/* Registrasi */
		width: '100%',
		height: 47,
		/* Big Title */
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: 28,
		lineHeight: 47,
		/* identical to box height, or 130% */
		color: '#333538',
		marginBottom: 16
	},
	title: {
		//styleName: Title;
		fontFamily: 'Inter',
		fontSize: 24,
		fontStyle: 'normal',
		fontWeight: "700",
		lineHeight: 36,
		color: '#005B89'
	},
	subTitle: {
		/* Body */
		fontFamily: 'Open Sans',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 16,
		lineHeight: 26,
		/* identical to box height, or 160% */
		color: '#333538',
	},
	textCenter: {
		textAlign: 'center'
	},
	flexRowContainer: {
		flex: 1,
		elevation: 3,
		paddingHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	flexColumnContainer: {
		flex: 1,
		elevation: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	card: {
		backgroundColor: '#f9f9f9',
		borderRadius: 10,
		padding: 20,
	},
	borderBottom: {
		borderBottomColor: '#CACCCF',
		borderBottomWidth: 1,
	},
	shadowNormal: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.1,
		shadowRadius: 12,
	},
})
