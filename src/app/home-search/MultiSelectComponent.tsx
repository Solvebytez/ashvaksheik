/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Select from 'react-select'


// Define the structure for our options
export type OptionType1 = {
  label: string
  value: string
  options?: OptionType1[]
}

export type regularOption= {
  label: string
  value: string        
} 

const customStyles = {
    group: (provided: any) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    groupHeading: (provided: any) => ({
      ...provided,
      fontWeight: 'bold',
      fontSize: '1rem',
      color: 'inherit',
      marginBottom: '0.5rem',
      paddingTop:'3px',
      paddingBottom:'3px',
      backgroundColor: provided.isDisabled ? 'red' : '#ccc',
    }),
    control: (provided:any) => ({
      ...provided,
      borderColor: provided.isFocused ? 'black' : 'black',  
      borderRadius:'0',
      backgroundColor:'transparent',
      color:'red'  
    }),
    
  }

  type selectPropsType ={   
    name?:string;
    value:OptionType1[] | regularOption | null;
    onChangeSelect: (selected: any) => void;
    placeholder?:string;
  } & (
    {
      isMultiOption?:true;
      allMultiOptions: OptionType1[]
    }|
    {
      isMultiOption:false;    
      regularOption: {
        label: string
        value: string        
      }[]
    }
  )

export default function MultiSelectOptions({value,...props}:selectPropsType) {

  const optionsTypeFilter = !!props.isMultiOption; 
  // Type guard to ensure correct access of props based on `isMultiOption`
  const options = props.isMultiOption
    ? props.allMultiOptions
    : 'regularOption' in props
    ? [...props.regularOption]
    : [];

  return (
    <div className="w-full max-w-2xl">

        <div className="space-y-4">
          <div>
           
            <Select
              id="city-select"
              options={options}
              isMulti={optionsTypeFilter}
              onChange={props.onChangeSelect}
              value={value}
              className={`mt-1 border`}
              classNamePrefix={`react-select ${!optionsTypeFilter&&'single'}`}
              placeholder={props.placeholder}
              styles={customStyles}             
            />
          </div>     
        </div>
     </div>
  )
}