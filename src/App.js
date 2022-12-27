import React from "react";
import './App.css';
import Recipe from "./recipe-book.json";

function App() {

	return ( 
		<div 
			style={{
				margin: "auto",
				width: 800,
				paddingTop: "1rem",
			}}
		>
			<h1
				className="title"
			>
				Main Title 
			</h1>
			<table 
				width="100%"
			>
				<thead>
					<tr>
						<th> Recipe </th>
						<th> Type </th>
						{/* <th>Summary</th> */}
						<th width="300%">  Ingredients </th>
						<th width="200%"> Link </th>
					</tr>
				</thead>
				<tbody>
					{Recipe.map(Recipe => (
						<tr key={Recipe.id}>
							<td>{Recipe.name}</td>
							<td>{Recipe.type}</td>
							{/* <td className="summary">
							 <td>
								{Recipe.summary.map( summary => (
									<tr>
										<td>items.prep-time</td>
										<td>items.cook-time</td>
										<td>items.additional-time</td>
										<td>items.total-time</td>
									</tr>
								))} 
							</td> */}
							<td> {Recipe.ingredients.map((ingredients) => 
								// generate automatic keys
								<li >{ingredients}</li>
								)}
							</td>
							<td>
								<a 
									href={Recipe.link}
									target="_blank">
									Full Recipe
								</a>
							</td>
					</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
