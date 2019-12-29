import { pipe, filter, includes, values, concat } from "ramda";

import selectInventory from "../selectors/select-inventory";
import selectCategories from "../../categories/selectors/select-categories";
import selectCurrentContext from "../../../sceneState/selectors/select-current-context";
import { CONTEXT_TYPE } from "../../../../actions/inventory";

export default state => {
  const { categoriesIds = [] } = selectInventory(state);
  const categories = selectCategories(state);
  const context = selectCurrentContext(state);

  const mandatoryCategoriesIds =
    context === CONTEXT_TYPE.mainInventory ? ["all", "equipped"] : ["all"];

  const categoriesMandatory = pipe(
    values,
    filter(cat => includes(cat.id, mandatoryCategoriesIds))
  )(categories);

  return pipe(
    values,
    filter(cat => includes(cat.id, categoriesIds)),
    concat(categoriesMandatory)
  )(categories);
};
