function CreateElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => {
                if (typeof child === 'object') {
                    return child;
                } else if (typeof child === 'string' || typeof child === 'number') {
                    return { type: 'text', props: { nodeValue: String(child) } };
                } else {
                    throw new Error('Invalid child type');
                }
            })
        }
    }
}

