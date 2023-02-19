import { View, Text, ImageBackground, Image } from "react-native";
import React, { useLayoutEffect } from "react";

import { Background4, ProfileIcon } from "../assets";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Discover = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	return (
		<ImageBackground
			source={Background4}
			className="flex-1 justify-center"
			resizeMode="stretch"
		>
			<SafeAreaView className="flex-1">
				<View className="flex-row items-center justify-between px-8 top-5">
					<View>
						<Text className="text-3xl text-gray-700 font-bold shadow-lg">
							Discover
						</Text>
						<Text className="font-bold">the beauty today</Text>
					</View>
					<View
						className="w-12 h-12 opacity-50 bg-gray-50 rounded-md items-center
                    justify-center shadow-lg"
					>
						<Image
							source={ProfileIcon}
							className="w-full h-full rounded-md object-cover "
						/>
					</View>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
};

export default Discover;
