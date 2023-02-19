import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import Discover from "./screens/Discover";
import Language from "./screens/Language";
import HomeScreenDE from "./screens/HomeScreenDE";
import HomeScreenKOR from "./screens/HomeScreenKOR";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<TailwindProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="HomeDE" component={HomeScreenDE} />
					<Stack.Screen name="HomeKOR" component={HomeScreenKOR} />
					<Stack.Screen name="Discover" component={Discover} />
					<Stack.Screen name="Language" component={Language} />
				</Stack.Navigator>
			</NavigationContainer>
		</TailwindProvider>
	);
}
