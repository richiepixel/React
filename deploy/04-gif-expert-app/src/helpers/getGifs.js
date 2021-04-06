export const getGifs = async (category) => {
  const catEncode = encodeURI(category);
  const url = `https://api.giphy.com/v1/gifs/search?q=${catEncode}&limit=10&api_key=k2NcfwazWMwi3WgWRl2oxOQqDPDmAv58`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
