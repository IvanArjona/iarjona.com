export interface NavigationItem {
  name: string;
  href: string;
}

export type Navigation = Array<NavigationItem>;

export interface SocialItem {
  title: string;
  pack: string;
  icon: string;
  href: string;
}

export interface Image {
  src: string;
  width: number;
  height: number;
  format: string;
  (): Promise<ImageDefault>;
}

interface ImageDefault {
  default: Image;
}

export interface Images {
  [name: string]: Image;
}
