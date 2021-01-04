import routerHistory from './history'
import writeHistory from './writeHistory'

export {
    routerHistory,
    writeHistory
}

export default {
    install (appOrVue, { router, ignoreRoutesWithSameName } = {}) {
        if (!router) {
            console.error('VueRouterBackButton: router is required on install')
            return
        }

        appOrVue.use(routerHistory, { ignoreRoutesWithSameName })
        router.afterEach(writeHistory)
    },
}
