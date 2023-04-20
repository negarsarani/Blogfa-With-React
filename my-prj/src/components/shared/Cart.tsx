type cart = {
  title: string;
  url: string;
  description: string;
};
const Cart = (props: cart) => {
  return (
    <div className=" flex flex-col text-end items-center justify-end px-5 py-2 bg-[#E9E9E9]">
      <h2>
        <span className="text-[#5B5BFF]">{props.title}</span>
      </h2>
      <span className="text-gray-400">{props.url}</span>
      <p>{props.description}</p>
    </div>
  );
};

export default Cart;
