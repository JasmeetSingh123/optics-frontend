
interface Product {
   // category: string;
    url: string;
    public_id: string;
    description: string;
    shape: string;
    price?: string;
  }
  
  interface CardProps {
    product: Product;
  }
export default function Frames({product}: CardProps) {
    const { url, public_id, description, shape, price } = product;
    return (
      <>
        
        {/* <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              className="object-cover  h-48 w-96"
              src={url} alt={public_id}
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Shape: {shape}
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {description}
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div> */}




{/* <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div className="relative h-56 mx-4 sm:-mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      className="object-cover h-48 w-full sm:h-48 sm:w-96"
      src={url}
      alt={public_id}
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Shape: {shape}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      {description}
    </p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
      type="button"
    >
      Read More
    </button>
  </div>
</div> */}


<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-72 md:w-96">
  <div className="relative h-48 sm:h-56 md:h-64 mx-4 sm:-mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      className="object-cover h-full w-full"
      src={url}
      alt={public_id}
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Shape: {shape}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      {description}
    </p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
      type="button"
    >
      Read More
    </button>
  </div>
</div>




     
      </>
    )
  };