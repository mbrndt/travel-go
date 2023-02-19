import { View, Text, ImageBackground } from "react-native";
import { Background } from "../assets";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Language = () => {
	let [fontsLoaded] = useFonts({
		"Corben-Bold": require("../assets/fonts/Corben-Bold.ttf"),
		"Corben-Regular": require("../assets/fonts/Corben-Regular.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
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
					<View>
						<Text className="text-3xl text-gray-700 font-bold shadow-lg">
							English
						</Text>
					</View>
					<View>
						<Text className="text-3xl text-gray-700 font-bold shadow-lg">
							Deutsch
						</Text>
					</View>
					<View>
						<Text className="text-3xl text-gray-700 font-bold shadow-lg">
							한국어
						</Text>
					</View>
				</View>
			</SafeAreaView>
			<Text
				className="text text-gray-700 font-bold shadow-lg px-4 py-4"
				style={{ fontFamily: "Corben-Bold" }}
			>
				ästrid. Discovery
			</Text>
		</ImageBackground>
	);
};

export default Language;
