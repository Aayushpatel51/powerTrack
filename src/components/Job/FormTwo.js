import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToggleButton from "react-toggle-button";


function FormTwo({formData,setFormData}) {

  return (
    <ApplicationForm>
      <FormTitle>
          <h1>Application for Employment</h1>
          <p>Please complete all requested information except Signature</p>
      </FormTitle>
      <MoreDetails>
          <p className="sub-title">Declaration And Authorization To Release Information</p>
          <h4>Please Read This Statement Carefully Before You Complete This Application</h4>
          <p>The company in considering my application for employment or any subsequent changes such as but not limited to promotion or transfer may verify the information set forth on this application and obtain additional information relating to my background. I authorize all persons, schools, companies, corporations, credit bureaus, and government agencies to supply any information concerning my background which may include, but not limited to criminal, credit and driver’s license, provided state law permits and where such inquiries are job related.</p>
      </MoreDetails>
      <DateDiv>
          <TextField
              id="date4"
              label="Date"
              type="date"
              sx={{ width: 220 }}
              InputLabelProps={{
              shrink: true,
              }}
              value={formData.signDate}
              onChange={(event) => setFormData({...formData, signDate: event.target.value})}
          />
      </DateDiv>
      <MainForm>
            <FiledForm>
              <div className="right-filled">
                <InputLabel htmlFor="input-with-icon-adornment">
                  Position for which you are applying
                </InputLabel>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">Position</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={formData.position}
                    onChange={(event) => setFormData({...formData, position: event.target.value})}
                    label="Select"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Employee">Employee</MenuItem>
                    <MenuItem value="HR">HR</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="center-filled">
                <InputLabel htmlFor="input-with-icon-adornment">
                  Do you want to work
                </InputLabel>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label1">Date</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label1"
                    id="demo-simple-select-standard1"
                    value={formData.workTime}
                    onChange={(event) => setFormData({...formData, workTime: event.target.value})}
                    label="Select"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                    <MenuItem value="11:00 AM">11:00 AM</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="left-filled">
                <InputLabel htmlFor="input-with-icon-adornment">
                  Rate of Pay expected
                </InputLabel>
                <TextField id="standard-basic7" label="Enter Pay" variant="standard" value={formData.expectedPay} onChange={(event) => setFormData({...formData, expectedPay: event.target.value})} />
              </div>
            </FiledForm>
            <DateForm>
              <InputLabel htmlFor="input-with-icon-adornment">
                Date Available
              </InputLabel>
              <TextField
                id="date3"
                label=""
                type="date"
                variant="standard"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
                value={formData.dateAvailable}
                onChange={(event) => setFormData({...formData, dateAvailable: event.target.value})}
              />
            </DateForm>
            <QuestionOne>
              <p>Our stores operate seven days a week from 6:00 AM to 11:59 PM. Are you willing to work any day, shift or hours assigned by your supervisor/manager?</p>
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
                value={formData.workFlexibility}
                onToggle={(value) => {
                  setFormData({ ...formData, workFlexibility: !value });
                }}
              />
            </QuestionOne>
            <DayDiv>
              <InputLabel htmlFor="input-with-icon-adornment">
                What times/day are you unable to work?
              </InputLabel>
              <TextField id="standard-basic6" label="Enter Here" variant="standard" value={formData.unableToWork} onChange={(event)=> setFormData({...formData, unableToWork: event.target.value})} />
            </DayDiv>
            <QuestionTwo>
              <p>Will you work overtime if directed to do so?</p>
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
                value={formData.workOvertime}
                onToggle={(value) => {
                  setFormData({ ...formData, workOvertime: !value });
                }}
              />
            </QuestionTwo>
            <QuestionThree>
              <p>Have you worked for us before?</p>
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
                value={formData.workForUsBefore}
                onToggle={(value) => {
                  setFormData({ ...formData, workForUsBefore: !value });
                }}
              />
            </QuestionThree>
            <QuestionFour>
              <p>Do you have friends or relatives working for us?</p>
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
                value={formData.yourRelativeWorkForUsBefore}
                onToggle={(value) => {
                  setFormData({ ...formData, yourRelativeWorkForUsBefore: !value });
                }}
              />
            </QuestionFour>
            <DayDiv>
              <InputLabel htmlFor="input-with-icon-adornment">
                List names(s) and position
              </InputLabel>
              <TextField id="standard-basic5" label="Enter Here" variant="standard" value={formData.listNameAndPosition} onChange={(event)=> setFormData({...formData, listNameAndPosition: event.target.value})} />
            </DayDiv>
            <QuestionFour>
              <p>Do you have a reliable means of transportation to get to work?</p>
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
                value={formData.meansOfTransportation}
                onToggle={(value) => {
                  setFormData({ ...formData, meansOfTransportation: !value });
                }}
              />
            </QuestionFour>
            <QuestionFour>
              <p>Will Your Car Stay At Work While You Are Working?</p>
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
                value={formData.isYourCarStayAtWork}
                onToggle={(value) => {
                  setFormData({ ...formData, isYourCarStayAtWork: !value });
                }}
              />
            </QuestionFour>
      </MainForm>
      <MainForm>
            <QuestionFour>
              <p>Are you over the minimum age for selling alcoholic beverages in this state?</p>
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
                value={formData.minimumAge}
                onToggle={(value) => {
                  setFormData({ ...formData, minimumAge: !value });
                }}
              />
            </QuestionFour>
            <QuestionFour>
              <p>As a part of your routine duties, you may have to lift as much as 50 pounds, stand for extended periods of time, and work in a cold environment (stocking cooler) for a short period of time. Can you perform these physical requirements with or without reasonable accommodation?</p>
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
                value={formData.extraWork}
                onToggle={(value) => {
                  setFormData({ ...formData, extraWork: !value });
                }}
              />
            </QuestionFour>
            <DayDiv>
              <InputLabel htmlFor="input-with-icon-adornment">
                Please explain the accommodation
              </InputLabel>
              <TextField id="standard-basic4" label="Enter Here" variant="standard" value={formData.accommodation} onChange={(event) => setFormData({...formData, accommodation: event.target.value})}/>
            </DayDiv>
      </MainForm>
    </ApplicationForm>
  )
}

export default FormTwo

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

const MoreDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 25px auto;

    .sub-title {
      margin: 0;
      color: #000000;
      font-weight: 500;
    }
    h4{
      margin: 5px 0;
      color: #ef4323;
      font-size: 1.25rem;
    }
    p{
      margin: 0;
      text-align: center;
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
    }
    .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root{
        top: 5px;
    }
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline{
        height: 45px;
        top: 0;
    }

    .uploadImg{
      display: flex;
      flex-direction: column;
      p{
        margin: 5px 0;
      }
      .photo-camera{
        padding: 0 5px;
      }
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
    margin: 10px 0;
    @media (max-width:650px){
      flex-direction: column;
    }
    .right-filled{
        width: 25%;
        @media (max-width:650px){
          width: 100%;
        }

        .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
          color: #000000;
          font-size: 14px;
          font-weight: 600;
          white-space: pre-wrap;
        }

        .css-1869usk-MuiFormControl-root{
            width: 100%;  
        }
    }
    .center-filled{
        width: 25%;
        @media (max-width:650px){
          width: 100%;
        }


        .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
          color: #000000;
          font-size: 14px;
          font-weight: 600;
          white-space: pre-wrap;
        }

        .css-1869usk-MuiFormControl-root{
            width: 100%;  
        }
    }
    .left-filled{
        width: 25%;
        @media (max-width:650px){
          width: 100%;
        }
        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
          @media (max-width:650px){
            margin: 8px;
          }
        }

        .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root, .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
            color: #000000;
            font-weight: 500;
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

const DateForm = styled.div`
  width: 25%;
  margin: 10px 0;
  @media (max-width:650px){
    width: 100%;
  }
  .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
    color: #000000;
    font-weight: 500;
    white-space: pre-wrap;
  }
  .css-e13as6-MuiFormControl-root-MuiTextField-root{
    width: 100%;  
  }
`

const QuestionOne = styled.div`
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

const DayDiv = styled.div`
    margin: 10px 0;
  .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
    color: #000000;
    font-size: 14px;
    font-weight: 600;
    white-space: pre-wrap;
  }
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
    width: 100%;
  }
`

const QuestionTwo = styled.div`
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
const QuestionThree = styled.div`
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