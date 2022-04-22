export const formatNumber = function(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
