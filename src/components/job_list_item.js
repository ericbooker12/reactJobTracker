import React from 'react';

const JobListItem = (props) => {
	const onJobSelect = props.onJobSelect;
	const job = props.job;
	const jobNum = props.jobNum;

	return (
		<tr onClick={(event) => onJobSelect(job)} className="job-list-item">
			<td>{jobNum}.</td>
			<td>{job.title}</td>
			<td>{job.company}</td>
			<td>{job.date_applied}</td>
		</tr>
	)
}

export default JobListItem;