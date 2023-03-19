import ComponentButton from "./ComponentButton";
import styled from "@emotion/styled";

const InputCSS = styled.input`
	width: 100%;
`;

export default function ComponentHeadBar({
  _searchRecipe,
  _setSearchRecipe,
  _addRecipe,
  _setSelectedRecipe,
  _setDelRecipe
}) {

  return (
    <table width="100%">
      <thead>
        <tr>
          <th width="50%"> Search for Recipe</th>
          <th width="10%"></th>
          <th width="40%"> Options </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <InputCSS
              type="text"
              value={ _searchRecipe }
              onChange={ (event) => _setSearchRecipe(event.target.value) }
            />
          </td>
          <td> </td>
          <td>
            <ComponentButton
              _buttonAction={ () => {
                _setSelectedRecipe(null);
                _setDelRecipe(null);
                _addRecipe(null);
                _setSearchRecipe("");
              } }
              _buttonText="Clear"
            />
            <ComponentButton
              _buttonAction={ () => _addRecipe(1) }
              _buttonText="Add Recipe"
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
};