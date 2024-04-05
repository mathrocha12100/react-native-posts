import { useState } from "react";
import { Image, View } from "react-native";
import Skeleton from "../Skeleton";

type AvatarProps = {
	uri: string;
};

function Avatar({ uri }: AvatarProps) {
	const [loaded, setLoaded] = useState(false);

	return (
		<View className="relative min-w-[64px] min-h-[64px] mt-1 mr-2">
			<View className="absolute z-10">
				{!loaded && (
					<Skeleton height={64} width={64} radius={32} color="#cccccc" />
				)}
			</View>

			<Image
				className="z-0 w-16 h-16 rounded-full absolute"
				source={{
					uri,
				}}
				onLoad={() => setLoaded(true)}
			/>
		</View>
	);
}

export default Avatar;
