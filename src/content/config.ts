import { experienceSchema, projectsSchema, skillsSchema } from './_schemas';
import { defineCollection } from 'astro:content';

const experienceCollection = defineCollection({
  type: 'content',
  schema: experienceSchema
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: projectsSchema
});

const skillsCollection = defineCollection({
  type: 'content',
  schema: skillsSchema
});

export const collections = {
  experience: experienceCollection,
  projects: projectsCollection,
  skills: skillsCollection,
};
