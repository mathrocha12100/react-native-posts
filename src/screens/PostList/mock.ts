import { faker } from "@faker-js/faker";
import type { PostProps } from "../../components/Post";

export const generateRandomPosts = (ammount: number) => {
	return Array.from({ length: ammount }).map(
		() =>
			({
				id: faker.string.uuid(),
				liked: false,
				avatar: faker.image.avatar(),
				description: faker.lorem.paragraph(),
				name: faker.person.firstName(),
			}) as PostProps,
	);
};
