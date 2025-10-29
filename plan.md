🚀 ПРОМПТ ДЛЯ ГЕНЕРАЦИИ ЛЕНДИНГА DEXSAFE WALLET PRO
ЗАДАЧА: Сгенерировать полный код для одностраничного, адаптивного лендинга-презентации проекта "DexSafe Wallet Pro".

ТЕХНОЛОГИЧЕСКИЙ СТЕК:

Фреймворк: React (без Next.js)

Язык: TypeScript

Стилизация: Tailwind CSS 3.4.0

Анимации: Framer Motion

Навигация по странице: React Scroll

Иконки: Lucide React

ОСНОВНАЯ ЦЕЛЬ ЛЕНДИНГА: Презентовать проект инвесторам, биржам (CEX) и L1/L2-фондам. Продать не "идею", а "готовый frontend-продукт, экономящий 6 месяцев R&D".

КЛЮЧЕВОЕ УТП (УСИЛИТЬ): Главный актив проекта — UPA Engine (Universal Payment Agent). Это необходимо позиционировать как "Систему Быстрых Платежей (СБП) для мира Web3". Это не просто "обмен", это интеллектуальная, AI-адаптивная маршрутизация платежей между любыми сетями и пользователями, аналог СБП в банковской сфере.

🎨 ЭТАП 1: НАСТРОЙКА ПРОЕКТА И ДИЗАЙН-СИСТЕМЫ
1.1. Установка зависимостей
Bash

# Core

npm install react react-dom
npm install -D typescript @types/react @types/react-dom

# Styling & Animation

npm install tailwindcss@3.4.0 postcss autoprefixer
npm install framer-motion lucide-react

# Page Navigation

npm install react-scroll
npm install -D @types/react-scroll
1.2. Конфигурация Tailwind (tailwind.config.js)
Используй дизайн-систему из файла README_plan.md.

JavaScript

/** @type {import('tailwindcss').Config} \*/
export default {
content: ["./index.html", "./src/**/\*.{js,ts,jsx,tsx}"],
theme: {
extend: {
// Цвета из дизайн-системы DexSafe (README_plan.md)
colors: {
'c-bg-primary': '#12141A', // Основной фон
'c-bg-secondary': '#1A1D25', // Фон карточек
'c-bg-tertiary': '#2A2D35', // Hover, границы
'c-text-primary': '#E5E7EB', // Основной текст
'c-text-secondary': '#9CA3AF', // Вторичный текст
'c-text-tertiary': '#6B7280', // Подписи
'c-primary': '#00E0BE', // Акцент (бирюзовый)
'c-primary-hover': '#00C4A7', // Акцент hover
'c-success': '#10B981',
'c-danger': '#EF4444',
'c-border': '#2A2D35',
},
// Шрифты (из README_plan.md)
fontFamily: {
sans: ['Inter', '-apple-system', 'sans-serif'],
},
// Радиусы (из README_plan.md)
borderRadius: {
'sm': '8px',
'md': '12px',
'lg': '16px',
'xl': '20px',
'2xl': '24px',
},
// Анимация для градиентного текста
keyframes: {
hue: {
'0%': { filter: 'hue-rotate(0deg)' },
'100%': { filter: 'hue-rotate(360deg)' },
},
},
animation: {
hue: 'hue 6s linear infinite',
},
},
},
plugins: [],
}
1.3. Базовые стили (src/index.css)
CSS

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
body {
@apply bg-c-bg-primary text-c-text-primary antialiased;
font-family: 'Inter', sans-serif;
}

html {
scroll-behavior: smooth;
}
}

/_ Кастомный scrollbar (из README_plan.md) _/
::-webkit-scrollbar {
width: 6px;
}
::-webkit-scrollbar-track {
background: var(--c-bg-secondary);
}
::-webkit-scrollbar-thumb {
background: var(--c-border);
border-radius: 3px;
}
📁 ЭТАП 2: СТРУКТУРА ФАЙЛОВ ПРОЕКТА
src/
├── assets/
│ ├── (Папка для 3D-графики, которую добавит пользователь)
│ ├── hero-graphic.png # Placeholder 1
│ ├── upa-diagram.png # Placeholder 2
│ └── roadmap-graphic.png # Placeholder 3
├── components/
│ ├── sections/
│ │ ├── 0_Header.tsx
│ │ ├── 1_HeroSection.tsx
│ │ ├── 2_ProblemSection.tsx
│ │ ├── 3_SolutionSection.tsx
│ │ ├── 4_UpaSection.tsx
│ │ ├── 5_FeaturesTable.tsx
│ │ ├── 6_StatusSection.tsx
│ │ ├── 7_RoadmapSection.tsx
│ │ └── 8_ContactSection.tsx
│ ├── common/
│ │ ├── AnimatedSection.tsx # Обертка для анимации при скролле
│ │ ├── Button.tsx # Кастомная кнопка
│ │ └── Card.tsx # Кастомная карточка
│ └── Container.tsx # Контейнер для ограничения ширины
├── App.tsx
├── main.tsx
└── index.css
Component ЭТАП 3: РЕАЛИЗАЦИЯ КОМПОНЕНТОВ
3.1. src/components/common/Button.tsx
(Код из README_plan.md, Шаг 2.1, адаптированный)

TypeScript

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
variant?: 'primary' | 'secondary' | 'outline'
loading?: boolean
children: ReactNode
}

export const Button = ({
variant = 'primary',
loading = false,
disabled,
children,
className = '',
...props
}: ButtonProps) => {
const variants = {
primary: 'bg-c-primary hover:bg-c-primary-hover text-c-bg-primary font-bold',
secondary: 'bg-c-bg-secondary hover:bg-c-bg-tertiary text-c-text-primary',
outline: 'border border-c-border hover:border-c-primary text-c-text-primary',
}

return (
<motion.button
whileHover={{ scale: disabled ? 1 : 1.02 }}
whileTap={{ scale: disabled ? 1 : 0.98 }}
className={`       ${variants[variant]}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
        px-6 py-3 rounded-md font-medium transition-all duration-200
        flex items-center justify-center gap-2
        ${className}
    `}
disabled={disabled || loading}
{...props} >
{loading && <Loader2 className="w-5 h-5 animate-spin" />}
{children}
</motion.button>
)
}
3.2. src/components/common/Card.tsx
(Код из README_plan.md, Шаг 2.2, адаптированный)

TypeScript

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
children: ReactNode
className?: string
onClick?: () => void
}

export const Card = ({ children, className = '', onClick }: CardProps) => {
return (

<div
className={`        bg-c-bg-secondary
        rounded-xl
        p-6
        border border-c-border
        ${onClick ? 'cursor-pointer hover:bg-c-bg-tertiary transition-colors' : ''}
        ${className}
     `}
onClick={onClick} >
{children}
</div>
)
}
3.3. src/components/Container.tsx
TypeScript

import { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
return (

<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
{children}
</div>
)
}
3.4. src/components/common/AnimatedSection.tsx
TypeScript

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedSectionProps {
children: ReactNode
className?: string
id?: string
}

export const AnimatedSection = ({ children, className = '', id }: AnimatedSectionProps) => {
return (
<motion.section
id={id}
className={`py-20 sm:py-28 ${className}`}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.6, ease: 'easeOut' }} >
<Container>
{children}
</Container>
</motion.section>
)
}
3.5. src/App.tsx (Сборка лендинга)
TypeScript

import { Header } from './components/sections/0_Header'
import { HeroSection } from './components/sections/1_HeroSection'
import { ProblemSection } from './components/sections/2_ProblemSection'
import { SolutionSection } from './components/sections/3_SolutionSection'
import { UpaSection } from './components/sections/4_UpaSection'
import { FeaturesTable } from './components/sections/5_FeaturesTable'
import { StatusSection } from './components/sections/6_StatusSection'
import { RoadmapSection } from './components/sections/7_RoadmapSection'
import { ContactSection } from './components/sections/8_ContactSection'

function App() {
return (

<main className="flex flex-col min-h-screen">
<Header />
<HeroSection />
<ProblemSection />
<SolutionSection />
<UpaSection />
<FeaturesTable />
<StatusSection />
<RoadmapSection />
<ContactSection />
</main>
)
}

export default App
📖 ЭТАП 4: СЕКЦИИ ЛЕНДИНГА (КОНТЕНТ И СТРУКТУРА)
4.1. src/components/sections/0_Header.tsx
TypeScript

import { Link } from 'react-scroll'
import { Container } from '../Container'

const navItems = [
{ label: 'Проблема', to: 'problem' },
{ label: 'Решение', to: 'solution' },
{ label: 'UPA Engine', to: 'upa' },
{ label: 'Статус', to: 'status' },
{ label: 'Roadmap', to: 'roadmap' },
{ label: 'Контакт', to: 'contact' },
]

export const Header = () => {
return (

<header className="sticky top-0 z-50 w-full bg-c-bg-primary/70 backdrop-blur-md border-b border-c-border">
<Container>
<div className="flex items-center justify-between h-20">
{/_ Logo _/}
<Link to="hero" smooth={true} duration={500} className="cursor-pointer">
<h1 className="text-2xl font-bold text-c-text-primary">
DexSafe<span className="text-c-primary">.Pro</span>
</h1>
</Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80} // Смещение из-за sticky header
                className="text-c-text-secondary hover:text-c-primary font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>

)
}
4.2. src/components/sections/1_HeroSection.tsx
TypeScript

import { AnimatedSection } from '../common/AnimatedSection'
import { Button } from '../common/Button'
import { ArrowDown } from 'lucide-react'
import { Link } from 'react-scroll'

export const HeroSection = () => {
return (
<AnimatedSection id="hero" className="pt-32 sm:pt-40">

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
{/_ Левая часть: Текст _/}
<div className="text-center md:text-left">
<h1 className="text-4xl md:text-6xl font-extrabold text-c-text-primary leading-tight">
Web3-кошелек, который
<span className="block text-c-primary">
_думает_ за вас.
</span>
</h1>
<p className="mt-6 text-xl text-c-text-secondary max-w-lg mx-auto md:mx-0">
Представляем **UPA Engine**: Ваша персональная
<span className="text-c-text-primary font-medium"> Система Быстрых Платежей (СБП) </span>
для мира блокчейна.
</p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
<Link to="problem" smooth={true} duration={500} offset={-80}>
<Button variant="primary" className="w-full sm:w-auto">
<ArrowDown className="w-5 h-5 mr-2" />
Узнать больше
</Button>
</Link>
</div>
</div>

        {/* Правая часть: Визуал */}
        <div className="flex items-center justify-center">
          {/*
            PLACEHOLDER: Здесь должна быть ваша 3D-графика в стиле "TOT" (0.jpg).
            Например, 3D-модель кошелька или логотипа DexSafe.
          */}
          <div className="w-full h-80 bg-c-bg-secondary rounded-2xl flex items-center justify-center">
            <span className="text-c-text-tertiary">[Placeholder: 3D Hero Graphic]</span>
          </div>
        </div>
      </div>
    </AnimatedSection>

)
}
4.3. src/components/sections/2_ProblemSection.tsx
TypeScript

import { AnimatedSection } from '../common/AnimatedSection'
import { Card } from '../common/Card'
import { AlertTriangle, Layers, ZapOff } from 'lucide-react'

const problems = [
{
icon: Layers,
title: 'Фрагментация и Сложность',
text: 'Десятки сетей, мостов и токенов. Пользователь теряется в технических деталях, что является главным барьером для массового внедрения.',
},
{
icon: ZapOff,
title: '"Тупые" кошельки',
text: 'Существующие кошельки (MetaMask) — это пассивные исполнители. Они не отвечают на вопрос: "Как мне *лучше* отправить $100 из сети А в сеть Б?"',
},
{
icon: AlertTriangle,
title: 'Высокие риски и барьеры',
text: 'Комиссии, "gas", фишинговые адреса, неоптимальные свопы. Пользователь теряет деньги на каждом шагу, не имея помощника.',
},
]

export const ProblemSection = () => {
return (
<AnimatedSection id="problem" className="bg-c-bg-secondary">

<div className="text-center">
<h2 className="text-c-text-tertiary text-sm font-bold uppercase tracking-widest">
Проблема
</h2>
<p className="mt-3 text-3xl md:text-4xl font-extrabold text-c-text-primary">
Web3 все еще сложный. Мы это исправили.
</p>
</div>

      {/* Сетка проблем в стиле 8.jpg */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((problem) => {
          const Icon = problem.icon
          return (
            <Card key={problem.title} className="bg-c-bg-primary">
              <div className="flex items-center justify-center w-12 h-12 bg-c-primary/10 rounded-lg mb-5">
                <Icon className="w-6 h-6 text-c-primary" />
              </div>
              <h3 className="text-xl font-bold text-c-text-primary mb-3">
                {problem.title}
              </h3>
              <p className="text-c-text-secondary">{problem.text}</p>
            </Card>
          )
        })}
      </div>
    </AnimatedSection>

)
}
4.4. src/components/sections/3_SolutionSection.tsx
TypeScript

import { AnimatedSection } from '../common/AnimatedSection'
import { Card } from '../common/Card'
import { ShieldCheck, Leaf, TrendingUp, Send } from 'lucide-react'

const features = [
{ icon: ShieldCheck, title: 'Банковский Уровень Безопасности', text: '100% некастодиальность. Ключи шифруются (AES-256) и хранятся только у вас.' },
{ icon: Send, title: 'Telegram Mini App', text: 'Встроенный кошелек в Telegram для мгновенного доступа к аудитории SocialFi.' },
{ icon: Leaf, title: 'X1 EcoChain First', text: 'Приоритет экологичного блокчейна с низкими выбросами CO₂.' },
{ icon: TrendingUp, title: 'DeFi & RWA Hub', text: 'Готовый UI для P2P-кредитования и торговли токенизированными активами (ЦФА).' },
]

export const SolutionSection = () => {
return (
<AnimatedSection id="solution">

<div className="text-center">
<h2 className="text-c-text-tertiary text-sm font-bold uppercase tracking-widest">
Решение
</h2>
<p className="mt-3 text-3xl md:text-4xl font-extrabold text-c-text-primary">
DexSafe: Интеллектуальный ассистент
</p>
<p className="mt-4 text-lg text-c-text-secondary max-w-3xl mx-auto">
Мы создали не просто кошелек, а интеллектуального финансового помощника,
который делает Web3 простым, безопасным и экологичным.
</p>
</div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title}>
              <Icon className="w-8 h-8 text-c-primary mb-4" />
              <h3 className="text-lg font-bold text-c-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-c-text-secondary">{feature.text}</p>
            </Card>
          )
        })}
      </div>
    </AnimatedSection>

)
}
4.5. src/components/sections/4_UpaSection.tsx
(!! ВАЖНЕЙШАЯ СЕКЦИЯ !!)

TypeScript

import { AnimatedSection } from '../common/AnimatedSection'
import { Card } from '../common/Card'
import { BrainCircuit, Zap, CheckCircle } from 'lucide-react'

const upaSteps = [
{
icon: BrainCircuit,
title: '1. ИИ-Анализ',
text: 'Вы вводите адрес. UPA Engine анализирует его: "Это биржа? Частный кошелек? Какую сеть он предпочитает?"',
},
{
icon: Zap,
title: '2. Мульти-Маршрутизация',
text: 'Движок в реальном времени рассчитывает 10+ маршрутов (свопы, мосты, L2) для вашей транзакции.',
},
{
icon: CheckCircle,
title: '3. Оптимальный Путь',
text: 'UPA предлагает вам ОДИН, самый дешевый, быстрый и экологичный маршрут. Превращая 5 кликов в 1.',
},
]

export const UpaSection = () => {
return (
<AnimatedSection id="upa" className="bg-c-bg-secondary">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
{/_ Левая часть: Визуал _/}
<div className="flex items-center justify-center">
{/_
PLACEHOLDER: Здесь должна быть ваша 3D-графика или диаграмма.
Например, Сеть А -> (UPA Engine) -> Сеть Б
_/}
<div className="w-full h-96 bg-c-bg-primary rounded-2xl flex items-center justify-center border border-c-border">
<span className="text-c-text-tertiary">[Placeholder: UPA Diagram]</span>
</div>
</div>

        {/* Правая часть: Текст (АКЦЕНТ) */}
        <div>
          <h2 className="text-c-primary text-sm font-bold uppercase tracking-widest">
            Наш главный актив (УТП)
          </h2>
          <p className="mt-3 text-3xl md:text-5xl font-extrabold text-c-text-primary leading-tight">
            UPA Engine:
          </p>
          <p className="mt-2 text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-c-primary to-green-400 bg-clip-text text-transparent animate-hue">
            СБП для Блокчейна
          </p>
          <p className="mt-6 text-lg text-c-text-secondary">
            Забудьте о сетях, мостах и газе. UPA (Universal Payment Agent) —
            это ваш интеллектуальный помощник, который делает кросс-чейн переводы
            такими же простыми, как банковский перевод.
          </p>

          <div className="mt-10 space-y-6">
            {upaSteps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-c-bg-primary rounded-lg flex items-center justify-center border border-c-border">
                    <Icon className="w-5 h-5 text-c-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-c-text-primary">{step.title}</h4>
                    <p className="text-sm text-c-text-secondary">{step.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>

)
}
4.6. src/components/sections/5_FeaturesTable.tsx
(Стиль таблицы из 6.jpg)

TypeScript

import { AnimatedSection } from '../common/AnimatedSection'
import { Check, X } from 'lucide-react'

const features = [
{ name: 'UPA Engine (СБП)', dexsafe: true, metamask: false, trust: false },
{ name: 'Интеграция RWA (ЦФА)', dexsafe: 'ui', metamask: false, trust: false },
{ name: 'DeFi Lending Hub', dexsafe: 'ui', metamask: false, trust: 'partial' },
{ name: 'Фокус на Eco-Chain', dexsafe: true, metamask: false, trust: false },
{ name: 'Нативность в Telegram', dexsafe: true, metamask: false, trust: false },
{ name: 'Геймификация (SocialFi)', dexsafe: 'ui', metamask: false, trust: 'partial' },
]

const renderCheck = (value: boolean | string) => {
if (value === true) {
return <Check className="w-6 h-6 text-c-primary" />
}
if (value === 'ui') {
return <span className="text-c-primary font-bold text-sm">UI Готов</span>
}
if (value === 'partial') {
return <span className="text-c-text-tertiary">Частично</span>
}
return <X className="w-6 h-6 text-c-text-tertiary" />
}

export const FeaturesTable = () => {
return (
<AnimatedSection id="features">

<div className="text-center">
<h2 className="text-c-text-tertiary text-sm font-bold uppercase tracking-widest">
Конкурентный анализ
</h2>
<p className="mt-3 text-3xl md:text-4xl font-extrabold text-c-text-primary">
Почему мы уникальны
</p>
</div>

      <div className="mt-16 overflow-x-auto">
        <table className="w-full min-w-lg text-left">
          <thead>
            <tr className="border-b border-c-border">
              <th className="py-4 text-c-text-primary font-bold">Фича</th>
              <th className="py-4 text-center text-c-text-primary font-bold">
                DexSafe.Pro
              </th>
              <th className="py-4 text-center text-c-text-primary font-bold">
                MetaMask
              </th>
              <th className="py-4 text-center text-c-text-primary font-bold">
                Trust Wallet
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx} className="border-b border-c-border">
                <td className="py-5 font-medium text-c-text-primary">
                  {feature.name}
                </td>
                <td className="py-5 flex justify-center">
                  {renderCheck(feature.dexsafe)}
                </td>
                <td className="py-5 text-center">
                  {renderCheck(feature.metamask)}
                </td>
                <td className="py-5 text-center">
                  {renderCheck(feature.trust)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AnimatedSection>

)
}
4.7. src/components/sections/6_StatusSection.tsx
(Данные из README.md)

TypeScript

import { AnimatedSection } from '../common/AnimatedSection'
import { Card } from '../common/Card'
import { CheckCircle, Clock } from 'lucide-react'

const done = [
'Ядро кошелька (100%)',
'Безопасное хранение (AES)',
'Отправка/Получение XEC',
'Полная Дизайн-Система',
'Оптимизация (Code Splitting)',
]

const uiReady = [
'UPA Engine (Frontend + API)',
'DeFi Hub (Mock-данные)',
'Геймификация (Mock-данные)',
'Список токенов (Mock-данные)',
'Тесты (Написаны, но нестабильны)',
]

export const StatusSection = () => {
return (
<AnimatedSection id="status" className="bg-c-bg-secondary">

<div className="text-center">
<h2 className="text-c-text-tertiary text-sm font-bold uppercase tracking-widest">
Текущий Статус
</h2>
<p className="mt-3 text-3xl md:text-4xl font-extrabold text-c-text-primary">
Готовый продукт, а не идея
</p>
<p className="mt-4 text-lg text-c-text-secondary max-w-3xl mx-auto">
Вы получаете готовый, безопасный и оптимизированный Frontend-продукт,
экономя **минимум 6 месяцев** работы R&D-команды.
</p>
</div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Колонка "Реализовано" */}
        <Card className="bg-c-bg-primary">
          <h3 className="flex items-center gap-3 text-2xl font-bold text-c-success">
            <CheckCircle className="w-7 h-7" />
            ✅ Реализовано
          </h3>
          <ul className="mt-6 space-y-4">
            {done.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-c-success flex-shrink-0 mt-1" />
                <span className="text-c-text-primary">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Колонка "Нужен Backend" */}
        <Card>
          <h3 className="flex items-center gap-3 text-2xl font-bold text-c-primary">
            <Clock className="w-7 h-7" />
            🟠 UI Готов (Нужен Backend)
          </h3>
          <ul className="mt-6 space-y-4">
            {uiReady.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-c-primary flex-shrink-0 mt-1" />
                <span className="text-c-text-primary">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </AnimatedSection>

)
}
4.8. src/components/sections/7_RoadmapSection.tsx
(Вдохновлено 9.jpg и 12.jpg, данные из README_plan.md)

TypeScript

import { AnimatedSection } from '../common/AnimatedSection'
import { Rocket, Server, LayoutTemplate, Smartphone } from 'lucide-react'

const roadmap = [
{
icon: Server,
title: 'Фаза 1: Backend & UPA API',
text: 'Реализация бэкенд-логики UPA Engine, развертывание смарт-контрактов для DeFi и геймификации.',
},
{
icon: LayoutTemplate,
title: 'Фаза 2: Browser Extension',
text: 'Портирование функционала в расширение для Chrome, Firefox и Brave. Синхронизация с Mini App.',
},
{
icon: Smartphone,
title: 'Фаза 3: Mobile Native',
text: 'Запуск полноценных нативных приложений для iOS и Android для максимального охвата аудитории.',
},
{
icon: Rocket,
title: 'Фаза 4: P2P & Advanced',
text: 'Запуск P2P Маркетплейса, интеграция NFT, стейкинга и поддержки аппаратных кошельков.',
},
]

export const RoadmapSection = () => {
return (
<AnimatedSection id="roadmap">

<div className="text-center">
<h2 className="text-c-text-tertiary text-sm font-bold uppercase tracking-widest">
План развития
</h2>
<p className="mt-3 text-3xl md:text-4xl font-extrabold text-c-text-primary">
Масштабирование от MVP до Экосистемы
</p>
</div>

      {/* Горизонтальная/Вертикальная Дорожная карта */}
      <div className="mt-20">
        <div className="relative">
          {/* Линия (видна на md+) */}
          <div className="hidden md:block absolute left-1/2 top-5 bottom-5 w-0.5 bg-c-border -translate-x-1/2" />

          {/* Линия (видна на sm) */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-c-border -translate-x-1/2" />

          <div className="space-y-16">
            {roadmap.map((item, index) => {
              const Icon = item.icon
              const isOdd = index % 2 !== 0
              return (
                <div
                  key={item.title}
                  className={`md:flex items-center md:relative ${isOdd ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Контент */}
                  <div className={`md:w-1/2 ${isOdd ? 'md:pl-16' : 'md:pr-16'} md:ml-0 ml-12`}>
                    <Card className="relative">
                      <h3 className="text-xl font-bold text-c-primary mb-3">
                        {item.title}
                      </h3>
                      <p className="text-c-text-secondary">{item.text}</p>
                    </Card>
                  </div>

                  {/* Иконка на линии */}
                  <div className="absolute left-5 md:left-1/2 top-0 -translate-x-1/2">
                    <div className="w-10 h-10 bg-c-primary rounded-full flex items-center justify-center ring-8 ring-c-bg-primary">
                      <Icon className="w-5 h-5 text-c-bg-primary" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>

)
}
4.9. src/components/sections/8_ContactSection.tsx
TypeScript

import { AnimatedSection } from '../common/AnimatedSection'
import { Button } from '../common/Button'
import { Send } from 'lucide-react'

export const ContactSection = () => {
return (
<AnimatedSection id="contact" className="bg-c-bg-secondary">

<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-extrabold text-c-text-primary">
Заинтересованы в проекте?
</h2>
<p className="mt-4 text-lg text-c-text-secondary">
DexSafe Pro — это идеальный "ускоритель" для L1/L2 фондов,
бирж (CEX) или венчурных инвесторов, желающих захватить
самый быстрорастущий рынок Web3 — Telegram.
</p>
<div className="mt-10">
<Button
variant="primary"
onClick={() => window.location.href = 'mailto:contact@dexsafe.pro'} >
<Send className="w-5 h-5 mr-2" />
Связаться с нами
</Button>
</div>

        {/* Замените на свои контакты */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-c-text-secondary">
          <span>contact@dexsafe.pro</span>
          <span>•</span>
          <span>Telegram: @dexsafe_contact</span>
        </div>
      </div>
    </AnimatedSection>

)
}
Текущая структура — уже идеальная по смыслу и UX, теперь наша задача — сделать UI/анимации и визуал современными, хайповыми и "умными", в духе проектов вроде Worldcoin, LayerZero, Uniswap X, Zapper, и L2.foundation.

Ниже я даю расширенный, улучшенный промпт (v2), где подробно описаны:

🎨 визуальные стили (фон, цвета, композиция)

🧠 анимации (Framer Motion)

🧩 уникальные детали для каждой секции

🪄 идеи по 3D, изображениям и hover-эффектам

💬 гайд по типографике и motion-направлению

⚡️ PROMPT v2 — DexSafe Wallet Pro (UI + Motion Enhanced)
🏗 ЭТАП 1. Общие визуальные принципы

Цель: стиль уровня AI/Fintech стартапа 2025: минимализм, градиенты, неон, плавные анимации.

Фон:
Градиентная глубина с мягкими шумами и subtle glow.
background: radial-gradient(ellipse at top, #1b1f28 0%, #0d0f13 100%);

Тени:
Мягкие, размазанные:
shadow-[0_0_20px_rgba(0,224,190,0.15)]

Акцент:
Бирюзово-лаймовый градиент:
bg-gradient-to-r from-c-primary to-emerald-400

Hover Glow:
hover:shadow-[0_0_20px_rgba(0,224,190,0.3)]

Типографика:

Заголовки → font-extrabold tracking-tight

Подзаголовки → uppercase text-sm tracking-widest text-c-text-tertiary

Описания → text-lg text-c-text-secondary leading-relaxed

Motion-направление:
Каждый блок выезжает с разных направлений: y (вверх), x (слева/справа), легкая scaleIn.

Blur-фон для карточек и хедера: backdrop-blur-xl bg-c-bg-secondary/70

🧩 ЭТАП 2. Дизайн каждой секции (UI + Motion + Styling) 0. Header

Фиксированная полупрозрачная панель с градиентной линией снизу:

border-image: linear-gradient(to right, #00e0be, #00ffa2) 1;

Hover для пунктов меню: подчеркивание световым акцентом (анимация подчеркивания снизу).

При скролле — лёгкий fade и уменьшение высоты (Framer Motion useScroll).

1. HeroSection

🎯 Главный эмоциональный блок (“wow-эффект”).

Визуал:

Большой неон-глоу-текст с motion-градиентом (Framer Motion + bg-clip-text).

Добавь Parallax-анимацию 3D-графики: легкое вращение при скролле.

Под текстом — плавно пульсирующее “Highlight Glow” пятно:

<div className="absolute -z-10 blur-3xl opacity-30 bg-c-primary/40 w-[600px] h-[600px] rounded-full animate-pulse"></div>

Motion:

Заголовок: initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}

Кнопка: whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00e0be' }}

Tip:
Если ты добавишь 3D-модель кошелька — сделай её медленно вращающейся на hover через <motion.img animate={{ rotateY: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>.

2. ProblemSection

🎯 Контраст, "тёмная правда" Web3.

Визуал:

Фон: bg-gradient-to-b from-c-bg-primary to-c-bg-secondary

Карточки: border border-c-border/50 hover:border-c-primary/40

Hover-анимация: shake/tilt при наведении (whileHover={{ rotateZ: 1.5 }})

Иконки заменить на минимальные контурные (1 иконка на весь ряд, не по карточке).

Motion:

Sequential delay (каждая карточка появляется с шагом 0.1s).

3. SolutionSection

🎯 Контраст после “проблемы” — свет, чистота, интеллект.

Визуал:

Фон светлее (bg-c-bg-primary)

Добавь светящиеся разделительные линии между карточками (divide-x divide-c-border/30)

Карточки — hover:translate-y-[-4px] hover:shadow-[0_0_25px_rgba(0,224,190,0.2)]

Иконки: голографические или soft gradient (text-transparent bg-clip-text bg-gradient-to-r from-c-primary to-emerald-400)

Motion:

Вылетают снизу + плавное увеличение scale: 0.9 → 1.

4. UPA Section (Main USP)

🔥 Главный фокус, должен ощущаться как “reveal продукта”.

Визуал:

Фон: linear-gradient(135deg, #101217 0%, #181b22 100%)

Слева — диаграмма (UPA Flow), можно вставить PNG с сетями и стрелками.

Справа — крупный motion-текст:

“СБП для Блокчейна” → анимированный градиент-поток (animate-hue)

Добавь светящийся line highlight под заголовком (glow line).

Motion:

Блок текста “UPA Engine” с эффектом text reveal (mask animation)

Каждая ступень (ИИ-Анализ, Мульти-Маршрутизация, Оптимальный Путь) выезжает с fade справа.

5. FeaturesTable

🎯 Должно быть “инфографика + clarity”.

Визуал:

Таблица → "glass effect" (bg-white/5 backdrop-blur-md)

При наведении на строку → мягкий свет по строке (hover:bg-c-bg-tertiary/40)

Заголовок “Почему мы уникальны” — центрирован с подчеркиванием светом.

Motion:

Table fade-in снизу, каждая строка поочерёдно (0.05s delay per row).

6. StatusSection

🎯 Должно транслировать “готовый продукт”, уверенность.

Визуал:

Две колонки → полупрозрачные стеклянные карточки.

Левая зелёная подсветка (border-l-4 border-c-success)

Правая бирюзовая (border-l-4 border-c-primary)

Добавь progress bar вверху (например, "70% готово")

<div className="w-full h-1 bg-c-border rounded-full overflow-hidden">
  <motion.div className="h-1 bg-c-primary" initial={{ width: 0 }} animate={{ width: '70%' }} transition={{ duration: 1 }} />
</div>

7. RoadmapSection

🎯 Motion timeline.

Визуал:

Центральная вертикальная линия — светящаяся неоновая полоса.

Иконки в точках пульсируют (animate-pulse)

Карточки поочерёдно вылетают с противоположных сторон.

Добавь мягкое “glow ring” позади иконок.

8. ContactSection

🎯 Финальный call-to-action (Investors / Partners).

Визуал:

Фон: bg-gradient-to-b from-c-bg-secondary to-c-bg-primary

Центр: светящийся “контактный шар” с тенью (подложка glow)

Кнопка — крупная, с обводкой, при hover: ripple-эффект

Контакты — с небольшими иконками (Telegram, Mail)

Motion:

Кнопка “пульсирует” каждые 4 секунды (animate-pulse)

Вся секция появляется с fade-in и легким zoom.

🌈 ЭТАП 3. Анимационные пресеты (Framer Motion)

Добавь в src/lib/motionPresets.ts:

export const fadeInUp = {
initial: { opacity: 0, y: 40 },
whileInView: { opacity: 1, y: 0 },
viewport: { once: true },
transition: { duration: 0.6, ease: 'easeOut' },
}

export const staggerContainer = {
hidden: {},
show: {
transition: { staggerChildren: 0.15 },
},
}

export const fadeInLeft = {
initial: { opacity: 0, x: -60 },
whileInView: { opacity: 1, x: 0 },
transition: { duration: 0.6 },
}

export const fadeInRight = {
initial: { opacity: 0, x: 60 },
whileInView: { opacity: 1, x: 0 },
transition: { duration: 0.6 },
}

🧠 ЭТАП 4. Дополнительно (если хочешь “премиум эффект”)

Подключи Noise overlay (bg-[url('/noise.svg')] opacity-10 fixed top-0 left-0)

Добавь Cursor glow effect: плавающий свет за курсором

В Hero можно добавить motion.parallax() из framer-motion/scroll
