import { AnyAction, CombinedState, combineReducers } from "@reduxjs/toolkit";

import searchInfo from "./searchInfo";

const reducer = combineReducers({
  searchInfo: searchInfo.reducer,
});
// const reducer = (
//   state:
//     | CombinedState<{
//         searchInfo: {
//           date: string;
//           market: string;
//           company: string;
//           product: string;
//         };
//       }>
//     | undefined,
//   action: AnyAction
// ) => {
//   return combineReducers({
//     searchInfo,
//   })(state, action);
// };

export default reducer;
