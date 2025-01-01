import { GoShieldSlash } from "react-icons/go";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdEventAvailable } from "react-icons/md";

function ProductHighlightsRow({ warrenty, shipping, availability }) {
  return (
    <div className="my-6 flex items-center justify-between rounded-lg bg-primary-950 px-4 py-4">
      <div className="w-[33%] border-r-2 border-gray-800 text-center">
        <h3 className="flex items-center justify-center gap-2">
          <GoShieldSlash /> Warranty
        </h3>
        <p className="">{warrenty}</p>
      </div>
      <div className="w-[34%] border-r-2 border-gray-800 text-center">
        <h3 className="flex items-center justify-center gap-2">
          <LiaShippingFastSolid />
          Shipping
        </h3>
        <p>{shipping}</p>
      </div>
      <div className="w-[33%] text-center">
        <h3 className="flex items-center justify-center gap-2">
          <MdEventAvailable />
          Availability
        </h3>
        <p>{availability}</p>
      </div>
    </div>
  );
}

export default ProductHighlightsRow;
