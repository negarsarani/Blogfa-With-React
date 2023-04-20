type input = {
  placeholder: string;
  type: 'text' | 'password';
};
const Textfield = (props: input) => {
  return (
    <input
      className="w-full text-[12px] placeholder: outline-none py-1 bg-white border text-center "
      type={props.type}
      placeholder={props.placeholder}
    ></input>
  );
};

export default Textfield;
