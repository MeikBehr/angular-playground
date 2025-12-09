# How to Create Components and Register Them (Angular 18, Standalone)

Dieses Dokument ist deine **zentrale Schritt-für-Schritt-Anleitung**, wie du im Angular-Playground neue Komponenten und Seiten sauber, professionell und konsistent anlegst.

Es gilt **für jede neue Seite**, die du im Playground erstellst.

---

## ✅ 1. Neue Seite/Komponente erzeugen

Im Projektroot ausführen:

```bash
ng generate component pages/<name> --standalone
```

Beispiel:

```bash
ng generate component pages/fundamentals --standalone
```

Angular erzeugt:

```
src/app/pages/<name>/<name>.component.ts
src/app/pages/<name>/<name>.component.html
src/app/pages/<name>/<name>.component.scss
```

---

## ✅ 2. NICHT in app.component.ts importieren

Eine Page gehört **ausschließlich in das Routing**, nicht in das App-Layout.

`app.component.html` bleibt IMMER unverändert:

```html
<app-header></app-header>

<router-outlet></router-outlet>

<app-footer></app-footer>
```

---

## ✅ 3. Page in die Routen eintragen

Öffne:

```
src/app/app.routes.ts
```

Füge hinzu:

```ts
import { <Name>Component } from './pages/<name>/<name>.component';

export const routes: Routes = [
  { path: '<name>', component: <Name>Component }
];
```

Beispiel:

```ts
import { FundamentalsComponent } from './pages/fundamentals/fundamentals.component';

export const routes: Routes = [
  { path: 'fundamentals', component: FundamentalsComponent }
];
```

**Wichtig:**

* `path: ''` ist die Home-Seite
* alle anderen Pages müssen eigene Pfade haben

---

## ❗ 4. app.config.ts bleibt unverändert

`provideRouter(routes)` muss **nur einmal** gesetzt werden.

`app.config.ts` sieht so aus:

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
```

Du änderst diese Datei nur, wenn Angular es verlangt – nicht für neue Pages.

---

## ✅ 5. Testen

Browser öffnen:

```
http://localhost:4200/<name>
```

Wenn die Seite korrekt geladen wird → perfekt.

---


## 📌 Kurz-Checkliste

1. Komponente erzeugen
2. Page **nicht** in app.component.ts einbinden
3. Page in `app.routes.ts` registrieren
4. `app.config.ts` bleibt wie es ist
5. Testen
6. Committen

---