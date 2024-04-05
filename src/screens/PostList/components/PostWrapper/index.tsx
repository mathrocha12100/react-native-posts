import { View } from "react-native";
import Post, { type PostProps } from "../../../../components/Post";
import { Fragment } from "react";
import { useAtom, type PrimitiveAtom } from "jotai";

type PostWrapperProps = {
	atom: PrimitiveAtom<PostProps>;
};

function PostWrapper({ atom }: PostWrapperProps) {
	const [post, setPost] = useAtom(atom);

	return (
		<Fragment>
			<Post
				{...post}
				handleToggleLike={() =>
					setPost((state) => ({ ...state, liked: !state.liked }))
				}
			/>
			<View className="h-0.5 bg-dark w-full" />
		</Fragment>
	);
}

export default PostWrapper;
