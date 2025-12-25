export interface ContactInfo {
    label: string;
    value: string;
    icon: string;
}

export const contactInfoCards: ContactInfo[] = [
    {
        label: 'Address',
        value: '4 Kilo, Berges Clinic 4th Floor Addis Ababa, Ethiopia',
        icon: '📍',
    },
    {
        label: 'Phone',
        value: '+251 930 033 302',
        icon: '📞',
    },
    {
        label: 'Email',
        value: 'info@elnetech.com',
        icon: '✉️',
    },
];

export const contactContent = {
    badge: "Let's talk",
    title: "We're here to co-create value with you",
    description:
        "Whether you're an investor, partner, supplier, or changemaker, our team is ready to listen and respond. Reach out using the form or the direct channels—we respond within two business days.",
    formTitle: 'Send Us a Message',
    formSubtitle: 'All fields are required so we can reply with context.',
    directChannelsTitle: 'Direct Channels',
    mapLabel: 'Map',
    mapLocation: '2QH5+FW6, አዲስ አበባ',
    mapEmbedUrl: 'https://www.google.com/maps?q=2QH5%2BFW6%2C%20Addis%20Ababa&output=embed',
};
