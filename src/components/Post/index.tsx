import { Text, TouchableHighlight, View } from "react-native";
import { Heart, HeartHandshake, MessageSquare } from "lucide-react-native";
import Avatar from "./Avatar";

export type PostProps = {
	id: number | string;
	name: string;
	avatar: string;
	description: string;
	liked: boolean;
	handleToggleLike?: (uuid: string) => void;
};

function Post({
	name,
	avatar,
	description,
	id,
	liked,
	handleToggleLike,
}: PostProps) {
	return (
		<View className="flex-row m-4 ">
			<Avatar uri={avatar} />

			<View className="shrink">
				<Text className="text-white font-bold text-xl">{name}</Text>
				<Text className="text-white">{description}</Text>
				<View className="flex-row gap-x-2 mt-3">
					<TouchableHighlight
						className="p-1"
						onPress={() => handleToggleLike?.(id as string)}
					>
						{liked ? (
							<HeartHandshake className="text-rose-500" />
						) : (
							<Heart className="text-white" />
						)}
					</TouchableHighlight>

					<View className="p-1">
						<MessageSquare size={24} className="text-white" />
					</View>
				</View>
			</View>
		</View>
	);
}

export default Post;
