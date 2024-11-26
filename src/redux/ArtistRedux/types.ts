export type ArtistState = {
  loading: boolean,
  topAlbumData: TopAlbums | null,
  currentPage: number,
  error: Error | null
};

export type Image = {
  '#text': string;
  size: 'small' | 'medium' | 'large' | 'extralarge';
};

export type Artist = {
  name: string;
  mbid: string;
  url: string;
};

export type Album = {
  name: string;
  playcount: number;
  mbid: string;
  url: string;
  artist: Artist;
  image: Image[];
};

export type TopAlbumsAttr = {
  artist: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
};

export type TopAlbums = {
  album: Album[];
  '@attr': TopAlbumsAttr;
};

