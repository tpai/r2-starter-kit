export function fixPosts(data) {
  return data.map((obj) => {
    const id = parseInt(obj.id, 10);
    return {
      id,
      title: obj.title,
      description: obj.body,
      url: `/posts/${id}`,
      image: getSmallImage(id),
      placeholder: getTinyImage(id),
    };
  });
}

export function getLargeImage(id) {
  return `https://picsum.photos/1200/720?image=${id}`;
}

export function getSmallImage(id) {
  return `https://picsum.photos/320/180?image=${id}`;
}

export function getTinyImage(id) {
  return `https://picsum.photos/32/18?image=${id}`;
}
