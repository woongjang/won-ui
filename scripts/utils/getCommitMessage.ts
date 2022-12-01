import enquirer from 'enquirer';

export const getCommitMessage = async () => {
  const { commitMsg } = await enquirer.prompt<{ commitMsg: string }>({
    type: 'input',
    name: 'commitMsg',
    message: '커밋 메세지를 작성해주세요!',
    validate: value => {
      if (!value) return '커밋 메세지는 작성해주셔야죠! 😂';
      return true;
    },
  });
  return commitMsg;
};
