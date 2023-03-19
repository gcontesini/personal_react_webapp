import ComponentRecipe from "./ComponentRecipe";

export default function ComponentListRecipes({
  _recipe,
  _searchRecipe,
  _setSelectedRecipe,
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
          .filter((event) => event.name
            .toLowerCase()
            .includes(_searchRecipe.toLowerCase()))
          .map((event) => (
            <ComponentRecipe
              key={ event.id }
              _recipe={ event }
              _setSelectedRecipe={ (event) => _setSelectedRecipe(event) }
              _setDelRecipe={ (event) => _setDelRecipe(event) }
            />
          )) }
      </tbody>
    </table>
  )
};