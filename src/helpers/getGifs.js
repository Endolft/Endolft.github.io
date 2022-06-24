
export const getGift = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${ encodeURIComponent(category) }&limit=12&api_key=DNak3E3rlQESAmAbVx5hJvjvrOTdSEIY`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,

        url: img.images.downsized_medium.url,
      };
    });

    return gifs
  };





