const createSlug = (title, posts) => {
  return title.toLowerCase().replace(/ /g, '-');
};

module.exports = { createSlug };
