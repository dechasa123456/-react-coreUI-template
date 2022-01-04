import React,{Component} from 'react';
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CFormGroup,
    CInput,
    CLabel,
    CSelect,
    CForm,
    CButton,
    CRow
  } from '@coreui/react'  
  import axios from 'axios';
  import Swal from 'sweetalert2'
  import CIcon from '@coreui/icons-react'
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
  const fields = ['employee_name','employee_phone','field_study', 'experience','educ_level','gpa','action']
class Appliers extends Component {
    state = {
        info:false,
        status:'Active',
        dataRows:[]
    }
    constructor(props) {
        super(props);
      
    }
    componentWillMount=()=>{
      const id = this.props.match.params.id;
        try {
    axios.get('/applied_seeker_vacancy/'+id).then(res=>{
      console.log('test',res.data);
     this.setState({dataRows:res.data});
    });
    } catch(err) {
      
    }
    }
    handleSave=(e)=>{
        e.preventDefault();
        const data={
            setting_name:this.settingName,
            status:this.state.status,
            type:"Language"
        };

        try {
      
            axios.post('/save_settings',data).then(res=>{
                if(res.data[0].setting_id){
                  this.handleResponseToast('New language has added successfully!',true);
                  document.getElementById("reset-form").reset();
                  this.setState({info:false});
                  this.componentWillMount();
                }
              });
           } catch(err){
            this.handleResponseToast('OOPS! Try again',false);
            }
          }

        
          handleResponseToast=(msg,status)=>{
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 4000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            if (status) {
                Toast.fire({
              icon: 'success',
              title: msg
            })
          } else {
            Toast.fire({
              icon: 'error',
              title: msg
            })
          }
           }
    render() { 
        return (
            <>
            <CRow>
            <CCol>
              <CCard>
                <CCardHeader>
                 Job seekers informations 
                  
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
                    'setting_status':
                      (item)=>(
                        <td>
                          <CBadge
                            color={getBadge(item.setting_status)}>
                            {item.setting_status}
                          </CBadge>
                        </td>
                      )
                  },{
                    'action':
                      (item)=>(
                        <td>
                          <Link ><CIcon name="cil-user" style={{color:"green",fontSize:"20px"}} title="View seeker information"/></Link>
                        </td>
                      )
                  }
                }
                />
                </CCardBody>
              </CCard>
            </CCol>
           
          </CRow>
           <CModal 
           show={this.state.info} 
           onClose={() => this.setState({info:false})}
           color="info"
           >
               <CForm onSubmit={this.handleSave.bind(this)} id="reset-form">
           <CModalHeader closeButton>
             <CModalTitle>New languages</CModalTitle>
           </CModalHeader>
           <CModalBody>
           <CFormGroup>
             <CLabel htmlFor="company">Language</CLabel>
             <CInput id="company" onChange={(e=>this.settingName=e.target.value)} style={{color:"black"}} placeholder="Enter language name" required/>
           </CFormGroup>
           <CFormGroup>
             <CLabel htmlFor="vat">Status</CLabel>
             <CSelect style={{color:"black"}} custom onChange={(e=>this.setState({status:e.target.value}))} name="ccmonth" id="ccmonth" required>
                   <option value="Active">Active</option>
                   <option value="Pending">Pending</option>
                 </CSelect>
           </CFormGroup>
          
           </CModalBody>
           <CModalFooter>
             <CButton color="secondary" onClick={() => this.setState({info:false})}>Cancel</CButton>
             <CButton color="info" type="submit">Save</CButton>
           </CModalFooter>
           </CForm>
         </CModal>
         </>
        );
    }
}
 
export default Appliers;