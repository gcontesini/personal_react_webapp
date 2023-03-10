import ComponentRecipe from "./ComponentRecipe";

export default function ComponentListRecipes ({
  _recipe,
  _state,
  _setSelectedItem
})  {
  
  const recipe = Object.values(_recipe)

  return(
    <table width="100%" >
      <thead>
        <tr>
          <th> Recipe Name </th>
          <th> Type </th>
          <th> Selection </th>
        </tr>
      </thead>
      <tbody>
        {_recipe
          .filter(( recipe_ ) => recipe_.name
          .toLowerCase()
          .includes( _state.toLowerCase() ))
          .map( recipe_ => (
            <ComponentRecipe
              key={ recipe_.id }
              _recipe={ recipe_ }
              _selectRecipe={ ( recipe_ ) => _setSelectedItem( recipe_ ) }
            />
        ))}
      </tbody>
    </table>
  )
};