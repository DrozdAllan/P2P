import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `'Ubuntu', sans-serif`,
        body: `'Ubuntu', sans-serif`
    },
    colors: {
        brand: {
            400: '#507c54',
            700: '#2a69ac',
            800: '#153e75',
            900: '#1a365d',
        }
    }
});

export default theme;



