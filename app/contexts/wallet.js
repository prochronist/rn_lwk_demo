import {createContext, useContext} from 'react';

const Wallet = createContext(null);

export function WalletProvider({children}) {
  return <Wallet.Provider value={{}}>{children}</Wallet.Provider>;
}

export function useWalletProvider() {
  const walletContext = useContext(Wallet);
  if (!walletContext) {
    throw Error('You must use the Wallet proider inside of a global context');
  }
  return walletContext;
}
