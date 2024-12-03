import {useState} from 'react';

const useOrder = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return {
    activeTabIndex,
    setActiveTabIndex,
  };
};

export default useOrder;
