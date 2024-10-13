export type DecorationType = 'clover' | 'diamond' | 'heart' | 'spade';

export const decorationType: DecorationType[] = [
    'clover',
    'diamond',
    'heart',
    'spade',
];

export type DecorationPosition =
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';

export const decorationPosition: DecorationPosition[] = [
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
];

export function getDecorationPosition(
    position: DecorationPosition,
    offset = 16,
): {
    top: number | null;
    left: number | null;
    right: number | null;
    bottom: number | null;
} {
    const configByPosition = {
        ['topLeft']: {
            top: offset,
            left: offset,
            right: null,
            bottom: null,
        },
        ['topRight']: {
            top: offset,
            left: null,
            right: offset,
            bottom: null,
        },
        ['bottomLeft']: {
            top: null,
            left: offset,
            right: null,
            bottom: offset,
        },
        ['bottomRight']: {
            top: null,
            left: null,
            right: offset,
            bottom: offset,
        },
    };

    return configByPosition[position];
}
