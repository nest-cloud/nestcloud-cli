import chalk from 'chalk';
import { CommanderStatic } from 'commander';
import { InfoAction, NewAction } from '../actions';
import { ERROR_PREFIX } from '../lib/ui';
import { InfoCommand } from './info.command';
import { NewCommand } from './new.command';

export class CommandLoader {
    public static load(program: CommanderStatic): void {
        new NewCommand(new NewAction()).load(program);
        new InfoCommand(new InfoAction()).load(program);

        this.handleInvalidCommand(program);
    }

    private static handleInvalidCommand(program: CommanderStatic) {
        program.on('command:*', () => {
            console.error(
                `\n${ERROR_PREFIX} Invalid command: ${chalk.red('%s')}`,
                program.args.join(' '),
            );
            console.log(
                `See ${chalk.red('--help')} for a list of available commands.\n`,
            );
            process.exit(1);
        });
    }
}
