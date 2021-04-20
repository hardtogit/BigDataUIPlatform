/**
 *
 * 用于js中响应式像素计算
 */
const getCoefficient = () => {
  const docEle = document.documentElement;
  const screenRatioByDesign = 16 / 9;
  const screenRatio = docEle.clientWidth / docEle.clientHeight;
  const coefficient =
    ((screenRatio > screenRatioByDesign
      ? screenRatioByDesign / screenRatio
      : 1) *
      docEle.clientWidth) /
    1920;
  return coefficient;
};
export const coefficient = getCoefficient();

export const ActualPixels = (virtualPixels) => {
  return virtualPixels * coefficient;
};
