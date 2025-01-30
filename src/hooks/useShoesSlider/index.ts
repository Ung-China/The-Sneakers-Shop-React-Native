import {useEffect, useState} from 'react';
import Slider from '../../models/Slider';
import {API_ENDPOINTS, GET} from '../../api';

const useShoesSlider = () => {
  const [shoesSliders, setShoesSliders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchShoesSliders = async () => {
    setLoading(true);

    try {
      const response = await GET(API_ENDPOINTS.GET_SHOES_SLIDER);

      const fetchedSliders = response.map(
        (sliderData: {id: number; image: string}) =>
          new Slider(sliderData.id, sliderData.image),
      );

      const imageList = fetchedSliders.map(
        (slider: {image: string}) => slider.image,
      );

      setShoesSliders(imageList);
    } catch (error) {
      console.error('[DEBUG] ERROR WHILE FETCHING SHOES SLIDERS:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShoesSliders();
  }, []);

  return {
    shoesSliders,
    loading,
    fetchShoesSliders,
  };
};

export default useShoesSlider;
