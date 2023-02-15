import { useEffect, useState } from "react";

export function useProduct(data) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
   //console.log(data)
    if (data) {
      setProduct(data);
    }
  }, [data]);

  return product;
}