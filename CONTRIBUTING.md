# Contribution Guidelines

## Who can contribute?
Anyone can contribute to the project. However, one must follow strictly the contribution guidelines and read through the [Project Structure](https://github.com/fromScratchStudioGr/locale-to-number.js/wiki/Project-Structure) page.

## Branching
Regarding branching, the `main` branch will contain the latest released version publicly available via `npm`. The `integration` branch will contain the code that is actively being developed and tested. Each new locale, code refactoring or bug fix, will be handled in a separate branch. When the actual implementation is over and the needed unit tests are written, the developer can create a PR on the `integration` branch. Until the first major release the package will not be publicly available. Thus, the integration branch will not be used.

All branch names must be in lowercase where each word is separated by a hyphen, for example `add-locale-en`. Also, when naming use the imperative, present tense:  "add" not "added" nor "adds". For now, all branches must come from `main`.

Commit summary must start with a capital letter, while their ending must be marked by a period. Summaries must use past tense: "added" not "add" nor "adds". Commit description are not required. However, they must follow summaries' rules.

When a branch satisfies the [Definition of Done](#dod), the developer can submit a PR. In PR's summary the imperative, present tense must be used, while in its description one must use past tense. After submitting the PR, a maintainer will review the branch and proceed accordingly. **Do not delete** the branch unless a maintainer says so.

### Code Conventions
The source files are located in the `src` folder. Each utility is organized in a separate module. Each module is in its own folder and consists of 2 files: the actual module and the spec file. When naming a module one must use lowecase letters where words are separated by a hyphen. The specs file must have the same name followed by the `.spec` extension. So, a module should look like this:
```
locale-to-number.js    
│
└───src
│   │
│   └───core
│       └───core.js
│       └───core.spec.js      
```
The actual module name must follow the `camelCase` convention. For more details, check the `create-template-string.js` file.

Every function in a module must be properly commented using the [JSDoc](https://jsdoc.app/) convention. The code must be properly formatted by following the rules stated in the `.prettierrc` file.

In the spec file, there must be an extensive and well-covered suite of test cases. The actual testing is done by the [Jest](https://github.com/facebook/jest) library. To run the unit-test, execute the following:
```bash
npm run test
```

**Note**: The `getNumber` module is special due to the fact that it needs to be tested thoroughly for each supported locale. Thus, only in this module the spec files are located in the `/specs` folder.

### <a id="dod"></a> Definition of Done
One task is completed when:
1) All the requirements of the task that are defined are met when running the unit-tests.
2) The unit-test coverage is at least at 95% (if the 100% mark can be reached, then it must be reached).
3) The code is well-commented and uses the JSDoc convention properly.

### Reasons of Rejection
A PR can be rejected if at least one of the following occurs:
1) The branch does not follow the proper naming conventions.
2) The commits messages do not follow the proper naming conventions.
3) The PR does not follow the proper naming conventions.
4) The requirements of the task are not met entirely.
5) The unit-test coverage is insufficient.
6) The code is not well-commented.
7) The code is not properly formatted.
8) The JSDoc convention is invalid or insufficient.