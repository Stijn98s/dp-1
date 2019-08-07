import {ValidatorStrategy} from './ValidatorStrategy';
import { CircuitConfiguration } from '../CircuitConfiguration';

export class InfiniteLoopsValidatorStrategy implements ValidatorStrategy {


    public Validate({nonKeyGateMap}: CircuitConfiguration) {
        return [...nonKeyGateMap.keys()]
            .map((key) => this.isInfinateLoop(key, nonKeyGateMap, []))
            .filter((value) => !!value)
            .map((loopArray) => loopArray as string[])
            .reduce(this.removeSimilarLoops, [])
            .map((value) => "loop found: " + value!.join('-->'));
    }


    private removeSimilarLoops(previousValue: string[][], currentValue: string[]) {
        if (!previousValue.some((value) => value.indexOf(currentValue[currentValue.length - 1])> -1)) {
            previousValue.push(currentValue);
        }
        return previousValue;
    }

    private isInfinateLoop(key: string, gateMap: Map<string, string[]>, loop: string[]): string[] | undefined {
        const nextLoop = [...loop, key];
        if (loop.some((value) => value === key)) {
            return nextLoop;
        }
        const nextSet = gateMap.get(key);
        if (nextSet) {
            return nextSet
                .map((value) => this.isInfinateLoop(value, gateMap, nextLoop))
                .find((value) => !!value);
        }
    }
}
