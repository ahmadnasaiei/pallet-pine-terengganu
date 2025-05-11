import { useEffect } from "react";
import s from "./ProductGalleryPage.module.css";
import { useProductStore } from "../../store/useProductStore";
import placeholderImg from "../../assets/img/product-1.jpg";
import SyncLoader from "react-spinners/SyncLoader";

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
    <main className={s.mainContainer}>
      <div className={s.leftColumn}>
        <div className={s.filterContainer}>
          <h3>Kategori</h3>
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
        <div className={s.productHeader}>
          <h1>Produk Kami</h1>
          <span>{products.length} item ditemui</span>
        </div>
        {loading ? (
          <div className={s.loadingContainer}>
            <SyncLoader color="#FCF001" />
          </div>
        ) : (
          <div className={s.productContainer}>
            {products.map((item, idx) => (
              <div key={idx} className={s.productCard}>
                <div className={s.productImg}>
                  <img src={item.imgPath || placeholderImg} alt={item.item} />
                </div>
                <div className={s.productDetail}>
                  <span>{item.category}</span>
                  <h3>{item.item}</h3>
                  <p>{item.size}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default ProductGalleryPage;
