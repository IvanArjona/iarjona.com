import React from 'react';

export interface INavigationItem {
  name: string
  href: string
}

export interface INavigation extends Array<INavigationItem>{ }

export interface IExperienceItem {
  title: string
  description: string,
  company: string,
  website: string,
  from: string,
  to?: string,
  logo: string,
}

export interface ISkillItem {
  name: string,
  Icon: React.ComponentClass<any>
}

export interface ISkillGroup {
  title: string
  skills: ISkillItem[]
}

export interface ISocialItem {
  Icon: React.ComponentClass<any>,
  title: string,
  href: string
}

export interface IProjectItem {
  name: string,
  description: string[],
  image: string,
  github?: string,
  link?: string,
  tags: string[],
}
