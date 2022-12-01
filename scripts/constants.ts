export const GIT_COMMANDS = {
  STAGED: 'git diff --name-only --cached',
  COMMIT: (message: string) => `git commit -m "${message}"`
};
export const PACKAGES_PATH = './packages';

export const INNER_PATH = (packageName: string) => `./packages/${packageName}/src`;
