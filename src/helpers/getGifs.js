export const getGifs = async (category) => {
    console.log(category);
    const url =
      `http://api.giphy.com/v1/gifs/search?api_key=biZpTaJhj5YsOHN7Arrs9Wz9GNWM959q&q=${ encodeURI(category) }&limit=12`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    return(gifs);
  };