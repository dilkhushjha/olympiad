/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import _ from 'lodash';
import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';

type AppContextType = {
    context: {
        showRegisterModal: boolean;
        brandSelectModalRef: React.RefObject<HTMLDialogElement> | undefined;
        currentBrandPage: string;
        currentVariant: string;
        currentThumbnail: any;
        currentColor: string;
        loggedInUser?: null;
    };
    setContext: any;
};

const AppContext = createContext<AppContextType>({
    context: {
        showRegisterModal: false,
        brandSelectModalRef: undefined,
        currentBrandPage: '',
        currentVariant: '',
        currentThumbnail: '',
        currentColor: '',
        loggedInUser: null,
    },
    setContext: () => {},
});

export function ContentWrapper({ children }: { children: React.ReactNode }) {

    const [context, setContext] = useState<any>({
        showRegisterModal: false,
        currentBrandPage: '',
        currentVariant: '',
        currentThumbnail: '',
        currentColor: '',
        loggedInUser: null,
    });
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userString: string | undefined = Cookies.get('user');
            if (
                userString != undefined &&
                !_.isEmpty(userString) &&
                !_.isEmpty(JSON.parse(userString || ''))
            ) {
                if (_.isEmpty(context.loggedInUser)) {
                    setContext({
                        ...context,
                        loggedInUser: JSON.parse(userString || ''),
                    });
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <AppContext.Provider value={{ context, setContext }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
