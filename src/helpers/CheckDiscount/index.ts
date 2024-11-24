const checkDiscount = (price: number, promotion: number) => {
  return {
    discount: price,
    hasDiscount: promotion,
  };
};

export default checkDiscount;
