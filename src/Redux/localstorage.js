export const saveState = (state, stateName) => {
  console.log(stateName + " is saving... " + state);
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateName, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const loadState = (stateName) => {
  console.log(stateName + " is loading...");
  try {
    const serializedState = localStorage.getItem(stateName);
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
