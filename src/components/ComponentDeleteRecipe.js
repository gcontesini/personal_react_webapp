export default function ComponentDeleteRecipe({
  _recipe
}) {

  return (
    <div>
      <h3> Recipe Deleted: { _recipe.name } </h3>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>
              { console.log("deleting recipe") }
              { console.log(_recipe.id) }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

// export default ComponentSelectedItem;