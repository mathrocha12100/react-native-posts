import { X } from "lucide-react-native";
import {
	type PropsWithChildren,
	forwardRef,
	useState,
	useImperativeHandle,
	useRef,
} from "react";
import { Modal, TouchableHighlight, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type UseModalHookProps = {
	handleModal: (state: boolean) => void;
};

export function useModal() {
	const modalRef = useRef<UseModalHookProps>({} as UseModalHookProps);

	return modalRef;
}

const Dialog = forwardRef<UseModalHookProps, PropsWithChildren>(
	({ children }, ref) => {
		const insets = useSafeAreaInsets();
		const [open, setOpen] = useState(false);

		useImperativeHandle(
			ref,
			() => ({
				handleModal: (state: boolean) => setOpen(state),
			}),
			[],
		);

		return (
			<Modal
				animationType="slide"
				onRequestClose={() => setOpen(false)}
				visible={open}
			>
				<View
					style={{ paddingTop: insets.top + 20 }}
					className="bg-black/90 grow relative"
				>
					<View
						style={{
							right: 12,
							top: insets.top + 4,
							position: "absolute",
						}}
					>
						<TouchableHighlight onPress={() => setOpen(false)} className="p-2">
							<X size={28} className="text-white" />
						</TouchableHighlight>
					</View>

					{children}
				</View>
			</Modal>
		);
	},
);

export default Dialog;
