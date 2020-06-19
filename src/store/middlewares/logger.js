const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.time("Time to complete transaction");
  console.log("Current state: ", store.getState());
  console.log("Action dispatched: ", action);
  const response = next(action);
  console.log("Updated state: ", store.getState());
  console.timeEnd("Time to complete transaction");
  console.groupEnd();
  return response;
};

export default logger;
