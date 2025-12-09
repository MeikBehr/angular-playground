# Angular Playground – Meik Behr

## **Project Overview**

This repository contains my personal **Angular 18 playground**, used for learning, experimenting, and deeply understanding Angular features.

The purpose of this project is **educational only**. It is not related to the Developer Akademie (DA) and represents my own structured learning environment.

All documentation inside the project (under `/docs`) is written in **German**, because I learn and understand technical concepts more clearly in my native language.

The README is intentionally **English**, to keep the project understandable for international viewers.

---

## **Purpose of This Repository**

* Build a clean, modular Angular project structure.
* Recreate and extend exercises from Udemy and personal study.
* Explore Angular concepts step by step:

  * Standalone Components
  * Routing
  * Bindings
  * Directives
  * Control Flow
  * Component communication
  * Forms
  * Services & Dependency Injection
  * (Later) Signals, Guards, Feature modules
* Serve as a **reference and documentation hub** for future Angular projects.

---

## **Project Structure**

```
angular-playground/
 ├─ src/
 │   ├─ app/
 │   │   ├─ shared/        # Header, Footer, reusable layout components
 │   │   ├─ pages/         # Individual pages (Fundamentals, Bindings, Directives ...)
 │   │   ├─ app.routes.ts  # Routing configuration
 │   │   └─ app.config.ts  # Angular application configuration
 │   └─ index.html
 ├─ docs/                  # Project documentation (.md files in German)
 │   └─ how_to_create_components_and_register_them.md
 ├─ README.md              # You are here
 └─ angular.json
```

---

## **Live Demo**

This project is not intended for public deployment, since it is a learning playground.
Run it locally via `ng serve`.

---

## **Key Features**

* Angular 18 with Standalone Components
* Clean routing architecture
* Layout components (header, footer)
* Multiple topic-based pages under `/pages`
* Educational documentation under `/docs`
* Focus on clarity, maintainability, and understanding

---

## **How to Run Locally**

1. **Clone repository**

```
git clone git@github.com:MeikBehr/angular-playground.git
```

2. **Install dependencies**

```
npm install
```

3. **Start development server**

```
ng serve
```

Then open:

```
http://localhost:4200/
```

---

## **Notes About Language**

* **README.md** → English
* **Documentation (/docs)** → German

This is intentional and reflects my learning preference.

---

## **Future Plans**

* Add more topic pages (bindings, directives, control flow, forms ...)
* Expand `/docs` with step‑by‑step learning notes
* Build mini-demo features for each Angular concept
* Evaluate additional architectural patterns

---

## **Credits**

Created by **Meik Behr** (2025) as part of personal study and professional development.

If you find this repository and want to give feedback or suggestions, feel free to open an issue.

---

## License
This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.
