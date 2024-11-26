export const DASHBOARD_ROUTES = {
  TOP_ALBUMS_ARTIST_SCREEN: 'Top_Album_Artist_Screen',
  ARTIST_BIO_SCREEN: 'Artist_Bio_Screen',
} as const;

export type valueof<T> = T[keyof T];

export type RootDashboard = valueof<typeof DASHBOARD_ROUTES>;

export type RootRoutes = RootDashboard;

export type AllRoutes = RootRoutes;
