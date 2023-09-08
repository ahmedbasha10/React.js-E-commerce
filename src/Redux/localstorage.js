// This function is to save any state we send at localstorage
export const saveState = (state, stateName) => {
  console.log(stateName + " is saving... " + state);
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateName, serializedState); // Key equals to stateName that we sent
  } catch (err) {
    console.log(err);
  }
};

// load state from local storage with the key
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
