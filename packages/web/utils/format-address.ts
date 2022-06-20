export const formatAddress = (value = "", length = 4) =>
  `${value.substring(0, length + 2)}...${value.substring(value.length - length)}`;
