export const getGifs = async (category) => {
  //console.log(category);
  //A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K
  const url = `http://api.giphy.com/v1/gifs/search?api_key=biZpTaJhj5YsOHN7Arrs9Wz9GNWM959q&q=${encodeURI(
    //const url = `http://api.giphy.com/v1/gifs/search?api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K&q=${encodeURI(  
    category
  )}&limit=12`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    let avatar = "";
    if (img.user != undefined) {
        if(img.user.avatar_url != undefined){
            avatar = img.user.avatar_url;
        }
    }
    console.log('Avatar',avatar);
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
      avatar: avatar,
      fecha: img.import_datetime,
    };
  });
  return gifs;
};
