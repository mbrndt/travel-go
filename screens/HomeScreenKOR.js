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
import { Background2, EntdeckeKOR } from "../assets";
import * as Animatable from "react-native-animatable";

const HomeScreenKOR = () => {
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
						source={EntdeckeKOR}
						className="h-3/4 w-full object-contain"
					/>

					<View className="px-6 bottom-20 -top-60">
						<Text className="text-gray-700 font-bold text-[28px]">
							당신이 가장 좋아하는 새로운 장소를 발견하세요
						</Text>

						<Text className="text-gray-600 top-5 text-base">
							로렘 입섬 돌로르 사이트 메이트, 세드니즈 벨릿입니다.
							세드니슬리트입니다. 세드니가 헐뜯어요.
						</Text>
					</View>
				</View>

				{/* Third Section */}

				{/* <View className="w-[300px] h-[300px] bg-slate-400 rounded-full absolute bottom-10 -right-36"></View> */}
				{/* <View className="w-[300px] h-[300px] bg-amber-700 rounded-full absolute -bottom-28 -left-36"></View>   */}

				{/* Image Section */}

				<View className="relative justify-center items-center bottom-20">
					{/* Go Button */}
					<View className="absolute w-3/4 h-24 pt-10 rounded-full items-center justify-center">
						<TouchableOpacity
							className="w-full"
							onPress={() => navigation.navigate("DiscoverKOR")}
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
						<Text>언어</Text>
					</View>
				</TouchableOpacity>
			</SafeAreaView>
		</ImageBackground>
	);
};

export default HomeScreenKOR;
