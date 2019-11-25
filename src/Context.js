import { createContext } from 'react';

const initialContext = {
    theme: 'dark',
};

const Context = createContext(initialContext)

export default Context;