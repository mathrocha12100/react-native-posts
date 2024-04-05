import { atom } from "jotai";
import { splitAtom } from "jotai/utils";

import type { PostProps } from "../../../components/Post";
import { generateRandomPosts } from "../mock";

export const posts = atom<PostProps[]>(generateRandomPosts(200));

export const splitedPosts = splitAtom(posts);
