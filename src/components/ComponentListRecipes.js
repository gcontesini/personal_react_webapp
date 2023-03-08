import ComponentRecipe from "./ComponentRecipe";

export default function ComponentListRecipes({
  _recipe,
  _searchRecipe,
  _setSelectedItem,
  _setDelRecipe
}) {

  return (
    <table width="100%" >
      <thead>
        <tr>
          <th> Recipe Name </th>
          <th> Type </th>
          <th> Selection </th>
        </tr>
      </thead>
      <tbody>
        { _recipe
          .filter((recipe_) => recipe_.name
            .toLowerCase()
            .includes(_searchRecipe.toLowerCase()))
          .map(recipe_ => (
            <ComponentRecipe
              key={ recipe_.id }
              _recipe={ recipe_ }
              _selectRecipe={ (recipe_) => _setSelectedItem(recipe_) }
              _setDelRecipe={ (recipe_) => _setDelRecipe(recipe_) }
            />
          )) }
      </tbody>
    </table>
  )
};