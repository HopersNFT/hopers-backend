/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';

// let cache = '{}';

export const catchAsync =
    (fn: (req: Request, res: Response, next: NextFunction) => void) =>
    (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };

export const pick = (object: Record<string, any>, keys: string[]) =>
    keys.reduce((obj: any, key: string) => {
        if (object && Object.prototype.hasOwnProperty.call(object, key)) {
            obj[key] = object[key];
        }
        return obj;
    }, {});

type TAddUnitResult = {
    add: number;
    overflow: number;
};

export const calcFibonacci = (number: number): string => {
    let num1 = [0],
        num2 = [1],
        nextTerm: number[] = [];

    if (!number) return '0';
    if (number === 1) return '0';
    if (number === 2) return '1';
    // const cachedValue = getFromCache(number);
    // if (cachedValue) return cachedValue;

    for (let i = 2; i < number; i++) {
        nextTerm = addLargeNumber(num1, num2);
        num1 = num2;
        num2 = nextTerm;
        // storeToCache(i, convertArrayToString(nextTerm));
    }
    const result = convertArrayToString(nextTerm);
    // storeToCache(number, result);
    return result;
};

// const getFromCache = (number: number): string => {
//     const object = JSON.parse(cache);
//     return object[number];
// };

// const storeToCache = (number: number, value: string) => {
//     const object = JSON.parse(cache);
//     object[number] = value;
//     cache = JSON.stringify(object);
// };

const convertArrayToString = (array: number[]): string =>
    array.reduce(
        (result: string, crrValue) => `${crrValue.toLocaleString()}${result}`,
        '',
    );

const addLargeNumber = (
    number1: number[],
    number2: number[],
    threshold = 1e200,
): number[] => {
    const lengthNumber1 = number1.length,
        lengthNumber2 = number2.length;
    const maxLength = Math.max(lengthNumber1, lengthNumber2);
    const result: number[] = [];
    let preOverflow = 0;
    for (let i = 0; i < maxLength; i++) {
        const subNumber1 = number1[i];
        const subNumber2 = number2[i];
        const subAdd = addNumberUnit(
            subNumber1,
            subNumber2,
            preOverflow,
            threshold,
        );
        preOverflow = subAdd.overflow;
        result.push(subAdd.add);
    }
    if (preOverflow) result.push(preOverflow);

    return result;
};

const addNumberUnit = (
    number1: number,
    number2: number,
    overflow: number,
    threshold = 1e200,
): TAddUnitResult => {
    const sum = (number1 || 0) + (number2 || 0) + (overflow || 0);
    return {
        add: sum % threshold,
        overflow: Math.floor(sum / threshold),
    };
};
