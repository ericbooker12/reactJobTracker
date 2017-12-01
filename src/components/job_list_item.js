import React from 'react';

const JobListItem = function(props) {
	const job = props.job;
	return (
		<div>
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
		</table>

		<div className='list-group-item'>
			<div className='job-list media'>
				<div className='media-left'></div>
				<div className='media-body'>
					<div className='media-heading'>{job.id}. {job.title} - {job.company}</div>
				</div>
			</div>
		</div>
		</div>
	)
}

export default JobListItem;