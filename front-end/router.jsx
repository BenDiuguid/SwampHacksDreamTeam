// Reaktor API:  https://github.com/kadirahq/meteor-reaktor
// Router API:   https://github.com/meteorhacks/flow-router

Reaktor.init(
  <Router>
    <Route path="/" content={Home} layout={MainLayout} />
    <Route path="/about" content={About} layout={MainLayout} />
    <Route path="/hunt/:huntId" content={Hunt} layout={MainLayout} />
    <Route path="/create" content={Create} layout={MainLayout} />
    <Route path="/join" content={Join} layout={MainLayout} />
  </Router>
);

// Reaktor doesn't have a notFound component yet
FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { content: <NotFound /> });
  }
};
