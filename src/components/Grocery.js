import React from "react";

// Child components
const FeaturedProducts = () => (
    <div>
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        {/* Add your featured products or components here */}
        <p>Featured Product 1</p>
        <p>Featured Product 2</p>
        <p>Featured Product 3</p>
    </div>
);

const SpecialOffers = () => (
    <div>
        <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
        {/* Add your special offers or components here */}
        <p>Special Offer 1</p>
        <p>Special Offer 2</p>
        <p>Special Offer 3</p>
    </div>
);

const Grocery = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                Our Grocery Online Store
            </h1>

            {/* Featured Products Section */}
            <FeaturedProducts />

            {/* Special Offers Section */}
            <SpecialOffers />

            {/* Add more child components as needed */}
        </div>
    );
};

export default Grocery;
