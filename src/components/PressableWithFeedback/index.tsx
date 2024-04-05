import { Pressable, type PressableProps } from "react-native";

type PressableWithFeedbackProps = {} & PressableProps;

function PressableWithFeedback({
	children,
	className,
	...rest
}: PressableWithFeedbackProps) {
	return (
		<Pressable
			className={className}
			style={({ pressed }) => [
				{
					opacity: pressed ? 0.6 : 1,
				},
			]}
			{...rest}
		>
			{children}
		</Pressable>
	);
}

export default PressableWithFeedback;
