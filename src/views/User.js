import React,{Component} from 'react';
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'  
  import usersData from './users/UsersData'
import { Link } from 'react-router-dom';
  
  const getBadge = status => {
    switch (status) {
      case 'Active': return'success';
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
  const fields = ['vacancy_name','registered', 'role', 'Action']
class SettingLanguage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <CRow>
            <CCol>
              <CCard>
                <CCardHeader>
                  Combined All Table
                  <div style={{float:'right'}}>
                  <Link className="btn btn-info btn-block btn-pill" to="/add_vacancy">Add User</Link>
                  </div>
                </CCardHeader>
                <CCardBody>
                <CDataTable
                  items={usersData}
                  fields={fields}
                  hover
                  striped
                  bordered
                  size="sm"
                  itemsPerPage={10}
                  pagination
                  scopedSlots = {{
                    'Action':
                      (item)=>(
                        <td>
                          <CBadge
                            color={getBadge(item.status)}>
                            {item.status}
                          </CBadge>
                        </td>
                      )
                  }}
                />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        );
    }
}
 
export default SettingLanguage;