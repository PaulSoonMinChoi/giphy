export const API_KEY = '9Kzu0W7BYMv9MwxbZS4ONvfeXT0Cw30O';

export type GifDataEntry = {
  id: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
  title: string;
  user: {
    avatar_url: string;
    is_verified: boolean;
  };
  username: string;
};
