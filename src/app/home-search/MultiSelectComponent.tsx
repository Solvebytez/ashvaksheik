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
      paddingBottom: 4,
    }),
    groupHeading: (provided: any) => ({
      ...provided,
      fontWeight: 600,
      fontSize: '0.75rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)',
      backgroundColor: 'transparent',
      marginBottom: 4,
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      minHeight: 48,
      borderRadius: 0,
      backgroundColor: 'transparent',
      borderColor: state.isFocused ? '#fff' : 'rgba(255,255,255,0.35)',
      boxShadow: 'none',
      '&:hover': { borderColor: '#fff' },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: '4px 12px',
    }),
    input: (provided: any) => ({
      ...provided,
      color: '#fff',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'rgba(255,255,255,0.45)',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#fff',
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: '#fff',
      borderRadius: 0,
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: '#000',
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: '#000',
      ':hover': { backgroundColor: '#e5e5e5', color: '#000' },
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#111',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 0,
      zIndex: 80,
    }),
    menuPortal: (provided: any) => ({
      ...provided,
      zIndex: 80,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#2a2a2a' : 'transparent',
      color: '#fff',
      cursor: 'pointer',
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      backgroundColor: 'rgba(255,255,255,0.2)',
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: '#fff',
    }),
    clearIndicator: (provided: any) => ({
      ...provided,
      color: '#fff',
    }),
  }

  type selectPropsType ={   
    name?:string;
    inputId?: string;
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
              inputId={props.inputId}
              options={options}
              isMulti={optionsTypeFilter}
              onChange={props.onChangeSelect}
              value={value}
              classNamePrefix="search-select"
              placeholder={props.placeholder}
              styles={customStyles}
              menuPortalTarget={typeof document !== "undefined" ? document.body : null}
              menuPosition="fixed"
            />
          </div>     
        </div>
     </div>
  )
}