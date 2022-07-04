import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import ToggleButton from "react-toggle-button";

const Input = styled('input')({
  display: 'none',
});

function FormFive({formData,setFormData}) {

  return (
    <ApplicationForm>
      <FormTitle>
          <h1>Application for Employment</h1>
          <p>Please complete all requested information except Signature</p>
      </FormTitle>
      <MoreDetails>
          <h4>Do not answer the following question if your state prohibits such disclosure</h4>
      </MoreDetails>
        <DateDiv>
            <p>A record or conviction does not necessarily disqualify you from employment consideration.</p>
        </DateDiv>
        <MainForm>
            <QuestionOne>
              <p>Have you ever been convicted of a felony or misdemeanor, other than minor traffic violations?</p>
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
                value={formData.haveYouConvictedforFelony}
                onToggle={(value) => {
                  setFormData({ ...formData, haveYouConvictedforFelony: !value });
                }}
              />
            </QuestionOne>
            <DayDiv>
              <InputLabel htmlFor="input-with-icon-adornment">
                YES Describe in full
              </InputLabel>
              <TextField id="standard-basic31" label="Enter Here" variant="standard" value = {formData.yesDescribe} onChange={(event) => setFormData({...formData, yesDescribe: event.target.value})} />
            </DayDiv>
            <QuestionTwo>
              <p>Only those U.S. Citizens or aliens who have a legal right to work in the United States are eligible of employment. Can you, upon employment, submit documentation verifying your legal right to work in the United States and your identity?</p>
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
                value={formData.AreYouUsCitizens}
                onToggle={(value) => {
                  setFormData({ ...formData, AreYouUsCitizens: !value });
                }}
              />
            </QuestionTwo>
        </MainForm>
        <h4>In case of emergency, notify the following person</h4>
        <MainForm>
            <SubFiledForm>
                <div className="right-filed">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Name
                    </InputLabel>
                    <TextField id="standard-basic30" variant="standard" value={formData.notifyPersonName} onChange={(event) => setFormData({...formData, notifyPersonName: event.target.value})}/>
                </div>
                <div className="center-filed">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Phone
                  </InputLabel>
                  <TextField id="standard-basic29" variant="standard" value={formData.notifyPersonPhone} onChange={(event) => setFormData({...formData, notifyPersonPhone: event.target.value})}/>
                </div>
                <div className="left-filed">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Relationship
                  </InputLabel>
                  <TextField id="standard-basic28" variant="standard" value={formData.notifyPersonRelation} onChange={(event) => setFormData({...formData, notifyPersonRelation: event.target.value})}/>
                </div>
            </SubFiledForm>
            <DayDiv>
              <InputLabel htmlFor="input-with-icon-adornment">
                Describe any other experiences, or qualifications which you feel would especially fit you for work with the company?
              </InputLabel>
              <TextField id="standard-basic27" label="Enter Here" variant="standard" value={formData.otherExperiences} onChange={(event) => setFormData({...formData, otherExperiences: event.target.value})}/>
            </DayDiv>
        </MainForm>
        
      <DateDiv>
          <div className="uploadImg">
            <p>Signature</p>
            <label htmlFor="contained-button-file">
              {/* <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <Button variant="outlined" component="span">
              <PhotoCamera className="photo-camera" />
                Add Photo
              </Button> */}
              <input type="file" multiple accept="image/*" onChange={(event) => setFormData({...formData,signature: event.target.value})} />
            </label>
            <TextField id="standard-basic26" label="Enter Name" variant="standard" value={formData.printName} onChange={(event) => setFormData({...formData, printName: event.target.value})}/> 
          </div>
          <TextField
              id="date6"
              label="Date"
              type="date"
              sx={{ width: 220 }}
              InputLabelProps={{
              shrink: true,
              }}
              value={formData.printDate}
              onChange={(event) => setFormData({...formData, printDate: event.target.value})}
          />
      </DateDiv>
      <h4>Select store you are willing to apply</h4>

      <MainForm>
            <QuestionFour>
              <h5>PT#1</h5>
              <p>470 Bessie Rd, Piedmont, Sac 29673</p>
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
                value={formData.pT1}
                onToggle={(value) => {
                  setFormData({ ...formData, pT1: !value });
                }}
              />
            </QuestionFour>
            <QuestionFour>
              <h5>PT#2</h5>
              <p> 16 N. Greenwood Avenue Ext, Ware Shoals, SC 29692</p>
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
                value={formData.pT2}
                onToggle={(value) => {
                  setFormData({ ...formData, pT2: !value });
                }}
              />
            </QuestionFour>
            <QuestionFour>
              <h5>PT#3</h5>
              <p>9303 Long Creek Highway, Westminster, SC 29693</p>
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
                value={formData.pT3}
                onToggle={(value) => {
                  setFormData({ ...formData, pT3: !value });
                }}
              />
            </QuestionFour>
            <QuestionFour>
                <h5>PT#4</h5>
              <p> 3109 West Oak Highway, Westminster, SC 29693</p>
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
                value={formData.pT4}
                onToggle={(value) => {
                  setFormData({ ...formData, pT4: !value });
                }}
              />
            </QuestionFour>
            <QuestionFour>
              <h5>PT#5</h5>
              <p>3301 Highway 88, Central, SC 29630</p>
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
                value={formData.pT5}
                onToggle={(value) => {
                  setFormData({ ...formData, pT5: !value });
                }}
              />
            </QuestionFour>
            <QuestionFour>
                <h5>PT#6</h5>
              <p> 2560 N. Pleasantburg Dr. Greenville, SC 29609</p>
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
                value={formData.pT8}
                onToggle={(value) => {
                  setFormData({ ...formData, pT8: !value });
                }}
              />
            </QuestionFour>
            <QuestionFour>
                <h5>PT#7</h5>
              <p> 2800 Highway 29 South, Anderson, SC 29626</p>
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
                value={formData.pT9}
                onToggle={(value) => {
                  setFormData({ ...formData, pT9: !value });
                }}
              />
            </QuestionFour>
            <QuestionFour>
                <h5>PT#8</h5>
              <p> 704 Whitehall Road, Anderson, SC 29625</p>
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
                value={formData.pT10}
                onToggle={(value) => {
                  setFormData({ ...formData, pT10: !value });
                }}
              />
            </QuestionFour>
            <QuestionFour>
                <h5>PT#9</h5>
              <p>450 Church St. Honea Path, SC 29654</p>
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
                value={formData.pT11}
                onToggle={(value) => {
                  setFormData({ ...formData, pT11: !value });
                }}
              />
            </QuestionFour>
            <QuestionFour>
                <h5>PT#10</h5>
              <p> 1120 Wren School Road, Piedmont, SC 29673</p>
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
                value={formData.pT12}
                onToggle={(value) => {
                  setFormData({ ...formData, pT12: !value });
                }}
              />
            </QuestionFour>
            <QuestionFour>
                <h5>PT#11</h5>
              <p> 1701 Pearman Dairy Rd, Anderson, SC 29625 </p>
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
                value={formData.pT13}
                onToggle={(value) => {
                  setFormData({ ...formData, pT13: !value });
                }}
              />
            </QuestionFour>
      </MainForm>
    </ApplicationForm>
  )
}

export default FormFive

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
  h4{
    color: #ef4323;
    text-align: center;
    margin: 25px 0;
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
    @media (max-width:650px){
      margin: 0 auto;
    }

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
    margin: 10px auto;
    @media(max-width:650px){
      margin: 0px auto;
    }
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
    margin: 25px auto;
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
    .right-filled{
        width: 25%;

        .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
          color: #000000;
          font-size: 14px;
          white-space: pre-wrap;
          font-weight: 600;
        }

        .css-16awh2u-MuiAutocomplete-root{
            width: 100%;  
        }
    }
    .center-filled{
        width: 25%;

        .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
          color: #000000;
          font-size: 14px;
          white-space: pre-wrap;
          font-weight: 600;
        }

        .css-16awh2u-MuiAutocomplete-root{
            width: 100%;  
        }
    }
    .left-filled{
        width: 25%;

        .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root, .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
            color: #000000;
            font-weight: 600;
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

const DateForm = styled.div`
  width: 25%;
  margin: 10px 0;
  .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
    color: #000000;
    font-weight: 600;
    font-size: 14px;
    swhite-space: pre-wrap;
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
      @media (max-width:650px){
        width: 70%;
      }

    }
`

const DayDiv = styled.div`
    margin: 10px 0;
  .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
    color: #000000;
    font-size: 14px;
    white-space: pre-wrap;
    font-weight: 600;
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
      @media (max-width:650px){
        width: 70%;
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
      @media (max-width:650px){
        width: 70%;
      }
    }
    h5{
        color: #ef4323; 
    }
`


const SubFiledForm = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
    @media(max-width:650px){
      flex-direction: column;
      margin: 0;
    }
    .right-filed{
        width: 25%;
        @media(max-width:650px){
          width: 100%;
          margin: 10px 0;
        }

        .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
            color: #000000;
            font-weight: 600;
            font-size: 14px;
            white-space: pre-wrap;
        }

        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
            width: 100%;
        }
    }
    .center-filed{
        width: 25%;
        @media(max-width:650px){
          width: 100%;
        }

        .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
            color: #000000;
            font-weight: 600;
            font-size: 14px;
            white-space: pre-wrap;
        }

        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
            width: 100%;
        }
    }
    .left-filed{
        width: 25%;
        @media(max-width:650px){
          width: 100%;
          margin: 10px 0;
        }

        .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root, .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root{
            color: #000000;
            font-weight: 600;
            font-size: 14px;
            white-space: pre-wrap;
        }
        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
            width: 100%;
        }
    }
`

const trachHeight = {height:25, width: 56}
const thumbStyle = {height: 20, width:20, left: 30, bottom:0}