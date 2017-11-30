import React from 'react';

const JobListItem = function(props) {
	const job = props.job;
	console.log(job);
	return (
		<div className='list-group-item'>
			<div className='job-list media'>
				<div className='media-left'>

				</div>
				<div className='media-body'>
					<div className='media-heading'>{job.id}. {job.title} - {job.company}</div>
				</div>
			</div>

		</div>
	)
}

export default JobListItem;