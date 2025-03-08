import {useDispatch, useSelector} from 'react-redux';
import {Product} from '../../models';
import {AppDispatch, RootState} from '../../store';
import {toggleFavorite} from '../../store/actions';
import {useEffect, useState} from 'react';
import {setFavorites} from '../../store/actions';

const useFavorite = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const favorites: Product[] = useSelector(
    (state: RootState) => state.favorites.favorites,
  );

  const isFavorite = (id: number): boolean =>
    favorites.some(item => item.id === id);

  const toggleItemFavorite = (product: Product) => {
    dispatch(toggleFavorite(product));
  };

  const refreshFavorites = async () => {
    setIsLoading(true);
    dispatch(setFavorites(favorites));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return {
    isFavorite,
    toggleItemFavorite,
    favorites,
    isLoading,
    refreshFavorites,
  };
};

export default useFavorite;
