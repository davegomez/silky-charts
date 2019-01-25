export default element => {
  if (element.type === 'svg') {
    return {
      parentElement: {},
    };
  }
};
