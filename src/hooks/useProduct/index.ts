import {useState} from 'react';

const useProduct = () => {
  const [activeVariant, setActiveVariant] = useState(0);

  const toggleVariant = (id: number) => {
    setActiveVariant(prev => (prev === id ? 0 : id));
  };
  return {
    activeVariant,
    setActiveVariant,
    toggleVariant,
  };
};

export default useProduct;
