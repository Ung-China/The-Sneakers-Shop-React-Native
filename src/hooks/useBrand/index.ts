import {useEffect, useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';
import {Brand, Product} from '../../models';

const useBrand = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [products, setProducts] = useState([]);
  const [isLoadingBrands, setIsLoadingBrand] = useState(false);
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [isFetchingMoreProducts, setIsFetchingMoreProducts] = useState(false);
  const [brandId, setBrandId] = useState<number | null>(null);
  const [brandPage, setBrandPage] = useState(1);
  const [productPage, setProductPage] = useState(1);
  const [totalBrandPages, setTotalBrandPages] = useState(1);
  const [totalProductPages, setTotalProductPages] = useState(1);

  const fetchBrands = async (page = 1) => {
    if (page > totalBrandPages || isLoadingBrands) return;

    if (page === 1) {
      setIsLoadingBrand(true);
    } else setIsFetchingMore(true);

    try {
      const response = await GET(API_ENDPOINTS.GET_BRANDS, {page});
      const fetchedBrands = response.data.map(
        (item: {id: number; name: string; image: string}) =>
          new Brand(item.id, item.name, item.image),
      );

      setBrands(prevBrands =>
        page === 1 ? fetchedBrands : [...prevBrands, ...fetchedBrands],
      );

      setBrandPage(response.current_page);
      setTotalBrandPages(response.last_page);

      if (!brandId && fetchedBrands.length > 0) {
        const firstBrandId = fetchedBrands[0].id;
        setBrandId(firstBrandId);
      }
    } catch (error) {
      console.error('[DEBUG] ERROR WHILE FETCHING BRANDS:', error);
    } finally {
      setIsLoadingBrand(false);
      setIsFetchingMore(false);
    }
  };

  const fetchBrandById = async (id?: number, page = 1) => {

    if (page > totalProductPages || isLoadingProduct) return;

    if (page === 1) {
      setIsLoadingProduct(true);
      setProducts([]);
    } else setIsFetchingMoreProducts(true);
    try {
      const response = await GET(API_ENDPOINTS.GET_PRODUCTS_BY_BRAND, {
        brand_id: id,
        page: page,
      });

      const fetchedProducts = response.data.map(
        (item: {
          id: number;
          name: string;
          price: string;
          rating: string;
          image: string;
        }) =>
          new Product(item.id, item.name, item.price, item.rating, item.image),
      );

      setProducts(prevProducts =>
        page === 1 ? fetchedProducts : [...prevProducts, ...fetchedProducts],
      );

      setProductPage(response.current_page);
      setTotalProductPages(response.last_page);
    } catch (error) {
      console.error('[DEBUG] ERROR WHILE FETCHING PRODUCTS BY BRAND:', error);
    } finally {
      setIsFetchingMoreProducts(false);
      setIsLoadingProduct(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(() => {
    if (brandId) {
      fetchBrandById(brandId);
    }
  }, [brandId]);

  const refreshProducts = () => {
    if (brandId) {
      setProductPage(1);
      setProducts([]);
      fetchBrandById(brandId, 1);
    }
  };

  return {
    brands,
    products,
    isLoadingBrands,
    isLoadingProduct,
    fetchBrands,
    fetchMoreBrands: () => fetchBrands(brandPage + 1),
    fetchMoreProducts: () => fetchBrandById(brandId, productPage + 1),
    isFetchingMore,
    isFetchingMoreProducts,
    brandId,
    setBrandId,
    setIsLoadingProduct,
    setProductPage,
    refreshProducts,
  };
};

export default useBrand;
