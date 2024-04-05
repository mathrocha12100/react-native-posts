import { type FlatList, Text, View } from "react-native";
import Dialog, { type UseModalHookProps } from "../../../../components/Dialog";
import { Newspaper } from "lucide-react-native";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { useState } from "react";
import { useAtom, useSetAtom } from "jotai";
import { splitedPosts } from "../../atoms";
import { faker } from "@faker-js/faker";
import type { PostProps } from "../../../../components/Post";

type CreatePostProps = {
	modalRef: React.MutableRefObject<UseModalHookProps>;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	flatListRef: React.RefObject<FlatList<any>>;
};

const myName = faker.person.firstName();
const myAvatar = faker.image.avatar();

const createPostData = (description: string) =>
	({
		id: faker.string.uuid(),
		liked: false,
		avatar: myAvatar,
		description: description,
		name: myName,
	}) as PostProps;

function CreatePost({ modalRef, flatListRef }: CreatePostProps) {
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);

	const [posts, dispatch] = useAtom(splitedPosts);

	const handleAdd = () => {
		if (loading || !input.length) return;

		setLoading(true);

		setTimeout(() => {
			dispatch({
				type: "insert",
				value: createPostData(input),
				before: posts.at(0),
			});

			setInput("");
			setLoading(false);
			modalRef.current.handleModal(false);

			flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
		}, 500);
	};

	return (
		<Dialog ref={modalRef}>
			<View className="px-4">
				<View className="flex-row items-center mb-4">
					<Newspaper size={26} className="text-white mr-2" />
					<Text className="text-white text-2xl font-bold">Criar post</Text>
				</View>
				<Input
					value={input}
					multiline
					placeholder="A nova receita de bolo que aprendi!"
					className="h-52 mb-4"
					onChangeText={setInput}
				/>
				<Button
					disabled={!input.length}
					isLoading={loading}
					content="Postar"
					onPress={handleAdd}
				/>
			</View>
		</Dialog>
	);
}

export default CreatePost;
