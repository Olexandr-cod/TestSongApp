export type ArtistState = {
  loading: boolean,
  topAlbumData: TopAlbums | null,
  currentPage: number,
  artistOneData: ArtistInfo | null
  albumTracksData: TrackType[]
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

//For Artist Info
export type ArtistInfo = {
  name: string;
  mbid: string;
  url: string;
  image: Image[];
  streamable: string;
  ontour: string;
  stats: {
    listeners: string;
    playcount: string;
  };
  similar: {
    artist: SimilarArtist[];
  };
  tags: {
    tag: Tag[];
  };
  bio: {
    links: {
      link: Link;
    };
    published: string;
    summary: string;
  };
};

export type SimilarArtist = {
  name: string;
  url: string;
  image: Image[];
};

export type Tag = {
  name: string;
  url: string;
};

export type Link = {
  '#text': string;
  rel: string;
  href: string;
};

//For tracks album
export type TrackType = {
  streamable: {
    fulltrack: string;
    '#text': string;
  };
  duration: number;
  url: string;
  name: string;
  '@attr': {
    rank: number;
  };
  artist: {
    url: string;
    name: string;
    mbid: string;
  };
}

