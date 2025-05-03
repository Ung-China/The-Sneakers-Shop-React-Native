import {useEffect, useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';
import {Product, Variant} from '../../models';

const useProductDetail = (id?: number) => {
  const [productDetail, setProductDetail] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [size, setSize] = useState('');
  const [price, setPrice] = useState(0);
  const [activeVariantId, setActiveVariantId] = useState<number | null>(null);

  const fetchedProductDetail = async () => {
    setIsLoading(true);
    try {
      const response = await GET(API_ENDPOINTS.GET_PRODUCT_DETAIL, {
        id: id,
      });

      const variants = response.product_info.map(
        (item: any, index: number) =>
          new Variant(
            index + 1,
            item.product_size,
            Number(item.product_price),
            Number(item.product_qty),
          ),
      );

      const fetchedProductDetail = new Product(
        response.id,
        response.name,
        Number(response.price),
        response.rating,
        response.image,
        response.description,
        response.images,
        response.brand_id,
        variants,
      );

      setProductDetail(fetchedProductDetail);
      if (variants.length > 0) {
        setActiveVariantId(0);
        setSize(variants[0].size);
        setPrice(variants[0].price);
      }
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE FETCHING PRODUCT DETAIL:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchedProductDetail();
  }, [id]);

  return {
    isLoading,
    productDetail,
    fetchedProductDetail,
    activeVariantId,
    price,
    size,
    setActiveVariantId,
    setSize,
    setPrice,
  };
};

export default useProductDetail;
