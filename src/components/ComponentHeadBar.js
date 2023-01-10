import ComponentButton from "./ComponentButton";
import styled from "@emotion/styled";

const InputCSS = styled.input`
	width: 100%;
`;

export default function ComponentHeadBar ({
  _state,
  _setState,
  _addRecipe,
  _setSelectedItem
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
              value = { _state }
              onChange = { ( _state ) => _setState( _state.target.value ) }
            />
          </td>
          <td> </td>
          <td>
            <ComponentButton
              _buttonAction={ () => {
                _setSelectedItem( null );
                _addRecipe( null );
                _setState( "" );
              }}
              _buttonText="Clear"
            />
            <ComponentButton
              _buttonAction={ () => _addRecipe( 1 ) }
              _buttonText="Add Recipe"
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
};