import React from 'react';
import JobNote from './job_note'

const JobDetail = (props) => {
	let job = null;
	let notes = null;
	let dateApplied = Date.now();

	if(!props.job) {
		return <div>...Loading</div>
	} else {
			notes = props.job.notes;
			job = props.job;
			dateApplied = new Date(props.job.date_applied)
	}

	function coverLetter(job){
		if(job.cover_letter_sent){
			return 'You submitted a cover letter.'
		} else {
			return 'You did not submit a cover letter'
		}
	}

	console.log(dateApplied)

	return(
		<div className='job-detail col-md-6' >
			<p>Job Title: <strong>{job.title.toUpperCase()}</strong></p>
			<p>Company: <strong>{job.company.toUpperCase()}</strong></p>
			<p>You applied for this job on
				<strong> {dateApplied.getMonth() + 1}/{dateApplied.getDate()}/{dateApplied.getFullYear()}</strong>
			</p>
			<p>{coverLetter(job)}</p>

			<div className='note-content'>

				<h3 id="notes-title"><strong>Job Notes:</strong></h3>

				{notes.map(function(note, i){
					return (
						<div key={note.id} className='note'>
							<p>{note.content}</p>
							<hr id='end-of-note'/>
						</div>
					)
				})}
			</div>
		</div>
	)
};

export default JobDetail;