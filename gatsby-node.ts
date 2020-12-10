exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: '/',
    component: require.resolve(`./src/templates/home/index.tsx`),
    context: {
      slug: '/',
    },
  })
}
