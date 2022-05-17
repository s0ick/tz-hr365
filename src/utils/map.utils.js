export const formatData = place => {
  const longitude = place[0].center[0];
  const latitude = place[0].center[1];
  const id = place[0].id;

  return {longitude, latitude, id};
};
