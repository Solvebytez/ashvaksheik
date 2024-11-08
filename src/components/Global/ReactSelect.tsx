import Select from "react-select";

export type OptioPropsType = {
    value:string;
    label:string;    
}


const customStyles = {
    control: (provided: unknown) => ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...provided as any,
      background: 'transparent',
      display: 'flex',
      flexWrap: 'nowrap',
      borderLeft:'0px',
      borderRight:'none',
      borderTop:'0px',
     color:"#fff",
      borderColor: '#fff',
      width: '100%'
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    menu: (provided: any) => ({
      ...provided,
      background: 'black',
      width: '100%',
   
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    option: (provided: any, state: { isFocused: any; }) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#333' : 'black',
        color: 'white',
        cursor: 'pointer',
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      singleValue: (provided: any) => ({
        ...provided,
        color: 'white',
        fontSize:'14px'
      }),
};

type SelectPropsType ={ value: OptioPropsType  ; onChange: (value:OptioPropsType)=>void;name:string;options:OptioPropsType[] }



const ReactSelect = ({options,name,value,onChange}:SelectPropsType) => {
  return (
    
    <Select
    name={name}
    options={options}
    placeholder=""
    value={value}
    styles={customStyles}
    onChange={(value)=>onChange(value as OptioPropsType)}
    isClearable
  />
  )
}

export default ReactSelect