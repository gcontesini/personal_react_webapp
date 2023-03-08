export default function ComponentDeleteItem({
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

// export default ComponentSelectedItem;