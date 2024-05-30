const createSlug = (title, posts) => {
  let slug = title.toLowerCase().replace(/ /g, '-');
  if (posts.includes(slug)) {
    let count = 1;
    let newSlug = `${slug}-${count}`;
    while (posts.includes(newSlug)) {
      count++;
      newSlug = `${slug}-${count}`;
    }
    return newSlug;
  }
  return slug;
};

module.exports = { createSlug };
