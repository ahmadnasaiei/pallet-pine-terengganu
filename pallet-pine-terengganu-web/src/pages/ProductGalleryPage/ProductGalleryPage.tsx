import React from "react";
import s from "./ProductGalleryPage.module.css";

function ProductGalleryPage() {
  return (
    <div className={s.mainContainer}>
      <div className={s.leftColumn}>Left content</div>
      <div className={s.rightColumn}>Right content</div>
    </div>
  );
}

export default ProductGalleryPage;
