import { FlatList } from "react-native";
import PostWrapper from "../PostWrapper";
import { useAtom } from "jotai";
import { splitedPosts } from "../../atoms";

type ListProps = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	flatListRef: React.RefObject<FlatList<any>>;
};

function List({ flatListRef }: ListProps) {
	const [todoAtoms, dispatch] = useAtom(splitedPosts);

	return (
		<FlatList
			data={todoAtoms}
			ref={flatListRef}
			renderItem={({ item }) => <PostWrapper atom={item} />}
		/>
	);
}

export default List;
