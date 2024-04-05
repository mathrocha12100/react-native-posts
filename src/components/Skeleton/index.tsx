import { useEffect, useRef } from "react";
import { Animated } from "react-native";

type SkeletonProps = {
	width: number;
	height: number;
	radius: number;
	color: string;
};

function Skeleton({ height, radius, width, color }: SkeletonProps) {
	const fadeAnim = useRef(new Animated.Value(0.5)).current;

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(fadeAnim, {
					toValue: 1,
					duration: 1000,
					useNativeDriver: true,
				}),
				Animated.timing(fadeAnim, {
					toValue: 0.5,
					duration: 1000,
					useNativeDriver: true,
				}),
			]),
		).start();
	}, [fadeAnim]);

	return (
		<Animated.View
			style={{
				opacity: fadeAnim,
				width,
				height,
				borderRadius: radius,
				backgroundColor: color,
			}}
		/>
	);
}

export default Skeleton;
