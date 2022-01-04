import React,{Component} from 'react';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'  
  import axios from 'axios';
  import { Link } from 'react-router-dom';
  const fields = ['positions','vacancy_type', 'employee_type', 'experience','deadline','total_applied']
class NewVacancy extends Component {
  state = {
    dataRows:[]
  }
    constructor(props) {
        super(props);
    }
    componentWillMount=()=>{
      try {
     axios.get('/new_vacancy').then(res=>{
      this.setState({dataRows:res.data});
     });
     } catch(err) {
     }
     }
    render() { 
        return (
            <CRow>
            <CCol>
              <CCard>
                <CCardHeader>
                  All <span style={{color:"green"}}>new(not closed)</span> vacancies
                  <div style={{float:'right'}}>
                  <Link className="btn btn-info btn-block btn-pill" to="/add_vacancy">Add New</Link>
                  </div>
                </CCardHeader>
                <CCardBody>
                <CDataTable
                  items={this.state.dataRows}
                  fields={fields}
                  hover
                  striped
                  bordered
                  size="sm"
                  itemsPerPage={10}
                  pagination
                  scopedSlots = {
                    {
                  'deadline':
                    (item)=>(
                      <td>
                          {item.deadline.split('T05:00:00.000Z')[0]}
                      </td>
                    )
                },{
                  'total_applied':
                    (item)=>(
                      <td>
                          <Link to={`/appliers/${item.vacancy_id}`}>{item.total_applied}</Link>
                      </td>
                    )
                }
              }
                />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        );
    }
}
 
export default NewVacancy;