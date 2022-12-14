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
      'π¨π¨π¨π¨π¨π¨\nμ€νμ΄μ§μ μ¬λΌκ° νμΌμ΄ μμ΅λλ€.\nνμΈ ν λ€μ μ§ν λΆνλλ¦½λλ€.',
      '\x1b[0m'
    );
    return false;
  }

  const { checkFiles } = await enquirer.prompt<{ checkFiles: string }>({
    type: 'confirm',
    name: 'checkFiles',
    message: `μμ ν νμΌλ€μ νμΈν΄μ£ΌμΈμ!\n${checkStaged.join(
      '\n'
    )}\nμ νμΌλ€ μμ νκ²μ΄ λ§λμ?`,
  });
  if (!checkFiles) {
    console.log('\x1b[31m', 'π¨π¨π¨π¨π¨π¨\nνμΌμ νμΈ νμ λ€μ μ§νν΄μ£ΌμΈμ.', '\x1b[0m');
    return false;
  }
  return true;
};
