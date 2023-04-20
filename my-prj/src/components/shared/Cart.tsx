type cart = {
  title: string;
  url: string;
  description: string;
};
const Cart = ({ title, url, description }: cart) => {
  return (
    <div className=" flex flex-col text-end items-end justify-around   px-5 h-[180px] w-[300px] bg-[#E9E9E9] col-span-1">
      <h2>
        <span className="text-[#5B5BFF]">{title}</span>
      </h2>
      <a href={url} className="text-gray-400 ">
        {url}
      </a>
      <p>{description}</p>
    </div>
  );
};

export default Cart;
