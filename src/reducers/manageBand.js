export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log(action)
      return { bands: state.bands.concat(action.payload.band) };

    default:
      return state;
  }
};
