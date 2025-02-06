import { Children, useState } from 'react';
import { AppContext } from './AppContext';

export const AppProvider = ({ children }) => {
  // state values
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); //To control the functionality of sidebar
  const [pageId, setPageId] = useState(null);
  // functions
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}>
      {children}
    </AppContext.Provider>
  );
};

