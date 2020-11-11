export const state = () => ({
  showMobileNav: false,
  productsItems: []
})

// const sortByTitle = (a, b) => {
//   const textA = a.attributes.title.toUpperCase()
//   const textB = b.attributes.title.toUpperCase()
//   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
// }

const sortByDate = (a, b) => {
  return new Date(b.date) - new Date(a.date)
}

export const mutations = {
  setProductsItems (state, list) {
    // list.sort(sortByDate)
    list.reverse(sortByDate)
    state.productsItems = list
  },
  setShowMobileNav (state, value) {
    state.showMobileNav = !!(value)
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const products = await require.context('~/content/products/', false, /\.md$/)
    const productsItems = products.keys().map((key) => {
      const res = products(key)
      res.slug = key.slice(2, -3)
      res.route = '/product/' + res.slug
      return res
    })
    await commit('setProductsItems', productsItems)
  }
}

export const getters = {
}
