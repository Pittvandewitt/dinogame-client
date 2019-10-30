export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('dinoGameState', serializedState);
  } catch (error) {
    console.error('Save state in localStorage error:', error)
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('dinoGameState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};