import { createModel } from '@rematch/core'
import { RootModel } from './index'

type stateProps = {
  count: number
}

export const settings = createModel<RootModel>()({
  state: {
    count: 0
  } as stateProps,

  reducers: {
    increment (state, payload: { count: number }) {
      state.count += payload.count

      return {
        ...state
      }
    }
  },

  effects: (dispatch) => ({
    async incrementAsync (payload: { count: number }) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      dispatch.settings.increment(payload)
    }
  })
})