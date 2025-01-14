export default {
    editor: {
        designSystemId: '0b17927a-d1ba-490b-8f26-ec9b341a8b86',
        /* wwEditor:start */
        settings: {
            copilot: {
                description: 'Configure the Calendly plugin settings',
                returns: 'void',
                schema: {
                    designSystemId: {
                        type: 'string',
                        description: 'The unique identifier for the design system',
                        bindable: false
                    }
                }
            }
        }
        /* wwEditor:end */
    }
};