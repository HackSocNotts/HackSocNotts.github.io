import { Link } from 'react-router-dom';

const navigationInitialState = {
  leftItems: [
    // {
    //   as: Link,
    //   to: '/news',
    //   content: 'News',
    //   icon: 'newspaper outline',
    //   key: 'news',
    // },
    {
      as: Link,
      to: '/events',
      content: 'Events',
      icon: 'calendar alternate outline',
      key: 'events',
    },
    {
      as: Link,
      to: '/calendar',
      content: 'Calendar',
      icon: 'calendar alternate outline',
      key: 'calendar',
    },
    {
      as: 'a',
      href: 'https://www.su.nottingham.ac.uk/societies/society/hack/',
      content: 'Join',
      icon: 'user secret',
      key: 'join',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ],
  rightItems: [
    {
      as: 'a',
      content: 'Hack Quarantine',
      href: 'https://hackquarantine.com',
      key: 'hackqurantine',
      icon: 'home',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      as: 'a',
      content: 'HackNotts',
      href: 'https://hacknotts.com',
      icon: 'chess rook',
      key: 'hacknotts',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ],
  pusher: {
    visible: false,
  },
  navbar: {
    fixed: false,
  },
};

export default navigationInitialState;
