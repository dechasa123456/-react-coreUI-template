import React,{Component} from 'react';


import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CInput,
    CLabel,
    CForm,
    CFormGroup,
    CRow,
    CSelect
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
  import axios from 'axios';
  import Swal from 'sweetalert2'
  import Select from 'react-select';

  // summernote plugins START
  import ReactSummernote from 'react-summernote';
  import 'react-summernote/dist/react-summernote.css'; 
  import 'react-summernote/lang/summernote-ru-RU';
  // summernote plugins END

  class AddVacancy extends Component {
     state={
       editor:null,
       selected:[],
     
     }
 

    constructor(props) {
      super(props);
    }
    handleChange = (event) => {
      let select = [];
      for(let row in event){
        select.push(event[row].value);
      }
      this.state.selected=select;
    }
    saveNewVacancy=(e)=>{
      e.preventDefault();
    const data={
      vacancy_type:this.vacancyType,
      employee_type:this.employeeType,
      duty_station:this.state.selected,
      experience:this.experience,
      position:this.position,
      deadline:this.deadLine,
      status:this.status,
      description:this.state.editor
    }
    try {
      
      axios.post('/save_vacancy',data).then(res=>{
        if(res.data[0].vacancy_id){
          this.handleResponseToast('New vacancy has added successfully!',true);
          document.getElementById("reset-form").reset();

        }
      });
     } catch(err){
      this.handleResponseToast('OOPS! Try again',false);
      }
    }
    onChange=(content)=>{
     this.state.editor=content;
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
      // const [collapsed, setCollapsed] = React.useState(true)
      const options = [
        { value: 'Head office', label: 'Head office' },
        { value: 'Finfinne district', label: 'Finfinne district' },
        { value: 'Asosa district', label: 'Asosa district' },
        { value: 'North district', label: 'North district' },
        { value: 'Adama district', label: 'Adama district' }
      ]
        return (
            <CRow>
            <CCol xs="12">
            <CCard>
            <CCardHeader>
              Add New
              <small> Vacancy</small>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={this.saveNewVacancy.bind(this)} id="reset-form">
              <CRow>
              
              <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="company">Duty station</CLabel>
            <Select required style={{color:"black"}} onChange={this.handleChange}
             defaultValue={[options[1],options[4]]}
             options={options} isMulti  name="colors" 
             className="basic-multi-select"
              classNamePrefix="select">
               
              </Select>
              </CFormGroup>
                </CCol>
                <CCol xs="6">
                <CFormGroup>
                <CLabel htmlFor="vat">Employee Type</CLabel>
                <CSelect style={{color:"black"}} onChange={(e=>this.employeeType=e.target.value)} custom name="ccmonth" id="ccmonth" required>
                      <option value="">Nothing selected</option>
                      <option value="Permanent">Permanent</option>
                      <option value="Contract">Contract</option>
                    </CSelect>
                </CFormGroup>
                  </CCol>
                </CRow>
              <CRow>
              <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="company">Vacancy type</CLabel>
                <CSelect style={{color:"black"}} custom onChange={(e=>this.vacancyType=e.target.value)} name="ccmonth" id="ccmonth" required>
                      <option value="">Nothing selected</option>
                      <option value="External">External</option>
                      <option value="Internal">Internal</option>
                    </CSelect>
              </CFormGroup>
                </CCol>
                <CCol xs="6">
                <CFormGroup>
                <CLabel htmlFor="vat">Experience</CLabel>
                <CInput style={{color:"black"}} onChange={(e=>this.experience=e.target.value)} placeholder="ex: 4 years" required />
                </CFormGroup>
                  </CCol>
                </CRow>
              <CRow>
              <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="company">Position</CLabel>
                <CInput style={{color:"black"}} onChange={(e=>this.position=e.target.value)}  placeholder="ex: Manager II" required />
                
              </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                <CLabel htmlFor="vat">DeadLine</CLabel>
                <CInput type="date" style={{color:"black"}} onChange={(e=>this.deadLine=e.target.value)} id="date-input" name="date-input" placeholder="date"/>
                </CFormGroup>
                  </CCol>
                <CCol xs="4">
                <CFormGroup>
                <CLabel htmlFor="vat">Status</CLabel>
                <CSelect style={{color:"black"}} onChange={(e=>this.status=e.target.value)} custom name="ccmonth" id="ccmonth" required>
                      <option value="">Nothing selected</option>
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                    </CSelect>
                </CFormGroup>
                  </CCol>
                </CRow>
              <CFormGroup>
                <CLabel htmlFor="country">General description about vacancy </CLabel>
                <ReactSummernote
                 value=""
                  onChange={this.onChange}>Requirements to Apply
                    B.Sc. degree in computer science, Information technology, Information system, Software Engineering, Electrical Engineering, Computer Engineering, Management Information System and Business Administration Information’s Systems with CGPA of 3.00 and above.
                    The applicants must have desirable knowledge, behaviors/right attitudes, and other attributes
                    he applicants must have proficiency in Afaan Oromo, Amharic, English Languages, and knowledge of other local languages in the respective branch areas are also an added advantage.
                    Age of the applicant shall not exceed 27 years (inclusive).
                    Only graduate of 2020 and 2021 G.C.
                  Remuneration: As per the Bank’s salary scale and benefit scheme
                  Terms of employment: Permanent after probationary period
                  Registration Deadline: November 21, 2021
                  Place of Work: Head Office and District Offices</ReactSummernote>
              </CFormGroup>
              <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CForm>
            </CCardBody>
          </CCard>
            </CCol>
          </CRow>
        );
    }
}
 
export default AddVacancy;