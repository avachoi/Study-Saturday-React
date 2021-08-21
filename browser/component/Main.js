import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const contacts = [
	{ id: 1, name: "ava" },
	{ id: 2, name: "tom" },
];

class Main extends Component {
	constructor() {
		super();
		this.state = { list: contacts };
	}

	async componentDidMount() {
		const response = await axios.get("/student");
		const students = response.data;
		console.log("student", students);
		this.setState({ list: students });
	}

	render() {
		return (
			<div id="container">
				<table>
					<tbody>
						<tr>
							<th>Name</th>
						</tr>

						{this.state.list.map((student) => {
							return (
								<tr key={student.id}>
									<td>{student.fullName}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Main;
