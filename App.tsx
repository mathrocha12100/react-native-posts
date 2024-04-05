import { StatusBar } from "expo-status-bar";
import PostList from "./src/screens/PostList";
import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from "react-native-safe-area-context";
import { View } from "react-native";

function MainContent() {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
			className="bg-black grow"
		>
			<StatusBar style="light" />

			<PostList />
		</View>
	);
}

export default function App() {
	return (
		<SafeAreaProvider>
			<MainContent />
		</SafeAreaProvider>
	);
}
