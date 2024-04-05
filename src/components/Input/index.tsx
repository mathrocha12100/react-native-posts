import { forwardRef, type Ref } from "react";
import { TextInput, type TextInputProps } from "react-native";

const Input = forwardRef((props: TextInputProps, ref: Ref<TextInput>) => {
	return (
		<TextInput
			ref={ref}
			{...props}
			placeholderTextColor="#999999"
			className={`border-2 border-white/60 text-white p-3 rounded-md ${props.className}`}
		/>
	);
});

export default Input;
