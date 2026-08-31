import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Henok Birhanu | Core Systems & Software Engineer',
    short_name: 'Henok Birhanu',
    description: 'Portfolio of Henok Birhanu — Core Systems and Software Engineer specializing in enterprise banking systems, Oracle, WebLogic, FLEXCUBE, APIs, React, and Angular.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090d16',
    theme_color: '#090d16',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
