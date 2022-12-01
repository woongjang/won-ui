import enquirer from 'enquirer';
import { readdir } from 'node:fs/promises';
import { PACKAGES_PATH } from '../constants';
import { getOnlyFolders } from './getOnlyFolders';

export const getChangePackageName = async () => {
  const packages = await readdir(PACKAGES_PATH, { withFileTypes: true });

  const { packageName } = await enquirer.prompt<{ packageName: string }>({
    type: 'select',
    name: 'packageName',
    message: '어떤 패키지를 수정하셨나요? 😀',
    choices: ['won-ui', ...getOnlyFolders(packages).map(folder => folder.name)],
  });

  return packageName;
};
