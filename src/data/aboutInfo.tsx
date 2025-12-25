import React from 'react';

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

export const aboutIntro = {
    paragraph1: (
        <>
            Elnet Technology PLC is strategically positioned as a technology-enabled investment holding company with a dual commitment to financial excellence and social responsibility. Founded in Ethiopia with a pan-African vision, we orchestrate a diversified portfolio of subsidiaries across key economic sectors while maintaining our core mission of creating sustainable value for communities. Our operations extend throughout Ethiopia and across East Africa, where we leverage technological innovation as the primary driver of inclusive economic transformation and measurable social impact.
        </>
    ),
    paragraph2: (
        <>
            We specialize in architecting and deploying scalable, technology-first solutions that systematically address complex social and economic challenges. Through our ecosystem of strategic investments, we cultivate innovation across multiple industries—from digital infrastructure and enterprise technology to sustainable agriculture and financial inclusion. Each subsidiary within our portfolio is meticulously designed to harness cutting-edge technology, data intelligence, and operational excellence to create sustainable economic pathways while advancing Ethiopia's position in the global digital economy.
        </>
    ),
};
