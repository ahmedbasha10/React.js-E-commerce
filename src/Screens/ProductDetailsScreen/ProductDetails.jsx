import React, { useEffect, useMemo } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import Product from "../../Components/Product/Product";
import ProductDetailsComponent from "../../Components/ProductDetails/ProductDetailsComponent";
import Spinner from "react-bootstrap/Spinner";
import usePagination from "../../Utils/PaginationHook";
import PaginationList from "../../Components/PaginationList/PaginationList";
import DropdownButton from "../../Components/DropdownButton/DropdownButton";
import "./ProductDetails.css";
import {
  useGetProductQuery,
  useGetProductsQuery,
} from "../../Redux/Slices/productsApi-slice";

const ProductDetails = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { productId } = useParams();

  const { data: product = {}, isLoading } = useGetProductQuery(productId);
  const { data: products = [] } = useGetProductsQuery();

  // find products that is related for the product by category
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products?.filter(
      (p) => p.category === product?.category && p.id !== parseInt(productId)
    );
  }, [product, products, productId]);

  // Pagination Hook
  const [
    currentPage,
    itemsPerPage,
    totalPages,
    paginatedProducts,
    setCurrentPage,
    setItemsPerPage,
  ] = usePagination(relatedProducts);

  return (
    <section className="mt-5">
      <Container>
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : product ? (
          <ProductDetailsComponent product={product} />
        ) : (
          <h1>Not Found</h1>
        )}
        {paginatedProducts?.length > 0 && (
          <>
            <div className="d-flex justify-content-between mt-5">
              <h4 className="products-header mb-4">POPULAR PRODUCTS</h4>
              {/* to choose number of pages for pagination*/}
              <DropdownButton
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
              />
            </div>
            <div className="row">
              {paginatedProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
        {/*List that contains pages number to move between them*/}
        <PaginationList
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </section>
  );
};

export default ProductDetails;
