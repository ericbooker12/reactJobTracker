import React from 'react';
import JobListItem from './job_list_item';

const JobList = function(props) {
	const jobItems = props.jobs.map((job) => {
		return <JobListItem key={job.id} job={job}/>
	})

	return (
		<div className='col-md-4 list-group'>
			{jobItems}
		</div>
	);
}

export default JobList;