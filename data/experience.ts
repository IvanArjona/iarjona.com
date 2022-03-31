import { IExperienceItem } from '../types/index';

const softeca = {
  company: 'QDQ media',
  from: '2020-03-01',
  website: 'https://www.qdqmedia.com/',
  logo: '/images/experience/qdqmedia.webp',
};

const qdqMedia = {
  company: 'Softeca',
  from: '2019-01-01',
  to: '2020-01-31',
  website: 'http://www.softeca.es/',
  logo: '/images/experience/softeca.svg',
};

const ubu = {
  website: 'https://www.ubu.es/',
  logo: '/images/experience/ubu.png',
};

const ubuMaster = {
  from: '2018-09-01',
  to: '2019-06-01',
  ...ubu,
};

const ubuDegree = {
  from: '2014-09-01',
  to: '2018-06-01',
  ...ubu,
};

const experienceES: IExperienceItem[] = [
  {
    title: 'Full Stack Software Engineer',
    description: '',
    ...softeca,
  },
  {
    title: 'Full Stack Software Engineer',
    description: '',
    ...qdqMedia,
  },
  {
    title: 'Máster Universitario en Inteligencia de Negocio y Big Data en Entornos Seguros',
    company: 'Universidad de Burgos',
    description: '',
    ...ubuMaster,
  },
  {
    title: 'Grado en Ingeniería Informática',
    company: 'Universidad de Burgos',
    description: '',
    ...ubuDegree,
  },
];

const experienceEN: IExperienceItem[] = [
  {
    title: 'Full Stack Software Engineer',
    description: '',
    ...softeca,
  },
  {
    title: 'Full Stack Software Engineer',
    description: '',
    ...qdqMedia,
  },
  {
    title: 'Business Intelligence and Big Data in Cyber-Secure Environments',
    company: 'University of Burgos',
    description: '',
    ...ubuMaster,
  },
  {
    title: 'Degree in Computer Engineering',
    company: 'Universidad de Burgos',
    description: '',
    ...ubuDegree,
  },
];

export default {
  es: experienceES,
  en: experienceEN,
};
