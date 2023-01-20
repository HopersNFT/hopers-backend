import { TokenType } from './tokens';

export type FloorPriceType = Record<`${TokenType}FloorPrice`, number>;

export interface VolumePriceType extends Record<`${TokenType}Volume`, number> {
    totalVolumeInJuno: number;
}
