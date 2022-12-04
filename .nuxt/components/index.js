export const BasicButton = () => import('../..\\components\\basic\\button.vue' /* webpackChunkName: "components/basic-button" */).then(c => wrapFunctional(c.default || c))
export const BasicCard = () => import('../..\\components\\basic\\card.vue' /* webpackChunkName: "components/basic-card" */).then(c => wrapFunctional(c.default || c))
export const BasicHeader = () => import('../..\\components\\basic\\header.vue' /* webpackChunkName: "components/basic-header" */).then(c => wrapFunctional(c.default || c))
export const BasicList = () => import('../..\\components\\basic\\list.vue' /* webpackChunkName: "components/basic-list" */).then(c => wrapFunctional(c.default || c))
export const BasicTitle = () => import('../..\\components\\basic\\title.vue' /* webpackChunkName: "components/basic-title" */).then(c => wrapFunctional(c.default || c))
export const ScrollDown = () => import('../..\\components\\scroll\\down.vue' /* webpackChunkName: "components/scroll-down" */).then(c => wrapFunctional(c.default || c))
export const Carousel = () => import('../..\\components\\carousel\\index.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
