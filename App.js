import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";

import HomeScreenENG from "./screens/HomeScreenENG";
import HomeScreenKOR from "./screens/HomeScreenKOR";
import HomeScreenDE from "./screens/HomeScreenDE";

import Language from "./screens/Language";

import DiscoverENG from "./screens/DiscoverENG";
import DiscoverKOR from "./screens/DiscoverKOR";
import DiscoverDE from "./screens/DiscoverDE";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<TailwindProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="HomeENG" component={HomeScreenENG} />
					<Stack.Screen name="HomeKOR" component={HomeScreenKOR} />
					<Stack.Screen name="HomeDE" component={HomeScreenDE} />
					<Stack.Screen name="DiscoverENG" component={DiscoverENG} />
					<Stack.Screen name="DiscoverKOR" component={DiscoverKOR} />
					<Stack.Screen name="DiscoverDE" component={DiscoverDE} />
					<Stack.Screen name="Language" component={Language} />
				</Stack.Navigator>
			</NavigationContainer>
		</TailwindProvider>
	);
}
