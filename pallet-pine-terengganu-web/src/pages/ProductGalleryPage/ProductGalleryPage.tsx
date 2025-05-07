import { useEffect } from "react";
import s from "./ProductGalleryPage.module.css";
import { useProductStore } from "../../store/useProductStore";

interface ProductStore {
  products: any[];
  category: any[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => void;
  fetchProductCategory: () => void;
}

function ProductGalleryPage() {
  const {
    products,
    category,
    loading,
    error,
    fetchProducts,
    fetchProductCategory,
  }: ProductStore = useProductStore() as ProductStore;

  useEffect(() => {
    fetchProducts();
    fetchProductCategory();
  }, [fetchProducts, fetchProducts]);

  return (
    <div className={s.mainContainer}>
      <div className={s.leftColumn}>
        <div className={s.filterContainer}>
          <h1>Kategori</h1>
          <div className={s.filterCheckboxContainer}>
            {category.map((item, idx) => (
              <div key={idx} className={s.filterCheckbox}>
                <input
                  type="checkbox"
                  name={item.category}
                  id={item.category}
                />
                <label htmlFor={item.category}>{item.category}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={s.rightColumn}>
        {products.map((item, idx) => (
          <div key={idx} className={s.productContainer}>
            <div className={s.productCard}>
              <div className={s.productImg}>
                {/* <img key={idx} src={item.img} alt="" /> */}
              </div>
              <div className={s.productDetail}>
                <h1>{item.item}</h1>
                <p>{item.size}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGalleryPage;
