import enquirer from 'enquirer';
import { readdir } from 'node:fs/promises';
import { INNER_PATH } from '../constants';
import { getOnlyFolders } from './getOnlyFolders';

export const getChangeSubjectName = async (packageName: string) => {
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

  return changeSubject;
};
