import Select from "react-select";

type SelectPropsType = {
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