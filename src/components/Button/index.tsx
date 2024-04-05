import {
	type TouchableHighlightProps,
	Text,
	ActivityIndicator,
	TouchableHighlight,
} from "react-native";

type ButtonProps = {
	content: JSX.Element | string;
	isLoading?: boolean;
} & TouchableHighlightProps;

function ButtonContent({ content }: Pick<ButtonProps, "content">) {
	if (typeof content === "string") {
		return <Text className="text-white font-bold">{content}</Text>;
	}

	return content;
}

function Button({ content, isLoading, ...props }: ButtonProps) {
	return (
		<TouchableHighlight
			disabled={props.disabled}
			className={`bg-blue-primary items-center justify-center rounded-md p-3 ${
				props.disabled && "opacity-50"
			}`}
			{...props}
		>
			{isLoading ? (
				<ActivityIndicator size={26} color={"#ffff"} />
			) : (
				<ButtonContent content={content} />
			)}
		</TouchableHighlight>
	);
}

export default Button;
