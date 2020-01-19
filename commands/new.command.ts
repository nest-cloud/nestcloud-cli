import { Command, CommanderStatic } from 'commander';
import { Collection } from '../lib/schematics';
import { AbstractCommand } from './abstract.command';
import { Input } from './command.input';

export class NewCommand extends AbstractCommand {
    public load(program: CommanderStatic) {
        program
            .command('new [name]')
            .alias('n')
            .description('Generate NestCloud application.')
            .option('--directory [directory]', 'Specify the destination directory')
            .option(
                '-d, --dry-run',
                'Report actions that would be performed without writing out results.',
            )
            .option('-g, --skip-git', 'Skip git repository initialization.')
            .option('-s, --skip-install', 'Skip package installation.')
            .option(
                '-p, --package-manager [package-manager]',
                'Specify package manager.',
            )
            .option(
                '-c, --collection [collectionName]',
                'Schematics collection to use.',
            )
            .option(
                '-t, --template [template]',
                'Schematics template to use.',
            )
            .action(async (name: string, command: Command) => {
                const options: Input[] = [];
                options.push({ name: 'directory', value: command.directory });
                options.push({ name: 'dry-run', value: !!command.dryRun });
                options.push({ name: 'skip-git', value: !!command.skipGit });
                options.push({ name: 'skip-install', value: !!command.skipInstall });
                options.push({
                    name: 'package-manager',
                    value: command.packageManager,
                });
                options.push({
                    name: 'collection',
                    value: command.collection || Collection.NESTCLOUD,
                });
                options.push({
                    name: 'template',
                    value: command.template || 'application',
                });

                const inputs: Input[] = [];
                inputs.push({ name: 'name', value: name });

                await this.action.handle(inputs, options);
            });
    }
}
