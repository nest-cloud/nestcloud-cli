import { Runner, RunnerFactory } from '../runners';
import { SchematicRunner } from '../runners/schematic.runner';
import { AbstractCollection } from './abstract.collection';
import { Collection } from './collection';
import { CustomCollection } from './custom.collection';
import { NestCloudCollection } from './nestcloud.collection';

export class CollectionFactory {
    public static create(collection: Collection | string): AbstractCollection {
        if (collection === Collection.NESTCLOUD) {
            return new NestCloudCollection(
                RunnerFactory.create(Runner.SCHEMATIC) as SchematicRunner,
            );
        }

        return new CustomCollection(
            collection,
            RunnerFactory.create(Runner.SCHEMATIC) as SchematicRunner,
        );
    }
}
