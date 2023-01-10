interface VecType {
  type: string;
  val: string;
}

const funFormData = (vect: VecType[]) => {
  const data = new FormData();

  for (let product of vect) {
    data.append(product.type, product.val);
  }
  return data;
};
export default funFormData;
