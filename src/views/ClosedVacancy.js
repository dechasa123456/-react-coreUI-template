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

  const fields = ['positions','vacancy_type', 'employee_type', 'experience','deadline']
class ClosedVacancy extends Component {
  state = {
    dataRows:[]
  }
    constructor(props) {
        super(props);
    }
    componentWillMount=()=>{
      try {
     axios.get('/closed_vacancy').then(res=>{
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
                  All <span style={{color:"red"}}>closed</span> vacancies
                
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
                  scopedSlots = {{
                  'deadline':
                    (item)=>(
                      <td>
                          {item.deadline.split('T05:00:00.000Z')[0]}
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
 
export default ClosedVacancy;