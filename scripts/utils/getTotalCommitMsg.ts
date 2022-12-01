export const getTotalCommitMsg = ({
  packageName,
  subjectName,
  commitMsg,
}: {
  packageName: string;
  subjectName: string | undefined;
  commitMsg: string;
}) => {
  const _package = packageName === 'won-ui' ? '@won-ui' : `@won-ui/${packageName.split('-').pop()}`
  const _subject = `${subjectName && `<${subjectName}> `}`;
  return `[${_package}] ${_subject}${commitMsg}`;
};
