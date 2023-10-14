import { z } from 'astro:content';

export const experienceSchema = ({ image }: {image: () => z.ZodType}) => z.object({
  company: z.string(),
  title: z.string(),
  fromDate: z.date(),
  toDate: z.date().optional(),
  website: z.string().url(),
  logo: image(),
});

export const projectsSchema = ({ image }: {image: () => z.ZodType}) => z.object({
  name: z.string(),
  github: z.string().url(),
  link: z.string().url().optional(),
  linkText: z.string().optional(),
  image: image(),
  width: z.number(),
  height: z.number(),
  tags: z.array(z.string()),
});

export const skillsSchema = z.object({
  name: z.string(),
  skills: z.array(
    z.object({
      name: z.string(),
      pack: z.string(),
      icon: z.string(),
    })
  ),
});
