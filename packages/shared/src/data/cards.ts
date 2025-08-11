import { CardContent } from '../components/Card';
import banner from '../assets/banner.jpg';

export const cards: CardContent[] = [
  {
    id: 1,
    heading: 'Heading 1',
    sub: 'Subtitle 1',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
    img: banner,
    cta: 'Button 1',
  },
  {
    id: 2,
    heading: 'Heading 2',
    sub: 'Subtitle 2',
    body: [
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
    img: banner,
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
    img: banner,
    cta: 'Button 3',
  },
];
