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
  icon: any
}

export interface ISkillGroup {
  title: string
  skills: ISkillItem[]
}
