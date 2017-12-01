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

			{props.jobs.map(function(job){
				{i++;}
				return (
					<tr key={job.id} className="job-list-item">
						<td>{i}.</td>
						<td>{job.title}</td>
						<td>{job.company}</td>
						<td>{job.date_applied}</td>
					</tr>
				)
			})}
			</tbody>
		</table>
		</div>