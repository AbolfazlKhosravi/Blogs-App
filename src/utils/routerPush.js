const routerPush = ( router ) => {
  return router.push(
    {
      pathname: router.pathname,
      query: router.query,
    },
    undefined,
    { scroll: false }
  );
};

export default routerPush;
