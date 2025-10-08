# MailFrame Promo

> Лендинг для платформы email-маркетинга MailFrame

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06b6d4?logo=tailwindcss)](https://tailwindcss.com/)

## 🎯 О проекте

MailFrame — это платформа для создания и управления email-рассылками. Этот репозиторий содержит промо-сайт, демонстрирующий возможности сервиса.

### Основные возможности

- 📊 **Дашборд** — основная панель управления кампаниями
- 👥 **Управление контактами** — база подписчиков с сегментацией
- 📧 **Шаблоны писем** — готовые и пользовательские шаблоны
- 🚀 **Email-рассылки** — создание и отправка кампаний
- 📈 **Аналитика** — детальная статистика и анализ результатов
- ⚙️ **Настройки** — гибкая конфигурация сервиса

## 🏗️ Архитектура

Проект построен на **Feature-Sliced Design (FSD)** — архитектурной методологии для масштабируемых фронтенд-приложений.

### Технологический стек

#### Core

- **Next.js 15.5.3** — React-фреймворк с App Router и Pages Router (гибридный подход)
- **React 19.1.0** — библиотека для создания UI
- **TypeScript 5** — типизированный JavaScript
- **Bun** — быстрый пакетный менеджер и runtime

#### Стилизация

- **Tailwind CSS 4.0** — utility-first CSS-фреймворк
- **Shadcn UI** — коллекция переиспользуемых компонентов
- **Radix UI** — примитивы для доступных компонентов
- **Motion (Framer Motion) 12.23** — библиотека анимаций

#### Утилиты

- **next-themes** — управление темами (светлая/темная)
- **Tabler Icons** & **Lucide React** — иконки
- **clsx** & **tailwind-merge** — утилиты для работы с классами
- **rough-notation** — анимированные аннотации

## 🚀 Быстрый старт

### Требования

- **Node.js** 20+ или **Bun** 1.0+
- **Docker** & **Docker Compose** (для контейнеризации)

### Локальная разработка

```bash
# Клонирование репозитория
git clone <repository-url>
cd mailframe-promo

# Установка зависимостей (используется Bun)
bun install

# Запуск dev-сервера с Turbopack
bun run dev

# Приложение доступно по адресу http://localhost:3000
```

### Docker Development

```bash
# Сборка и запуск всех сервисов
docker compose up -d

# Только приложение
docker compose up mailframe-promo -d

# Просмотр логов
docker compose logs -f mailframe-promo

# Остановка
docker compose down
```

### Docker Production

```bash
# Создайте .env файл из примера
cp .env.example .env

# Отредактируйте .env файл
nano .env

# Сборка и запуск production
docker compose -f docker-compose.prod.yml up -d

# Пересборка образа
docker compose -f docker-compose.prod.yml build --no-cache

# Проверка статуса
docker compose -f docker-compose.prod.yml ps

# Просмотр логов
docker compose -f docker-compose.prod.yml logs -f
```

### Дополнительные команды

```bash
# Линтинг кода
bun run lint

# Форматирование кода
bun run format

# Production build (без Docker)
bun run build
bun start
```

## 🤝 Разработка

### Правила коммитов

Следуйте [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: добавлена новая секция на главной
fix: исправлена анимация на мобильных
docs: обновлён README
style: форматирование кода
refactor: рефакторинг компонента Header
```

### Workflow

1. Создайте feature-ветку: `git checkout -b feature/new-section`
2. Внесите изменения следуя FSD-принципам
3. Убедитесь, что код проходит линтинг: `bun run lint`
4. Создайте Pull Request с описанием изменений

## 🔗 Ссылки

### Документация

- [Next.js Documentation](https://nextjs.org/docs)
- [Feature-Sliced Design](https://feature-sliced.design/)

### Технологии

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Bun](https://bun.sh/)
- [Docker](https://docs.docker.com/)

---
