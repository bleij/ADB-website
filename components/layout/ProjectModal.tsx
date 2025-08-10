"use client";

import React, { useState } from "react";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        position: "",
        email: "",
        phone: "",
        productToMake: "",
        productName: "",
        productType: "",
        productDesc: "",
        goal: "",
        audience: "",
        features: "",
        integrations: "",
        style: "",
        visual: "",
        platforms: "",
        technologies: "",
        launchDate: "",
        budget: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        setStep((s) => s + 1);
    };

    const handleBack = () => {
        setStep((s) => s - 1);
    };

    const handleSubmit = () => {
        fetch("/api/submit-project", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        onClose();
        setStep(1);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/70 z-50 flex items-center justify-center">
            <div className="bg-white text-black rounded-3xl p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto font-sans">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-medium">Реализация проекта</h2>
                    <button onClick={onClose} className="text-xl">✕</button>
                </div>

                {step === 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1">Имя*</label>
                            <input name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Должность*</label>
                            <input name="position" value={formData.position} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Фамилия*</label>
                            <input name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Email*</label>
                            <input name="email" value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block font-medium mb-1">Номер телефона*</label>
                            <input name="phone" value={formData.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block font-medium mb-1">Какой продукт нужно реализовать?</label>
                            <input
                                name="productToMake"
                                value={formData.productToMake}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="sm:col-span-2 mt-4 text-right">
                            <button onClick={handleNext} className="px-6 py-2 bg-red-600 text-white rounded-full">Далее</button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block font-medium mb-1">Название продукта*</label>
                            <input name="productName" value={formData.productName} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Тип*</label>
                            <input name="productType" value={formData.productType} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Описание*</label>
                            <textarea name="productDesc" value={formData.productDesc} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div className="flex justify-between pt-4">
                            <button onClick={handleBack} className="text-gray-600">← Назад</button>
                            <button onClick={handleNext} className="px-6 py-2 bg-red-600 text-white rounded-full">Далее</button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block font-medium mb-1">Бизнес-цель</label>
                            <input name="goal" value={formData.goal} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Целевая аудитория</label>
                            <input name="audience" value={formData.audience} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div className="flex justify-between pt-4">
                            <button onClick={handleBack} className="text-gray-600">← Назад</button>
                            <button onClick={handleNext} className="px-6 py-2 bg-red-600 text-white rounded-full">Далее</button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block font-medium mb-1">Что должен делать продукт?</label>
                            <textarea name="features" value={formData.features} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Интеграции</label>
                            <textarea name="integrations" value={formData.integrations} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div className="flex justify-between pt-4">
                            <button onClick={handleBack} className="text-gray-600">← Назад</button>
                            <button onClick={handleNext} className="px-6 py-2 bg-red-600 text-white rounded-full">Далее</button>
                        </div>
                    </div>
                )}

                {step === 5 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block font-medium mb-1">Фирменный стиль</label>
                            <input name="style" value={formData.style} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Желаемый визуал</label>
                            <input name="visual" value={formData.visual} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div className="flex justify-between pt-4">
                            <button onClick={handleBack} className="text-gray-600">← Назад</button>
                            <button onClick={handleNext} className="px-6 py-2 bg-red-600 text-white rounded-full">Далее</button>
                        </div>
                    </div>
                )}

                {step === 6 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block font-medium mb-1">Платформы</label>
                            <input name="platforms" value={formData.platforms} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Предпочтения по технологиям</label>
                            <input name="technologies" value={formData.technologies} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div className="flex justify-between pt-4">
                            <button onClick={handleBack} className="text-gray-600">← Назад</button>
                            <button onClick={handleNext} className="px-6 py-2 bg-red-600 text-white rounded-full">Далее</button>
                        </div>
                    </div>
                )}

                {step === 7 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block font-medium mb-1">Когда запуск MVP?*</label>
                            <input name="launchDate" value={formData.launchDate} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Ориентировочный бюджет*</label>
                            <input name="budget" value={formData.budget} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                        <div className="flex justify-between pt-4">
                            <button onClick={handleBack} className="text-gray-600">← Назад</button>
                            <button onClick={handleSubmit} className="px-6 py-2 bg-green-600 text-white rounded-full">Отправить</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;