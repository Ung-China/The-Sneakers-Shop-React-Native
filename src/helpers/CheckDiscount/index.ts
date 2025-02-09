const checkDiscount = (price: string, promotion: string) => {
  return {
    discount: price,
    hasDiscount: promotion,
  };
};

export default checkDiscount;
