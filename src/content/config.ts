import { experienceSchema, projectsSchema, skillsSchema } from './_schemas';
import { defineCollection } from 'astro:content';

const experience = defineCollection({ schema: experienceSchema });
const projects = defineCollection({ schema: projectsSchema });
const skills = defineCollection({ schema: skillsSchema });

export const collections = {
  experience: experience,
  projects: projects,
  skills: skills,
};
