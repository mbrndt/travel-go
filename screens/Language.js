import {
	View,
	Text,
	ImageBackground,
	Touchable,
	TouchableOpacity,
	Image,
} from "react-native";
import { Background, astridDiscovery } from "../assets";
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
				<Image
					source={astridDiscovery}
					className="w-full h-full absolute z-2"
				/>
				<View className="flex-row items-center justify-between px-8 top-5">
					<View>
						<Text className="text-3xl text-gray-700 font-bold shadow-lg">
							Choose your language
						</Text>
					</View>
				</View>
				<View className="flex-column items-center justify-between px-8 flex-1 py-40 bottom-10 ">
					<TouchableOpacity onPress={() => navigation.navigate("HomeENG")}>
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
		</ImageBackground>
	);
};

export default Language;
