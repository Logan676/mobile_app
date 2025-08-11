import { ImageSourcePropType } from 'react-native';

export interface CardData {
  id: number;
  heading: string;
  sub?: string;
  body: string[];
  img: ImageSourcePropType;
  cta: string;
}

const placeholder = { uri: 'https://via.placeholder.com/400x300.png?text=Banner' };

export const cards: CardData[] = [
  {
    id: 1,
    heading: 'Heading 1',
    sub: 'Subtitle 1',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
    img: placeholder,
    cta: 'Button 1',
  },
  {
    id: 2,
    heading: 'Heading 2',
    sub: 'Subtitle 2',
    body: [
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
    img: placeholder,
    cta: 'Button 2',
  },
  {
    id: 3,
    heading: 'Heading 3',
    sub: 'Subtitle 3',
    body: [
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    img: placeholder,
    cta: 'Button 3',
  },
];
