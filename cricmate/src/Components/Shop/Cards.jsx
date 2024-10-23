import React from "react";

function Cards() {
  const cart = [
    {
      id: 1,
      name: "CricCard",
      price: 1000,
      image:
        "https://images.unsplash.com/photo-1540132586218-183f59221b4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "CricCard2",
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1540132586218-183f59221b4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "CricCard3",
      price: 3000,
      image:
        "https://images.unsplash.com/photo-1540132586218-183f59221b4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "CricCard4",
      price: 4000,
      image:
        "https://images.unsplash.com/photo-1540132586218-183f59221b4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "CricCard5",
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1540132586218-183f59221b4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 bg-pink-800">
      {cart.map((item) => (
        <div
          key={item.id}
          className="relative flex flex-col items-center bg-white border rounded-xl shadow-md overflow-hidden w-80 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-48 w-full object-cover rounded-lg"
          />
          <div className="w-full mt-4 flex flex-col items-center">
            <h1 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h1>
            <p className="text-lg font-medium text-gray-600 mb-3">Rs. {item.price}</p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
