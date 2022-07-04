import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import ToggleButton from "react-toggle-button";


function FormFour({formData,setFormData}) {


  return (
    <ApplicationForm>
        <FormTitle>
            <h1>Application for Employment</h1>
            <p>Please complete all requested information except Signature</p>
        </FormTitle>
        <DateDiv>
            <p>Please list your last three jobs, beginning with your present or last job</p>
        </DateDiv>
            <MainForm >
              <FiledForm >
                  <div className="right-filed">
                      <InputLabel htmlFor="input-with-icon-adornment">
                        Company Name
                      </InputLabel>
                      <TextField id="standard-basic24" variant="standard" value={formData.companyName} onChange={(event) => setFormData({...formData, companyName: event.target.value})}/>
                  </div>
                  <div className="center-filed">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Phone
                    </InputLabel>
                    <TextField id="standard-basic23" variant="standard" value={formData.companyPhone} onChange={(event) => setFormData({...formData, companyPhone: event.target.value})}/>
                  </div>
                  <div className="left-filed">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Name of Supervisor
                    </InputLabel>
                    <TextField id="standard-basic22" variant="standard" value={formData.nameOfSupervisor} onChange={(event) => setFormData({...formData, nameOfSupervisor: event.target.value})} />
                  </div>
              </FiledForm>
              <FiledForm>
                  <div className="right-filed">
                      <InputLabel htmlFor="input-with-icon-adornment">
                        Employment Year
                      </InputLabel>
                      <TextField id="standard-basic21" variant="standard" value={formData.employmentDuration} onChange={(event) => setFormData({...formData, employmentDuration: event.target.value})}/>
                  </div>
                  <div className="center-filed">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Rate of Pay
                    </InputLabel>
                    <TextField id="standard-basic20" variant="standard" value={formData.rateOfPay} onChange={(event) => setFormData({...formData, rateOfPay: event.target.value})}/>
                  </div>
                  <div className="left-filed">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Date
                    </InputLabel>
                    <TextField id="standard-basic19" variant="standard" value={formData.durationDate} onChange={(event) => setFormData({...formData, durationDate: event.target.value})}/>
                  </div>
              </FiledForm>
              <AddFiledForm>
                  <div className="right-filed">
                      <InputLabel htmlFor="input-with-icon-adornment">
                        Address
                      </InputLabel>
                      <TextField id="standard-basic18" variant="standard" value={formData.companyAddress} onChange={(event) => setFormData({...formData, companyAddress: event.target.value})}/>
                  </div>
                  <div className="left-filed">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Home Address during time of employment
                    </InputLabel>
                    <TextField id="standard-basic17" variant="standard" value={formData.homeAddressDuringEmployment} onChange={(event) => setFormData({...formData, homeAddressDuringEmployment: event.target.value})}/>
                  </div>
              </AddFiledForm>
              <LeaveFiledForm>
                <div className="left-filed">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Reason For Leaving
                  </InputLabel>
                  <TextField id="standard-basic16" variant="standard" value={formData.reasonForLeaving} onChange={(event) => setFormData({...formData, reasonForLeaving: event.target.value})}/>
                </div>
              </LeaveFiledForm>
              <LeaveFiledForm>
                <div className="left-filed">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Position Held
                  </InputLabel>
                  <TextField id="standard-basic15" variant="standard" value={formData.positionHeld} onChange={(event) => setFormData({...formData, positionHeld: event.target.value})}/>
                </div>
              </LeaveFiledForm>
              <QuestionFour>
                <p>Can we contact this employer?</p>
                <ToggleButton
                inactiveLabel={"no"}
                activeLabel={"yes"}
                colors={{
                    activeThumb: {
                      base: 'rgb(250,250,250)',
                    },
                    inactiveThumb: {
                      base: 'rgb(62,130,247)',
                    },
                    active: {
                      base: 'rgb(134 211 255)',
                    },
                    inactive: {
                    base: 'rgb(65 66 68 / 46%)',
                  }
                  }}
                thumbStyle={thumbStyle}
                trackStyle={trachHeight}
                value={formData.canWeContactEmployer}
                onToggle={(value) => {
                  setFormData({ ...formData, canWeContactEmployer: !value });
                }}
              />
              </QuestionFour>
          </MainForm>
    </ApplicationForm>
  )
}

export default FormFour

const ApplicationForm = styled.div`
   overflow-x: hidden;
  overflow-y: auto;
  scrollbar-color: #6969dd #e0e0e0;
  scrollbar-width: thin;
  height: 525px;

  &::-webkit-scrollbar{
    width: 5px;
  }

  &::-webkit-scrollbar-track{
    background-color: #ef432340;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb{
    box-shadow: inset 0px 0px 20px 20px rgb(239 67 35);
    border-radius: 10px;
  }
`
const FormTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 10px 10px 10px;
    @media (max-width:650px){
        padding: 10px 10px 10px 10px;
    }

    h1{
        margin: 0;
        color: #5d8efe;
        font-weight: 600;
        font-size: 30px;
    }
    p{
        margin: 0;
        font-weight: 600;
        color: #000000;
        margin-bottom: 0;
        font-size: 20px;
        @media (max-width:650px){
            font-size:14px;
        }
    }
`
const DateDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    p{
        color: #000000;
        font-weight: 500;
        @media (max-width:650px){
            font-size:13px;
        }
    }
    .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root{
        top: 5px;
    }
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline{
        height: 45px;
        top: 0;
    }
`

const MainForm = styled.div`
    width: 90%;
    margin: 10px auto;
    border: 1px solid #eeeeee;
    padding: 15px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;    
`

const FiledForm = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
    @media (max-width:650px){
      flex-direction: column;
      margin: 0;
    }
    .right-filed{
        width: 25%;
        @media (max-width:650px){
          width: 100%;
          margin: 10px 0;
        }

        .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
            color: #000000;
            font-weight: 500;
            font-size: 14px;
            white-space: pre-wrap;
        }

        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
            width: 100%;
        }
    }
    .center-filed{
        width: 25%;
        @media (max-width:650px){
          width: 100%;
        }

        .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
            color: #000000;
            font-weight: 500;
            font-size: 14px;
            white-space: pre-wrap;
        }

        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
            width: 100%;
        }
    }
    .left-filed{
        width: 25%;
        @media (max-width:650px){
          width: 100%;
          margin: 10px 0;
        }

        .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root, .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
            color: #000000;
            font-weight: 500;
            font-size: 14px;
            white-space: pre-wrap;
        }
        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
            width: 100%;
        }
    }
`
const AddFiledForm = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
    @media (max-width:650px){
      flex-direction: column;
      margin: 0;
    }
    .right-filed{
        width: 40%;
        @media (max-width:650px){
          width: 100%;
          margin: 10px 0;
        }

        .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
            color: #000000;
            font-weight: 500;
            font-size: 14px;
            white-space: pre-wrap;
        }

        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
            width: 100%;
        }
    }
    .left-filed{
        width: 40%;
        @media (max-width:650px){
          width: 100%;
        }

        .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root, .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
            color: #000000;
            font-weight: 500;
            font-size: 14px;
            white-space: pre-wrap;
        }
        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
            width: 100%;
        }
    }
`
const LeaveFiledForm = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
    .left-filed{
        width: 100%;

        .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root, .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
            color: #000000;
            font-weight: 500;
            font-size: 14px;
            white-space: pre-wrap;
        }
        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
            width: 100%;
        }
    }
`

const QuestionFour = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    p{
      color: #000000;
      font-size: 16px;
      font-weight: 500;
      width: 80%;
    }
`

const trachHeight = {height:25, width: 56}
const thumbStyle = {height: 20, width:20, left: 30, bottom:1}