"use client";

import React from "react";

const Mission: React.FC = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-4xl mx-auto text-center text-lg sm:text-xl font-medium text-gray-800">
                Наши технологии{" "}
                <span className="text-red-600 font-semibold">работают</span> на ваш
                бизнес,{" "}
                <span className="text-red-600 font-semibold">масштабируются</span> и{" "}
                <span className="text-red-600 font-semibold">приносят результат</span>,
                становясь вашим конкурентным преимуществом.
            </div>
        </section>
    );
};

export default Mission;