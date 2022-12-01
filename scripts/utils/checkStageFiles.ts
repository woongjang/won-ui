import enquirer from 'enquirer';
import { execSync } from 'node:child_process';
import { GIT_COMMANDS } from '../constants';

export const checkStageFiles = async (): Promise<boolean> => {
  const checkStaged = execSync(GIT_COMMANDS.STAGED)
    .toString()
    .split('\n')
    .filter(fileName => !!fileName)
    .map((file, idx) => `${idx + 1}: ${file}`);

  if (checkStaged.length === 0) {
    console.log(
      '\x1b[31m',
      '🚨🚨🚨🚨🚨🚨\n스테이지에 올라간 파일이 없습니다.\n확인 후 다시 진행 부탁드립니다.',
      '\x1b[0m'
    );
    return false;
  }

  const { checkFiles } = await enquirer.prompt<{ checkFiles: string }>({
    type: 'confirm',
    name: 'checkFiles',
    message: `수정한 파일들을 확인해주세요!\n${checkStaged.join(
      '\n'
    )}\n위 파일들 수정한것이 맞나요?`,
  });
  if (!checkFiles) {
    console.log('\x1b[31m', '🚨🚨🚨🚨🚨🚨\n파일을 확인 후에 다시 진행해주세요.', '\x1b[0m');
    return false;
  }
  return true;
};
