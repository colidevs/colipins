import {createApi} from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

export const api = {
  photos: {
    list: async (pageIdx: number = 1, items = 10) => {
      const {response} = await unsplash.photos.list({
        page: pageIdx,
        perPage: items,
      });

      if (!response) {
        return [];
      }

      return response?.results;
    },
  },
};
