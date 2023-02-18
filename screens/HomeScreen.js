import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	SafeAreaView,
	SafeAreaProvider,
	SafeAreaInsetsContext,
	useSafeAreaInsets,
	initialWindowMetrics,
} from "react-native-safe-area-context";
import { HeroImage, Sparkle, Background, Background2 } from "../assets";

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<ImageBackground
			source={Background2}
			className="flex-1 justify-center"
			resizeMode="cover"
		>
			<SafeAreaView className="flex-1 ">
				{/* First Section */}

				<View className="flex-row px-6 mt-8 items-center space-x-2">
					<View>
						<Text className="text-gray-700 text-2xl font-semibold ">
							astrid. go
						</Text>
					</View>
				</View>

				{/* Second Section */}

				<View className="relative top-10 items-center">
					<Image
						source={HeroImage}
						className="w-3/4 h-2/3 object-cover rounded-2xl"
					/>
				</View>

				<View className="px-6 bottom-20">
					<Text className="text-gray-700 font-bold text-[28px]">
						discover your new favourite places{" "}
					</Text>

					<Text className="text-gray-600 top-5 text-base">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisl
						velit. Sed eu nisl velit. Sed eu nisl velit. Sed eu nisl velit.
					</Text>
				</View>

				{/* Third Section */}

				{/* <View className="w-[300px] h-[300px] bg-slate-400 rounded-full absolute bottom-10 -right-36"></View> */}
				{/* <View className="w-[300px] h-[300px] bg-amber-700 rounded-full absolute -bottom-28 -left-36"></View>   */}

				{/* Image Section */}

				<View className="relative justify-center items-center">
					{/* Go Button */}
					<View className="absolute w-3/4 h-24 pt-10 border-yellow-500 rounded-full items-center justify-center">
						<TouchableOpacity className="w-full">
							<View className="items-center h-full justify-center rounded-2xl bg-yellow-500">
								<Text className="text-gray-700 text-3xl font-semibold opacity-2">
									start{" "}
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
};

export default HomeScreen;
