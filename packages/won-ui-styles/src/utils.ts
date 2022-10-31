/**
 * https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
 */
export function hexToRgba(hex: string, opacity: number = 1) {
  const hexValues = [
    parseInt(hex.substring(1, 3), 16),
    parseInt(hex.substring(3, 5), 16),
    parseInt(hex.substring(5, 7), 16),
  ];
  return `rgba(${hexValues[0]}, ${hexValues[1]}, ${hexValues[2]}, ${opacity})`;
}
