import { ISkillGroup } from '../types/index';
import PythonIcon from '../assets/icons/skills/python.svg';
import DjangoIcon from '../assets/icons/skills/django.svg';
import PHPIcon from '../assets/icons/skills/php.svg';
import DockerIcon from '../assets/icons/skills/docker.svg';
import KubernetesIcon from '../assets/icons/skills/kubernetes.svg';
import LaravelIcon from '../assets/icons/skills/laravel.svg';
import JavascriptIcon from '../assets/icons/skills/javascript.svg';
import TypescriptIcon from '../assets/icons/skills/typescript.svg';
import VueIcon from '../assets/icons/skills/vue.svg';
import ReactIcon from '../assets/icons/skills/react.svg';
import AngularIcon from '../assets/icons/skills/angular.svg';
import SassIcon from '../assets/icons/skills/sass.svg';
import BashIcon from '../assets/icons/skills/bash.svg';
import NodeJSIcon from '../assets/icons/skills/nodejs.svg';
import RabbitMQIcon from '../assets/icons/skills/rabbitmq.svg';
import PostgreSQLIcon from '../assets/icons/skills/postgresql.svg';
import MySQLIcon from '../assets/icons/skills/mysql.svg';
import GoogleCloudIcon from '../assets/icons/skills/google-cloud.svg';
import NuxtIcon from '../assets/icons/skills/nuxt.svg';
import NextIcon from '../assets/icons/skills/nextjs.svg';
import TailwindIcon from '../assets/icons/skills/tailwind.svg';
import BootstrapIcon from '../assets/icons/skills/bootstrap.svg';
import MongoDBIcon from '../assets/icons/skills/mongodb.svg';
import FastAPIIcon from '../assets/icons/skills/fastapi.svg';
import FlaskIcon from '../assets/icons/skills/flask.svg';
import JavaIcon from '../assets/icons/skills/java.svg';
import ExpressJSIcon from '../assets/icons/skills/expressjs.svg';

const skills: ISkillGroup[] = [
  {
    title: 'Backend',
    skills: [
      {
        name: 'Python',
        icon: PythonIcon,
      },
      {
        name: 'Django',
        icon: DjangoIcon,
      },
      {
        name: 'php',
        icon: PHPIcon,
      },
      {
        name: 'Laravel',
        icon: LaravelIcon,
      },
      {
        name: 'NodeJS',
        icon: NodeJSIcon,
      },
      {
        name: 'ExpressJS',
        icon: ExpressJSIcon,
      },
      {
        name: 'RabbitMQ',
        icon: RabbitMQIcon,
      },
      {
        name: 'Fast API',
        icon: FastAPIIcon,
      },
      {
        name: 'Flask',
        icon: FlaskIcon,
      },
      {
        name: 'Java',
        icon: JavaIcon,
      },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      {
        name: 'JavaScript',
        icon: JavascriptIcon,
      },
      {
        name: 'TypeScript',
        icon: TypescriptIcon,
      },
      {
        name: 'VueJS',
        icon: VueIcon,
      },
      {
        name: 'Nuxt',
        icon: NuxtIcon,
      },
      {
        name: 'ReactJS',
        icon: ReactIcon,
      },
      {
        name: 'Next.js',
        icon: NextIcon,
      },
      {
        name: 'Angular',
        icon: AngularIcon,
      },
      {
        name: 'Tailwind CSS',
        icon: TailwindIcon,
      },
      {
        name: 'Boostrap',
        icon: BootstrapIcon,
      },
      {
        name: 'Sass',
        icon: SassIcon,
      },
    ],
  },
  {
    title: 'Ops',
    skills: [
      {
        name: 'Bash',
        icon: BashIcon,
      },
      {
        name: 'Docker',
        icon: DockerIcon,
      },
      {
        name: 'Kubernetes',
        icon: KubernetesIcon,
      },
      {
        name: 'PostgreSQL',
        icon: PostgreSQLIcon,
      },
      {
        name: 'MySQL',
        icon: MySQLIcon,
      },
      {
        name: 'Mongo DB',
        icon: MongoDBIcon,
      },
      {
        name: 'Google Cloud',
        icon: GoogleCloudIcon,
      },
    ],
  },
];

export default skills;
