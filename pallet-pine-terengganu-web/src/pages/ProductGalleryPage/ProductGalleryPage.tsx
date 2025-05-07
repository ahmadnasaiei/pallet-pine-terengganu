import { useEffect } from "react";
import s from "./ProductGalleryPage.module.css";
import { useProductStore } from "../../store/useProductStore";

interface ProductStore {
  products: any[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => void;
}

function ProductGalleryPage() {
  const { products, loading, error, fetchProducts }: ProductStore =
    useProductStore() as ProductStore;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <div className={s.mainContainer}>
      <div className={s.leftColumn}>
        <div className={s.filterContainer}>
          <h1>Kategori</h1>
          <div className={s.filterCheckboxContainer}>
            <div className={s.filterCheckbox}>
              <input type="checkbox" name="door" id="door" />
              <label htmlFor="door">Door</label>
            </div>
          </div>
        </div>
      </div>
      <div className={s.rightColumn}>Right content</div>
    </div>
  );
}

export default ProductGalleryPage;
