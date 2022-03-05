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
        Icon: PythonIcon,
      },
      {
        name: 'Django',
        Icon: DjangoIcon,
      },
      {
        name: 'php',
        Icon: PHPIcon,
      },
      {
        name: 'Laravel',
        Icon: LaravelIcon,
      },
      {
        name: 'NodeJS',
        Icon: NodeJSIcon,
      },
      {
        name: 'ExpressJS',
        Icon: ExpressJSIcon,
      },
      {
        name: 'RabbitMQ',
        Icon: RabbitMQIcon,
      },
      {
        name: 'Fast API',
        Icon: FastAPIIcon,
      },
      {
        name: 'Flask',
        Icon: FlaskIcon,
      },
      {
        name: 'Java',
        Icon: JavaIcon,
      },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      {
        name: 'JavaScript',
        Icon: JavascriptIcon,
      },
      {
        name: 'TypeScript',
        Icon: TypescriptIcon,
      },
      {
        name: 'VueJS',
        Icon: VueIcon,
      },
      {
        name: 'Nuxt',
        Icon: NuxtIcon,
      },
      {
        name: 'ReactJS',
        Icon: ReactIcon,
      },
      {
        name: 'Next.js',
        Icon: NextIcon,
      },
      {
        name: 'Angular',
        Icon: AngularIcon,
      },
      {
        name: 'Tailwind CSS',
        Icon: TailwindIcon,
      },
      {
        name: 'Boostrap',
        Icon: BootstrapIcon,
      },
      {
        name: 'Sass',
        Icon: SassIcon,
      },
    ],
  },
  {
    title: 'Ops',
    skills: [
      {
        name: 'Bash',
        Icon: BashIcon,
      },
      {
        name: 'Docker',
        Icon: DockerIcon,
      },
      {
        name: 'Kubernetes',
        Icon: KubernetesIcon,
      },
      {
        name: 'PostgreSQL',
        Icon: PostgreSQLIcon,
      },
      {
        name: 'MySQL',
        Icon: MySQLIcon,
      },
      {
        name: 'Mongo DB',
        Icon: MongoDBIcon,
      },
      {
        name: 'Google Cloud',
        Icon: GoogleCloudIcon,
      },
    ],
  },
];

export default skills;
