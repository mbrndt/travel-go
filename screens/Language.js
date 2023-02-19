import {
	View,
	Text,
	ImageBackground,
	Touchable,
	TouchableOpacity,
} from "react-native";
import { Background } from "../assets";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Language = () => {
	const navigation = useNavigation();

	return (
		<ImageBackground
			source={Background}
			className="flex-1 justify-center"
			resizeMode="stretch"
		>
			<SafeAreaView className="flex-1">
				<View className="flex-row items-center justify-between px-8 top-5">
					<View>
						<Text className="text-3xl text-gray-700 font-bold shadow-lg">
							Choose your language
						</Text>
					</View>
				</View>
				<View className="flex-column items-center justify-between px-8 flex-1 py-40">
					<TouchableOpacity onPress={() => navigation.navigate("Home")}>
						<Text className="text-3xl text-gray-700 font-bold shadow-lg">
							English
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate("HomeDE")}>
						<Text className="text-3xl text-gray-700 font-bold shadow-lg">
							Deutsch
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate("HomeKOR")}>
						<Text className="text-3xl text-gray-700 font-bold shadow-lg">
							한국어
						</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
			<Text className="text text-gray-700 font-bold shadow-lg px-4 py-4">
				ästrid. Discovery
			</Text>
		</ImageBackground>
	);
};

export default Language;
