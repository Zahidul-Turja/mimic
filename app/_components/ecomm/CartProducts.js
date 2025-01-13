import Image from "next/image";

function CartProducts({ products, total, discountedTotal }) {
  return (
    <div className="w-full overflow-auto rounded-lg bg-primary-900 px-2 py-4 md:px-6 md:py-8">
      <h1 className="text-lg font-bold">Products</h1>
      {products &&
        products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center gap-4 border-b border-primary-200 p-4"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-md md:h-16 md:w-16">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid w-[100%] grid-cols-[50%_10%_20%_20%] items-center text-left md:w-[70%] md:grid-cols-[80%_5%_20%_15%]">
                <h3 className="text-sm font-semibold md:text-base">
                  {product.title}
                </h3>
                <p className="text-center text-xs font-semibold text-gray-400 md:text-sm">
                  {product.quantity} x
                </p>
                <p className="text-center text-xs font-semibold text-gray-400 md:text-sm">
                  ${product.price}
                </p>
                <p className="text-right text-xs font-semibold text-gray-400 md:text-center md:text-sm">
                  ${product.total}
                </p>
              </div>
            </div>
          );
        })}
      <div className="my-2 mr-8 flex justify-end gap-10">
        <h3>Total</h3>
        <h3>${total.toFixed(2)}</h3>
      </div>
      <div className="my-2 mr-8 flex justify-end gap-10">
        <h3>After Discount</h3>
        <h3>${discountedTotal.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default CartProducts;
