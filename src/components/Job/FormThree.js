import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

function FormThree({formData,setFormData}) {
  return (
    <ApplicationForm>
        <FormTitle>
            <h1>Application for Employment</h1>
            <p>Please complete all requested information except Signature</p>
        </FormTitle>
        <DateDiv>
            <p>If you did not graduate from High School, circle the last year completed in school. 7 8 9 10 11</p>
        </DateDiv>
        <MainForm>
            <FiledForm>
                <div className="right-filed">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      High School
                    </InputLabel>
                    <TextField id="standard-basic9" variant="standard" value={formData.highSchool} onChange={(event) => setFormData({...formData, highSchool: event.target.value})} />
                </div>
                <div className="center-filed">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Address
                  </InputLabel>
                  <TextField id="standard-basic10" variant="standard" value={formData.highSchoolLocation} onChange={(event) => setFormData({...formData, highSchoolLocation: event.target.value})}/>
                </div>
                <div className="left-filed">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Major and Degree
                  </InputLabel>
                  <TextField id="standard-basic11" variant="standard" value={formData.highSchoolDegree} onChange={(event) => setFormData({...formData, highSchoolDegree: event.target.value})}/>
                </div>
            </FiledForm>
            <FiledForm>
                <div className="right-filed">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      College
                    </InputLabel>
                    <TextField id="standard-basic12" variant="standard" value={formData.college} onChange={(event) => setFormData({...formData, college: event.target.value})}/>
                </div>
                <div className="center-filed">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Address
                  </InputLabel>
                  <TextField id="standard-basic13" variant="standard" value={formData.collegeLocation} onChange={(event) => setFormData({...formData, collegeLocation: event.target.value})}/>
                </div>
                <div className="left-filed">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Major and Degree
                  </InputLabel>
                  <TextField id="standard-basic14" variant="standard" value={formData.collegeDegree} onChange={(event) => setFormData({...formData, collegeDegree: event.target.value})}/>
                </div>
            </FiledForm>
            <FiledForm>
                <div className="right-filed">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Other
                    </InputLabel>
                    <TextField id="standard-basic15" variant="standard" value={formData.other} onChange={(event) => setFormData({...formData, other: event.target.value})}/>
                </div>
                <div className="center-filed">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Address
                  </InputLabel>
                  <TextField id="standard-basic16" variant="standard" value={formData.otherLocation} onChange={(event) => setFormData({...formData, otherLocation: event.target.value})}/>
                </div>
                <div className="left-filed">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Major and Degree
                  </InputLabel>
                  <TextField id="standard-basic17" variant="standard" value={formData.otherDegree} onChange={(event) => setFormData({...formData, otherDegree: event.target.value})}/>
                </div>
            </FiledForm>
        </MainForm>
    </ApplicationForm>
  )
}

export default FormThree

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
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;    

    @media (max-width:650px){
      height: 565px;
    }
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
