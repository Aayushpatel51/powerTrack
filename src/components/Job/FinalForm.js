import React, {useState} from 'react'
import styled from 'styled-components'
import FormOne from './FormOne'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormTwo from './FormTwo'
import FormThree from './FormThree'
import FormFour from './FormFour'
import FormFive from './FormFive'
import axios from 'axios'



function FinalForm() {

  const [page,setPage] = useState(0);
  const [formData, setFormData] = useState({
      fullName: "",
      dateOfBirth: "",
      presentAddress: "",
      previousAddress: "",
      phoneNumber: 0,
      position: "",
      workTime: "",
      expectedPay: 0,
      dateAvailable: "",
      workFlexibility:false,
      unableToWork:"",
      workOvertime:false,
      workForUsBefore:false,
      yourRelativeWorkForUsBefore:false,
      listNameAndPosition:"",
      meansOfTransportation: false,
      isYourCarStayAtWork:false,
      minimumAge:false,
      extraWork:false,
      accommodation: "",
      highSchool: "",
      college: "",
      other: "",
      highSchoolLocation: "",
      collegeLocation: "",
      otherLocation: "",
      highSchoolDegree: "",
      collegeDegree: "",
      otherDegree: "",
      companyName: "",
      companyPhone: 0,
      nameOfSupervisor: "",
      employmentDuration: "",
      rateOfPay: 0,
      durationDate: "",
      companyAddress: "",
      homeAddressDuringEmployment: "",
      reasonForLeaving: "",
      positionHeld: "",
      canWeContactEmployer: false,
      haveYouConvictedforFelony: false,
      yesDescribe: "",
      AreYouUsCitizens: false,
      notifyPersonName: "",
      notifyPersonPhone: 0,
      notifyPersonRelation: "",
      otherExperiences: "",
      printName: "",
      pT1: false,
      pT2: false,
      pT3: false,
      pT4: false,
      pT5: false,
      pT8: false,
      pT9: false,
      pT10: false,
      pT11: false,
      pT12: false,
  });

  const handleSubmit =  async () => {


    await axios.post('http://localhost:6100/api/v1/job-apply', formData).then((response) => {console.log(response)}).catch((error) => {console.log(error)})
  }

  
  const FormTitle = ["One","Two","Three","Four","Five"];

  const FormDisplay = () =>{
    if(page === 0){
      return <FormOne formData={formData} setFormData={setFormData}/>
    }else if(page === 1){
      return <FormTwo formData={formData} setFormData={setFormData}/>
    }else if(page === 2){
      return <FormThree formData={formData} setFormData={setFormData}/>
    }else if(page === 3){
      return <FormFour formData={formData} setFormData={setFormData}/>
    }else{
      return <FormFive formData={formData} setFormData={setFormData}/>
    }
  }

  return (
    <CollectionForm>
        <FormContainer >
          <Header>
            {page > 0  ? <ArrowBackIcon className="backPage" onClick={()=>{setPage((currPage) => currPage - 1)}}/> : ""} 
            <h1>Power Trac</h1>
          </Header>
          <Body>
            {FormDisplay()}
          </Body>
          <Footer>
            <Button variant="outlined"
              onClick={()=>{
                if(page === 4){
                  console.log(formData)
                }else{
                  setPage((currPage) => currPage + 1)
                }
              }}
            >
              {page === 4 ? "Review" : "Next"}
            </Button>
            {page === 4 ? <Button variant="outlined"  onClick={handleSubmit} >Submit</Button> : ""}
          </Footer>
        </FormContainer>
    </CollectionForm>
  )
}

export default FinalForm

const CollectionForm = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 99vw;
    backdrop-filter: blur(10px);
`
const FormContainer = styled.form`
    width: 90vw;
    height: 80vh;
    max-height: 90vh;
    margin: 60px auto;
    border-radius: 25px;
    background: white;
    position: relative;
`
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e1f2f8;
    border-radius: 25px 25px 0 0;
    height: 100px;
    position: relative;

    h1{
        font-weight: 500;
        word-spacing: 5px;
        letter-spacing: 5px;
        color: #ef4323;
    }
    .backPage {
        position: absolute;
        left: 50px;
        font-size: 30px;
        color: rgb(93, 142, 254);
        cursor: pointer;
    }
`
const Body = styled.div`

`
const Footer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 20px;
    position: absolute;
    Button{
        margin: 0 15px;
        background-color: #ef4323;
        border-color: #ef4323;
        color: #ffffff;
        font-weight: 600;
        padding: 8px 200px;
        border-radius: 30px;

        &:hover{
          background: white;
          border-color: #ef4323;
          color: #ef4323;
        }

      @media (max-width:1050px){
        padding: 8px 100px;
      }
      @media (max-width:500px){
        padding: 8px 65px;
      }
    }
`