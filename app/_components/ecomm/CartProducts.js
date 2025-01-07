import Image from "next/image";

function CartProducts({ products, total, discountedTotal }) {
  return (
    <div className="w-full overflow-auto rounded-lg bg-primary-900 px-6 py-8">
      <h1 className="text-lg font-bold">Products</h1>
      {products &&
        products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center gap-4 border-b border-primary-200 p-4"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-md">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid w-[70%] grid-cols-[80%_5%_20%_15%] text-left">
                <h3 className="text-base font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-400">{product.quantity} x</p>
                <p className="text-sm text-gray-400">${product.price}</p>
                <p className="text-center text-sm text-gray-400">
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
