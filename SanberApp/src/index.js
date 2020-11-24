import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends Component {
	state = {
		data: []
	};

	componenWillMount(){
		this.fetchData()
	};

	fetchData = async () => {
		const response = await fetch("https://randomuser.me/api?results=100");
		const json = await response.json();
		this.setState({ data: json.results });
	};

	render(){
		console.log(this.state.data)
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.data}
					keyExtractor={(x, i) => i}
					renderItem={({item, index}) =>
						<Text>
							{`${item.name.first} ${item.name.last}`}
						</Text> }
					/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroudColor: '#F5FCFF',
		marginTop: 15
	}
})
