import Select from "react-select";

type SelectPropsType = {
    value:string;
    label:string;    
}


const customStyles = {
    control: (provided: any) => ({
      ...provided,
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
    menu: (provided: any) => ({
      ...provided,
      background: 'black',
      width: '100%',
   
    }),
    option: (provided: any, state: { isFocused: any; }) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#333' : 'black',
        color: 'white',
        cursor: 'pointer',
      }),
      singleValue: (provided: any) => ({
        ...provided,
        color: 'white',
        fontSize:'14px'
      }),
};

const ReactSelect = ({options,name}:{options:SelectPropsType[];name:string}) => {
  return (
    
    <Select
    name={name}
    options={options}
    placeholder=""
    styles={customStyles}
    isClearable
  />
  )
}

export default ReactSelect