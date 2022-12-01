import { execSync } from 'node:child_process';
import { GIT_COMMANDS } from './constants';
import { checkStageFiles } from './utils/checkStageFiles';
import { getChangePackageName } from './utils/getChangePackageName';
import { getChangeSubjectName } from './utils/getChangeSubjectName';
import { getCommitMessage } from './utils/getCommitMessage';
import { getTotalCommitMsg } from './utils/getTotalCommitMsg';

if (!(await checkStageFiles())) process.exit(0);
const packageName = await getChangePackageName();
const subjectName = await getChangeSubjectName(packageName);
const commitMsg = await getCommitMessage();
const totalCommitMsg = getTotalCommitMsg({ packageName, subjectName, commitMsg });
execSync(GIT_COMMANDS.COMMIT(totalCommitMsg));
