import {useEffect, useState} from 'react';
import Slider from '../../models/Slider';
import {API_ENDPOINTS, GET} from '../../api';

const useSlider = () => {
  const [sliders, setSliders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSliders = async () => {
    setIsLoading(true);

    try {
      const response = await GET(API_ENDPOINTS.GET_SLIDERS);
      const fetchedSliders = response.map(
        (sliderData: {id: number; image: string}) =>
          new Slider(sliderData.id, sliderData.image),
      );

      const imageList = fetchedSliders.map(
        (slider: {image: string}) => slider.image,
      );

      setSliders(imageList);
    } catch (error) {
      console.error('[DEBUG] ERROR WHILE FETCHING SLIDERS:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  return {
    sliders,
    isLoading,
    fetchSliders,
  };
};

export default useSlider;
