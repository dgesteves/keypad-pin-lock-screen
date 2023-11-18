import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface IAppContext {
  themeMode: string;
  setThemeMode: Dispatch<SetStateAction<string>>;
}

interface IAppContextProvider {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext>({
  themeMode: 'light',
  setThemeMode: () => null,
});

export function AppContextProvider({ children }: IAppContextProvider) {
  const [themeMode, setThemeMode] = useState('light');

  return (
    <AppContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </AppContext.Provider>
  );
}
