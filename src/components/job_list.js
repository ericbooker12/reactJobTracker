import React, { Component } from 'react';
import JobListItem from './job_list_item';
const JobList = (props) => {




		let i = 0;
		const jobItems = props.jobs.map((job) => {
			i++;
			return (
				<JobListItem
					onJobSelect={props.onJobSelect}
					key={job.id}
					job={job}
					jobNum={i} />
			)
		})


		return (
			<div className='col-md-6 list-group job-list'>
				<table className='table xtable-stripedx job-table'>
				<thead>
					<tr>
						<th className="row-header"></th>
						<th className="row-header">Job Title</th>
						<th className="row-header">Company</th>
						<th className="row-header">Date applied</th>
					</tr>
				</thead>

					<tbody>
						{jobItems}
					</tbody>

			</table>
			</div>
		);

}

export default JobList;