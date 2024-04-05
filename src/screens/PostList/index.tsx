import { Text, TouchableHighlight, View, type FlatList } from "react-native";

import { ScrollText, CirclePlus } from "lucide-react-native";
import { useModal } from "../../components/Dialog";
import CreatePost from "./components/CreatePost";
import List from "./components/List";
import { useRef } from "react";
import { Provider } from "jotai";

function PostList() {
	const modalRef = useModal();
	const flatListRef = useRef<FlatList>(null);

	return (
		<Provider>
			<View className="px-4 py-2 flex-row items-center justify-between">
				<View className="flex-row items-center">
					<ScrollText size={26} className="text-white mr-2" />
					<Text className="text-slate-50 text-2xl font-bold">Feed</Text>
				</View>

				<TouchableHighlight
					className="justify-end items-end w-8"
					onPress={() => modalRef.current.handleModal(true)}
				>
					<CirclePlus size={26} className="text-white" />
				</TouchableHighlight>
			</View>
			<List flatListRef={flatListRef} />

			<CreatePost flatListRef={flatListRef} modalRef={modalRef} />
		</Provider>
	);
}

export default PostList;
