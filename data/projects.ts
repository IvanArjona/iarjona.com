import { IProjectItem } from '../types/index';

const projectsEN: IProjectItem[] = [
  {
    name: 'Cloudflare Tunnel for VSCode',
    description: ['A Visual Studio Code extension to create a local tunnel so your local http server can be accessed remotely using Cloudflare Tunnel'],
    github: 'https://github.com/IvanArjona/cloudflare-tunnel-vscode',
    link: 'https://marketplace.visualstudio.com/items?itemName=IvanArjona.cloudflaretunnel',
    image: 'images/projects/cloudflare-tunnel-for-vscode.gif',
    tags: ['JavaScript', 'TypeScript', 'Visual Studio Code', 'http'],
  },
  {
    name: 'Web application for the collection, treatment and visualization of public data',
    description: [
      'Web application that allows the visualization of demographic and sociological data from public data sources in the Spanish territory, allowing these sources to be combined and more advanced queries to be carried out using calculated columns.',
      'Collection and representation of this data on the map of Spain at the province and municipality level, allowing its export to CSV and JSON for use in data mining processes.',
    ],
    github: 'https://github.com/IvanArjona/TFG-Datos-publicos',
    image: 'images/projects/tfg-map.png',
    tags: ['Python', 'Pandas', 'Flask', 'Mongodb', 'Data mining'],
  },
];

const projectsES = [
  {
    ...projectsEN[0],
    name: 'Cloudflare Tunnel para VSCode',
    description: ['Extensión de Visual Studio Code para crear un túneles local para poder dar acceso a tu servidor http local de forma remota mediante Cloudflare Tunnel'],
  },
  {
    ...projectsEN[1],
    name: 'Aplicación Web para la recopilación, tratamiento y visualización de datos públicos',
    description: [
      'Aplicación web que permite la consulta de datos demográficos y sociológicos de fuentes de datos públicas en el territorio español, permitiendo combinar estas fuentes y realizar consultas más avanzadas mediante columnas calculadas.',
      'Recolección y representación de estos datos sobre el mapa de España a nivel de provincia y municipio, permitiendo su exportación a CSV y JSON para su uso en procesos de minería de datos.',
    ],
    tags: ['Python', 'Pandas', 'Flask', 'Mongodb', 'Minería de datos'],
  },
];

export default {
  es: projectsES,
  en: projectsEN,
};
