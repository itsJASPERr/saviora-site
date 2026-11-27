const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const sitePath = (path = '') => base + path;

export const navigation = [
  { id: 'estudio', label: 'Estudio', path: '' },
  { id: 'taller', label: 'Taller', path: 'taller/' },
  { id: 'escucha', label: 'Escucha', path: 'escucha/' },
  { id: 'proyectos', label: 'Proyectos', path: 'proyectos/' },
  { id: 'cuaderno', label: 'Cuaderno', path: 'cuaderno/' },
  { id: 'sobre-mi', label: 'Sobre mí', path: 'sobre-mi/' },
] as const;

export type SitePage = (typeof navigation)[number]['id'];
