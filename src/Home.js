import React from "react";

function Home() {
    return (
        <section id="home" className="min-h-screen bg-emerald-100 flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-emerald-600">Hello, I'm [Your Name]</h2>
                <p className="mt-4 text-xl text-gray-700">
                    A Passionate Data Scientist and Quantnum Computing
                </p>
                <a href="#contact" className="mt-6 inline-block bg-emerald-500 text-white py-2 px-4 rounded shadow hover:bg-emerald-600">
                    Contact Me
                </a>
            </div>
        </section>
    );
}

export default Home;
