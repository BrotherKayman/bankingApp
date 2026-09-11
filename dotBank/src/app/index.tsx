/** @format */

import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to dotBank</Text>
			<Text style={styles.subtitle}>Expo Router is active for SDK 57.</Text>
			<Link
				href='/'
				style={styles.link}
			>
				Home
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 24,
		gap: 12,
	},
	title: {
		fontSize: 28,
		fontWeight: "700",
	},
	subtitle: {
		fontSize: 16,
		color: "#4b5563",
	},
	link: {
		color: "#2563eb",
		fontSize: 16,
		fontWeight: "600",
	},
});
