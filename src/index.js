import util from './util/index'
import * as stringFilters from './string/index'
import * as arrayFilters from './array/index'
import * as numberFilters from './number/index'

var Vue2Filters = {
  install(Vue) {
    util.each(stringFilters, function(value, key) {
        Vue.filter(key, value)
    })
    
    util.each(numberFilters, function(value, key) {
        Vue.filter(key, value)
    })

    Vue.mixin({
      methods: {
        limitBy: arrayFilters.limitBy,
        filterBy: arrayFilters.filterBy,
        orderBy: arrayFilters.orderBy
      }
    })
  }
}

export default Vue2Filters;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vue2Filters);
}
