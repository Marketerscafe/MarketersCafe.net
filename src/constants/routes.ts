export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SOLUTIONS: '/solutions',
  TBR_FRAMEWORK: '/tbr-framework',
  METHODOLOGIES: '/methodologies',
  CONTACT: '/contact',
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];
