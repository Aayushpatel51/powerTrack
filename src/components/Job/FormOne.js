import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

function FormOne({formData,setFormData}) {
  return (
    <ApplicationForm>
        <FormTitle>
            <h1>Application for Employment</h1>
            <p>Please complete all requested information except Signature</p>
        </FormTitle>
        <DateDiv>
            <p>Power Trac is An Equal Opportunity Employer.</p>
            <TextField
                id="date"
                label="Date"
                type="date"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true, 
                }}
                value={formData.formDate}
                onChange={(event) => setFormData({...formData, formDate: event.target.value})}
            />
        </DateDiv>
        <MainForm>
            <FiledForm>
                <div className="right-filed">
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Full Name
                    </InputLabel>
                    <TextField id="standard-basic1" variant="standard" value={formData.fullName} onChange={(event) => setFormData({...formData, fullName: event.target.value})}/>
                </div>
                <div className="left-filed">
                    <TextField
                        id="date1"
                        label="Date of Birth"
                        type="date"
                        variant="standard"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={formData.dateOfBirth}
                        onChange={(event) => setFormData({...formData, dateOfBirth: event.target.value})}
                    />
                </div>
            </FiledForm>
            <FiledForm>
                <div className="right-filed">
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Present Address (Include City, State, and Zip Code)(Enter number of years at below address?)
                    </InputLabel>
                    <TextField id="standard-basic2" variant="standard" value={formData.presentAddress} onChange={(event) => setFormData({...formData, presentAddress: event.target.value})}/>
                </div>
                <div className="left-filed">
                <InputLabel htmlFor="input-with-icon-adornment">
                    Previous Address(Enter number of years at below address?)
                </InputLabel>
                <TextField id="standard-basic3" variant="standard" value={formData.previousAddress} onChange={(event) => setFormData({...formData, previousAddress: event.target.value})}/>
                </div>
            </FiledForm>
            <FiledForm>
                <div className="right-filed">
                    <InputLabel htmlFor="input-with-icon-adornment">
                       Phone Number(Area Code)
                    </InputLabel>
                    <TextField id="standard-basic4" variant="standard" value={formData.phoneNumber} onChange={(event) => setFormData({...formData, phoneNumber: event.target.value})}/> 
                </div>
            </FiledForm>
        </MainForm>
    </ApplicationForm>
  )
}

export default FormOne

const ApplicationForm = styled.div`

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
        height: 350px;
    }
`

const FiledForm = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;

    @media (max-width:650px){
        flex-direction: column;
        margin: 0px ;
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
            margin: 10px 0;
        }

        .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root, .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
            color: #000000;
            font-weight: 500;
            font-size: 14px;
            white-space: pre-wrap;
        }
        .css-e13as6-MuiFormControl-root-MuiTextField-root{
            width: 100%;
        }
        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
            width: 100%;
        }
    }
`
