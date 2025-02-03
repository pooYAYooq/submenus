import { Children, useState } from 'react';
import { AppContext } from './AppContext';

export const AppProvider = ({ children }) => {
  // state values
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // functions
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

