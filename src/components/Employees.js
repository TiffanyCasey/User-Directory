import React from 'react'

function Employees(props) {
    return ( 
        <tbody>
            <tr>
                <td id="row">{ props.first_name }</td>  
                <td id="row">{ props.last_name }</td>
                <td id="row">{ props.job_title }</td>
                <td id="row"> { props.email }</td>
            </tr>
        </tbody>
    )
}
export default Employees