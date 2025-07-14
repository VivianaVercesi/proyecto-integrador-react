import React from "react";
import Nav from "../components/Nav";
/*import Title from "../components/Title";*/
import ProductContainer from "../components/ProductContainer";
import "../styles/products.css";

function Products() { 
    return(
        <div>
             <header className="about">
                    <h1 className="titleCat">Vestidos para Soñar</h1>               
                </header>
            <main className="container">
                
                <section id="catalogo">
                    <div id="product-container">
                        <ProductContainer
                            />
                    </div>
                </section>
                  
            </main>
            
        </div>
            
        );
}

export default Products;