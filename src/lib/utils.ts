export const getMediaUrl = (path: string) => {
  return import.meta.env.VITE_MEDIA_BASE_URL + path;
};
