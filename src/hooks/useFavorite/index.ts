import {useDispatch, useSelector} from 'react-redux';
import {Product} from '../../models';
import {AppDispatch, RootState} from '../../store';
import {toggleFavorite, setFavorites} from '../../store/actions';
import {useEffect, useState} from 'react';

const PAGE_SIZE = 10;

const useFavorite = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMoreFavorites, setIsFetchingMoreFavorites] = useState(false);
  const [limit, setLimit] = useState(PAGE_SIZE);

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

    const newLimit =
      favorites.length >= PAGE_SIZE ? PAGE_SIZE : Math.min(favorites.length, 3);

    dispatch(setFavorites(favorites));

    setTimeout(() => {
      setLimit(newLimit);
      setIsLoading(false);
    }, 2000);
  };

  const fetchMoreFavorites = () => {
    if (isFetchingMoreFavorites || limit >= favorites.length) return;

    setIsFetchingMoreFavorites(true);

    setTimeout(() => {
      const newLimit = limit + PAGE_SIZE;
      const totalLoaded = Math.min(newLimit, favorites.length);

      setLimit(totalLoaded);
      setIsFetchingMoreFavorites(false);
    }, 2000);
  };

  return {
    isFavorite,
    toggleItemFavorite,
    favorites: favorites.slice(0, limit),
    isLoading,
    isFetchingMoreFavorites,
    refreshFavorites,
    fetchMoreFavorites,
  };
};

export default useFavorite;
