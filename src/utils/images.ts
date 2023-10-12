import type { Image, Images } from '~/types';

async function load() {
  let images: Record<string, () => Promise<unknown>> | undefined = undefined;
  try {
    images = import.meta.glob('/src/assets/images/**');
  } catch (e) {
    // continue regardless of error
  }
  return images;
}

let _images: Images;

export async function fetchLocalImages(): Promise<Images> {
  _images = _images || load();
  return await _images;
}

export async function findImage(imagePath?: string): Promise<Image | null | string> {
  if (typeof imagePath !== 'string') {
    return null;
  }

  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  if (!imagePath.startsWith('/src/assets')) {
    return null;
  } // For now only consume images using ~/assets alias (or absolute)

  const images = await fetchLocalImages();
  const key = imagePath.replace('~/', '/src/');

  return typeof images[key] === 'function' ? (await images[key]())['default'] : null;
}
