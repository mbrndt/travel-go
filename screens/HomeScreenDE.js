import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background2, Entdecke } from "../assets";
import * as Animatable from "react-native-animatable";

const HomeScreenDE = () => {
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
			<SafeAreaView className="flex-1">
				<View className="relative items-center top-5">
					<Animatable.Image
						animation="fadeInDown"
						easing="ease-in-out"
						duration={3000}
						source={Entdecke}
						className="h-3/4 w-full object-contain"
					/>

					<View className="px-6 bottom-20 -top-60">
						<Text className="text-gray-700 font-bold text-[28px]">
							entdecke deinen neuen lieblingsort{" "}
						</Text>

						<Text className="text-gray-600 top-5 text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
							nisl velit. Sed eu nisl velit. Sed eu nisl velit. Sed eu nisl
							velit.
						</Text>
					</View>
				</View>

				<View className="relative justify-center items-center bottom-20">
					{/* Go Button */}
					<View className="absolute w-3/4 h-24 pt-10 rounded-full items-center justify-center">
						<TouchableOpacity
							className="w-full"
							onPress={() => navigation.navigate("DiscoverDE")}
						>
							<Animatable.View
								animation={"pulse"}
								easing="ease-in-out"
								duration={3000}
								iterationCount="infinite"
								className="items-center h-full justify-center rounded-2xl opacity-50 bg-gray-50 bottom-10 "
							>
								<Text className="text-gray-900 text-2xl font-bold">start </Text>
							</Animatable.View>
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate("Language")}>
					<View className="flex-row px-8 top-5  rounded-2xl opacity-50 bg-gray-50">
						<Text>Sprachen</Text>
					</View>
				</TouchableOpacity>
			</SafeAreaView>
		</ImageBackground>
	);
};

export default HomeScreenDE;
