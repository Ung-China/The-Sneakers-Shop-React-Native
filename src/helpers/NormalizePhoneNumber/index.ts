const normalizePhoneNumber = (phone: string): string => {
  if (phone.startsWith('855')) {
    return phone.replace(/^855/, '0');
  }
  return phone;
};

export default normalizePhoneNumber;
