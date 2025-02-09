import {useEffect, useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';
import {Product, Variant} from '../../models';

const useProductDetail = (id?: number) => {
  const [productDetail, setProductDetail] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [activeVariant, setActiveVariant] = useState<number | null>(null);

  const fetchedProductDetail = async () => {
    setIsLoading(true);
    try {
      const response = await GET(API_ENDPOINTS.GET_PRODUCT_DETAIL, {
        id: id,
      });

      const variants = response.product_info.map(
        (
          item: {
            product_size: string;
            product_price: string;
            product_qty: string;
          },
          index: number,
        ) =>
          new Variant(
            index + 1,
            item.product_size,
            item.product_price,
            item.product_qty,
          ),
      );

      const fetchedProductDetail = new Product(
        response.id,
        response.name,
        response.price,
        response.rating,
        response.image,
        response.description,
        response.images,
        variants,
        response.brand_id,
      );

      setProductDetail(fetchedProductDetail);
      if (variants.length > 0) {
        setActiveVariant(0);
        setSize(variants[0].size);
        setPrice(variants[0].price);
      }
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE FETCHING PRODUCT DETAIL:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchedProductDetail();
  }, [id]);

  return {
    isLoading,
    productDetail,
    fetchedProductDetail,
    activeVariant,
    price,
    size,
    setActiveVariant,
    setSize,
    setPrice,
  };
};

export default useProductDetail;
