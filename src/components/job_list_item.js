import React from 'react';

const JobListItem = (props) => {
	const onJobSelect = props.onJobSelect;
	const job = props.job;
	const jobNum = props.jobNum;
	const date = new Date(props.job.date_applied)

	return (
		<tr onClick={(event) => onJobSelect(job)} className="job-list-item">
			<td>{jobNum}.</td>
			<td>{job.title}</td>
			<td>{job.company}</td>
			<td>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</td>
		</tr>
	)
}

export default JobListItem;