import {Gate} from '../domain/gate';

export interface NodeTargetDto {
    node: Gate;
    name?: string;
}
