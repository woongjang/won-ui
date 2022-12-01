import enquirer from 'enquirer';
import { execSync } from 'node:child_process';
import { readdir } from 'node:fs/promises';
import { GIT_COMMANDS, INNER_PATH } from './constants';
import { checkStageFiles } from './utils/checkStageFiles';
import { getChangePackageName } from './utils/getChangePackageName';
import { getOnlyFolders } from './utils/getOnlyFolders';

if (!(await checkStageFiles())) process.exit(0);
const packageName = await getChangePackageName();

let changeSubject;

if (packageName === 'won-ui-core' || packageName === 'won-ui-hooks') {
  const subjectList = await readdir(INNER_PATH(packageName), { withFileTypes: true });
  const { subject } = await enquirer.prompt<{ subject: string }>({
    type: 'autocomplete',
    name: 'subject',
    message: '상세 변경사항을 선택해주세요! 👇',
    choices: getOnlyFolders(subjectList),
  });
  changeSubject = subject;
}

// 위에서 정의됐다면 skip으로 넘어감
await enquirer
  .prompt<{ subject: string }>({
    type: 'input',
    name: 'subject',
    message: '상세 변경사항을 입력해주세요. (미입력 시 생략됩니다!)',
    skip: changeSubject !== undefined,
  })
  .then(({ subject }) => {
    if (subject.trim() !== '') changeSubject = subject;
  });

const { commitMsg } = await enquirer.prompt<{ commitMsg: string }>({
  type: 'input',
  name: 'commitMsg',
  message: '커밋 메세지를 작성해주세요!',
  validate: value => {
    if (!value) return '커밋 메세지는 작성해주셔야죠! 😂';
    return true;
  },
});

const convertedPackageName = `@won-ui/${packageName.split('-').pop()}`;
const convertedChangeSubject = `${changeSubject && `<${changeSubject}> `}`;

const totalCommitMsg = `[${convertedPackageName}] ${convertedChangeSubject}${commitMsg}`;


execSync(GIT_COMMANDS.COMMIT(totalCommitMsg));