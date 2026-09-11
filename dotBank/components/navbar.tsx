/** @format */

import {
    createNativeBottomTabNavigator,
    createNativeBottomTabScreen,
} from "@react-navigation/bottom-tabs/unstable";
import HomeScreen from "../src/app/screens/homescreen";

const MyTabs = createNativeBottomTabNavigator({
	screens: {
		Home: createNativeBottomTabScreen({
			screen: HomeScreen,
		}),
	},
});

{
	/*
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../src/app/screens/homescreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
			/>
			 <Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
}*/
}
