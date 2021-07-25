import React from 'react';
import './ALLCSS.css';
function TableHeader()
{
	return(
		<table style={{backgroundColor:"#d9d9d9"}}>
		<tr>
		<th>CourseNumber</th>
		<th>Branch</th>
		<th>Year</th>
		<th>File</th>
		<th>Fetch Data</th>
		</tr>
		</table>
		);
}

export default TableHeader;