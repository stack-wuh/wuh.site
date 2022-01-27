import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const music = createModel<RootModel>()({
  state: {
    current: {},
    index: 0
  },
  reducers: {},
  effects: (dispatch) => ({})
})