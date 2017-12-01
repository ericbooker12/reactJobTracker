import React from 'react';
import JobListItem from './job_list_item';

const JobList = function(props) {
	console.log(props)
	const jobItems = props.jobs.map((job) => {
		return <JobListItem key={job.id} job={job}/>
	})
	let i = 0;

	return (
		<div className='col-md-12 list-group'>
			<table>
			<thead>
				<tr>
					<th className="row-header">Job Title</th>
					<th className="row-header">Company</th>
					<th className="row-header">Date applied</th>
					<th className="row-header">Resume sent?</th>
					<th className="row-header">Cover letter sent?</th>
				</tr>
			</thead>
			<tbody>

			{props.jobs.map(function(job){
				{i++;}
				return (
					<tr key={job.id} className="job-list_item">
						<td>{i}.</td>
						<td>{job.title}</td>
						<td>{job.company}</td>
						<td>{job.date_applied}</td>
						<td>{job.resume_sent ? 'Yes' : 'No'}</td>
						<td>{job.cover_letter_sent ? 'Yes' : 'No'}</td>
					</tr>
				)
			})}
			</tbody>
		</table>
		</div>
	);
}

export default JobList;