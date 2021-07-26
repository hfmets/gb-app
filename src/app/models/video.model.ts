export interface Video {
  name: string;
  low_url: string;
  high_url: string;
  hd_url: string;
  id: Number;
  image: {
    medium_url: string;
  };
}

export interface Show {
  id: Number;
  title: string;
  image: {
    small_url: string;
  }
}

export interface UserAuth {
  status: string;
  regToken: string;
}
