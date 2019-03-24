import { NavigationActions } from 'react-navigation'

export function navigationHelper() {
    return {
        resetTo: function (navigate, screen) {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({routeName: screen})
              ]
            })
            navigate.dispatch(resetAction)
          }
    }
}