export interface AboutCard {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export const aboutCards: AboutCard[] = [
    {
        id: 'mission',
        icon: '🎯',
        title: 'Our Mission',
        description:
            'To pioneer innovative solutions that drive sustainable economic growth, empower communities, and transform industries through cutting-edge technology and strategic investments.',
    },
    {
        id: 'vision',
        icon: '🔮',
        title: 'Our Vision',
        description:
            "To be Ethiopia's catalyst for digital transformation, creating an ecosystem where technology, innovation, and human potential converge to build a prosperous and inclusive future for all.",
    },
];

export interface CoreValue {
    title: string;
    description: string;
    icon: string;
}

export const coreValues: CoreValue[] = [
    {
        title: 'Integrity',
        description: 'We build trust through unwavering honesty, transparency, and ethical conduct in every interaction and decision.',
        icon: '💎',
    },
    {
        title: 'Responsibility',
        description: 'We embrace accountability for our actions, our impact on communities, and our commitment to sustainable practices.',
        icon: '🛡️',
    },
    {
        title: 'Excellence',
        description: 'We pursue the highest standards in everything we do, continuously improving and innovating to deliver exceptional value.',
        icon: '⭐',
    },
    {
        title: 'Servant Leadership',
        description: 'We lead by serving others, empowering our teams, partners, and communities to achieve their fullest potential.',
        icon: '🤝',
    },
];

