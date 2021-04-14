const initial_store = {
  video: {},
};

function reducer(video = initial_store, action) {
  switch (action.type) {
  case 'SELECTED_VIDEO':
    return action.video;
  default:
      return video;
  }
}

export default reducer;