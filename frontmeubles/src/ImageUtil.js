// ImageUtil.js (côté client)
import pako from 'pako';

const ImageUtil = {
  decompressImage: (compressedData) => {
    // Décompresse les données à l'aide de pako
    const decompressedData = pako.inflate(compressedData, { to: 'string' });
    return decompressedData;
  },
};

export default ImageUtil;
