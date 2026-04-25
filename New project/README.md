# SQTI persona assets

This folder contains a frontend-ready SQTI persona image map.

## React usage

```jsx
import PersonaCard from "./src/components/PersonaCard";
import "./src/components/PersonaCard.css";

export default function ResultPage({ userPersona }) {
  return <PersonaCard personaCode={userPersona} />;
}
```

The backend only needs to return the SQTI code, for example `SEHC`, `SICL`, or `NEPC`. The frontend reads the image, name, and description from `src/data/personaMap.js`.

## WeChat mini program usage

Use `src/data/personaMap.wechat.js` if the assets are copied to:

```text
/assets/personas/SEHC.png
```

Then bind the image path from the returned persona:

```js
import { getPersona } from "./src/data/personaMap.wechat";

const persona = getPersona("SEHC");
```
