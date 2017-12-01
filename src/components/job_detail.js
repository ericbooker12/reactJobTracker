import React from 'react';

const JobDetail = (props) => {

	if(!props.job) {
		return <div>...Loading</div>
	}

	return(
		<div className='job-detail col-md-6' >
			<div className='embed-responsive embed-responsive-16by9'>

			</div>
			<div className='details'>
				<div><h5>Position: </h5>{props.job.title}</div>
				<div><h5>Company: </h5>{props.job.company}</div>
			</div>
		</div>
	)
};

export default JobDetail;