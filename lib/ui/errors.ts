// tslint:disable:max-line-length

export const CLI_ERRORS = {
    MISSING_TYPESCRIPT: (path: string) =>
        `Could not find TypeScript configuration file "${path}". Please, ensure that you are running this command in the appropriate directory (inside NestCloud workspace).`,
    WRONG_PLUGIN: (name: string) =>
        `The "${name}" plugin is not compatible with NestCloud CLI. Neither "after()" nor "before()" function have been provided.`,
};
