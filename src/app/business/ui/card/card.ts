export type CardType = 'clover' | 'diamond' | 'heart' | 'spade';

export const cardType: CardType[] = [
    'clover',
    'diamond',
    'heart',
    'spade',
];

export interface Card {
    type: CardType;
    value: number;
}
