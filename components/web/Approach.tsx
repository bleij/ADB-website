"use client";

import React, {useState, useRef, useEffect} from "react";
import Image from "next/image";

interface AccordionItemProps {
    title: string;
    content: string[];
    defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({title, content, defaultOpen = false}) => {
    const [open, setOpen] = useState(defaultOpen);
    const refContent = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    useEffect(() => {
        if (refContent.current) {
            setMaxHeight(open ? `${refContent.current.scrollHeight}px` : "0px");
        }
    }, [open, content]);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setOpen((v) => !v)}
                className="w-full flex justify-between items-center py-4 text-base font-medium"
            >
                <span>{title}</span>
                <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ease-out ${open ? "rotate-180" : "rotate-0"}`}
                    viewBox="0 0 10 6"
                >
                    <path d="M0 0l5 6 5-6H0z" fill="currentColor"/>
                </svg>
            </button>
            <div
                ref={refContent}
                style={{maxHeight}}
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "opacity-100" : "opacity-0"}`}
            >
                <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                    {content.map((p, i) => (
                        <p key={i} className={i < content.length - 1 ? "mb-2" : ""}>{p}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

// данные с картинками
const strategy = {
    image: "/images/web/strategy.png",
    title: "Стратегия и Проектирование",
    items: [
        {
            title: "Анализ и аудит",
            content: ["Перед стартом мы проводим глубокий анализ вашего бизнеса, ЦА и конкурентов. Определяем цели проекта, приоритеты и ключевые показатели эффективности (KPI), чтобы архитектура и технологии точно соответствовали задачам."]
        },
        {
            title: "Проектирование архитектуры",
            content: ["Проектируем когерентную и надёжную архитектуру приложений и сервисов с учётом масштабирования и отказоустойчивости."]
        },
        {
            title: "Создание дизайн-системы",
            content: ["Разрабатываем единый визуальный язык: компоненты, стили и гайдлайны, чтобы каждый элемент был предсказуем и удобен."]
        },
    ],
};

const development = {
    image: "/images/web/development.png",
    title: "Разработка и Технологии",
    items: [
        {
            title: "FrontEnd",
            content: ["Используем современные фреймворки (React, Next.js, Vue) для создания быстрых, адаптивных интерфейсов. Следим за Web Vitals и высокой производительностью."]
        },
        {
            title: "Backend",
            content: ["Строим надёжные API и серверную логику на Node.js, Python или Go. Обеспечиваем масштабируемость и безопасность данных."]
        },
        {
            title: "DevOps & автоматизация",
            content: ["Настраиваем CI/CD конвейеры, контейнеризацию и мониторинг. Автоматизируем развёртывание и управление инфраструктурой."]
        },
    ],
};

const launch = {
    image: "/images/web/launch.png",
    title: "Запуск и Поддержка",
    items: [
        {
            title: "Тестирование и QA",
            content: ["Проводим модульное, интеграционное и e2e тестирование. Проверяем адаптивность, кроссбраузерность и общую стабильность."]
        },
        {
            title: "SEO и Web Vitals",
            content: ["Оптимизируем сайт или приложение для поисковых систем и метрик Core Web Vitals. Улучшаем время загрузки и взаимодействие."]
        },
        {
            title: "Поддержка и развитие",
            content: ["Обеспечиваем техническую поддержку, регулярные обновления и расширение функциональности по потребностям бизнеса."]
        },
    ],
};

export default function Approach() {
    return (
        <section className="py-20 bg-white font-manrope">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 xl:px-0">
                <h2 className="text-center text-3xl sm:text-4xl font-medium mb-16">От идеи до релиза: наш подход</h2>

                {/* Strategy */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-24">
                    <div className="w-full h-[300px] rounded-2xl overflow-hidden lg:h-[450px] lg:w-1/2">
                        <Image
                            src={strategy.image}
                            alt={strategy.title}
                            width={800}
                            height={600}
                            className="object-contain w-full h-full"
                        />
                        className="object-cover w-full h-full"/>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-xl font-semibold mb-4">{strategy.title}</h3>
                        <div className="space-y-2">
                            {strategy.items.map((item, idx) => (
                                <AccordionItem key={idx} title={item.title} content={item.content}
                                               defaultOpen={idx === 0}/>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Development */}
                <div className="flex flex-col lg:flex-row items-center gap-10 mb-24">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-xl font-semibold mb-4">{development.title}</h3>
                        <div className="space-y-2">
                            {development.items.map((item, idx) => (
                                <AccordionItem key={idx} title={item.title} content={item.content}/>
                            ))}
                        </div>
                    </div>
                    <div className="w-full h-[300px] rounded-2xl overflow-hidden lg:h-[450px] lg:w-1/2">
                        <Image
                            src={development.image}
                            alt={development.title}
                            width={800}
                            height={600}
                            className="object-contain w-full h-full"
                        />
                        className="object-cover w-full h-full"/>
                    </div>
                </div>

                {/* Launch */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                    <div className="w-full h-[300px] rounded-2xl overflow-hidden lg:h-[450px] lg:w-1/2">
                        <Image
                            src={launch.image}
                            alt={launch.title}
                            width={800}
                            height={600}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-xl font-semibold mb-4">{launch.title}</h3>
                        <div className="space-y-2">
                            {launch.items.map((item, idx) => (
                                <AccordionItem key={idx} title={item.title} content={item.content}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}