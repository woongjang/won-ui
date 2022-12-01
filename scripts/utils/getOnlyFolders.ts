import { Dirent } from 'node:fs';

export const getOnlyFolders = (arr: Dirent[]) => arr.filter(folder => folder.isDirectory());