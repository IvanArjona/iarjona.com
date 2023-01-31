import config from '~/config';

export function getCanonical(path = ''): string | URL {
  return new URL(path, config.origin);
}
