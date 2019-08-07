import {NodeTargetDto} from '@/builders/nodeTargetDto';
import {Gate} from '@/domain/gate';

export class NodeMap {


    collection: Array<[NodeTargetDto, NodeTargetDto[]]> = [];

    public Values() {
        return this.collection.flatMap(([key, value]) => value)
            .filter((value, index, array) => array.indexOf(value) === index);
    }

    public Keys() {
        return this.collection.map(([key, value]) => key);
    }

    public set(param: { node: Gate }, nodeTargetDtos: NodeTargetDto[]) {
        this.collection.push([param, nodeTargetDtos]);
    }

    public get(origin: Gate) {
        return this.collection
            .filter(([{name, node}, key]) => node.Equals(origin))
            .map(([key, value]) => value)
            .flat()
            .filter((value, index, array) => {
                return array.findIndex(value1 => value1.node === value.node) === index;
            });
    }

    public GetByNodeAndTarget(origin: Gate, target: string) {
        const result = this.collection.find(([{name, node}, key]) => node.Equals(origin) && name === target);
        return result && result[1];
    }


    Gates(): NodeTargetDto[] {
        return this.collection.flat(2)
            .filter((value, index, array) => {
                return array.findIndex(value1 => value1.node === value.node) === index;
            });
    }

    Entries() {
        return this.collection;
    }

    push(...param: Array<[NodeTargetDto, NodeTargetDto[]]>) {
        this.collection.push(...param);
    }
}
