# Frontendsikkerhet
Dette er en samling med oppgaver for å lære om frontendsikkerthet og selv kjenne på farene.

## Basic setup
Før vi kommer i gang med oppgavene skal vi sette opp et minimalt oppsett som vi kan bruke for å se sikkerhetshull i praksis. 
Sørg for at du har node og npm installert (https://nodejs.org/en/download/) og klon dette prosjektet: `git clone https://github.com/JulieHillRoa/frontendsikkerhet.git`. 
Gå så inn i mappen og kjør `npm i` deretter `npm start` for å kjøre opp applikasjonen.

Presentasjonen med intro til hvert tema finner du her: https://docs.google.com/presentation/d/12WlGY49Ycj4tZOwHrRAaDTMVd8okkMXZCL7BHFW7XOM/edit?usp=sharing

### Utvikling av moderne web applikasjoner
Denne oppgaven går ut på å utforske noen av de sårbare elementene ved utvikling av en webapplikasjon. 
Oppgavene vil være basert på Reactjs, men sikkerhetshullene er ikke nødvendigvis kun tilfelle i React. 

Rammeverket er i utgangspunktet ganske sikkert når det gjelder beskyttelse mot XSS-angrep.
Det er fler tiltak som blir gjort for å hindre angrep, som for eksempel å escape streng-variabler i views automatisk. Et annet tiltak er at  
med JSX sender man en fuksjon som event handler isteden for en streng som kan inneholde ondsinnet kode. 
```js
HTML: 
<button onclick="onButtonClick()">Klikk her</button>

JSX:
<button onClick={ onButtonClick }>Klikk her</button>
```

Vi skal nå gå igjennom 5 oppgaver rundt fallgruver som webutviklere burde vite om. 

#### 🏆Oppgaver
Koden finner du i `src/webapp`. Bruk Chrome for disse oppgavene:

1. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Oppgave1 og følg teksten på siden.
2. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Oppgave2 og følg teksten på siden. 
3. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Oppgave3. Følg lenken og oppgave teksten. 
Ta en titt på koden i `/webapp/Oppgave3.jsx` – her er det din jobb å fikse sikkerhetshullet.
4. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Oppgave4 og følg teksten på siden. 
5. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Oppgave5. 
Prøv å se om du kan få siden til å kjøre `alert("Hacked")`.

<details>
  <summary>🚨Hint 1 </summary>
  
  Ikke forvent at alert-koden blir kjørt før linken er klikket på. Er det noen måte å kjøre javascript-kode på når du er inne i en a-tags href-attributt?
  
</details>
<details>
  <summary>🚨Løsningsforslag 1 </summary>
  
  Én fasit: `javascript:alert("Hacked!")`
        
  Dersom man kommer på en side som validerer mot `javascript:` kan man sende inn base64: f.eks `<script>alert("Hacked!");</script>` encodet:
  ```js  
  data:text/html;base64,YWxlcnQoImhhY2tlZCEiKQ==
  ```
</details>
<br/>
<details>
  <summary>🚨Hint 2 </summary>
  
  &lt;p id=&quot;avsnitt&quot;&gt;
    Ett avsnitt
  &lt;/p&gt;
  <br />
  Basert på brukers handling kan man bytte innholdet i dette p-elemtet ved hjelp av innerHTML:
  <br />
  document.getElementById("avsnitt").innerHTML = "Dette er et annet avsnitt";
  <br />
  
  Ved å sette dangerouslySetInnerHTML-propertien i React vil det si å sette innerHTML og propertien er kalt akkurat dette for en grunn.<br />
  <br />
  Er det noen måte å få innholdet man bytter det ut med til å feile slik at man trigger en event handler?
</details>
<details>
  <summary>🚨Løsningsforslag 2 </summary>
  
Én fasit: `<img onerror=alert("Hacked!") src="feil">`
</details>
<br/>
<details>
  <summary>🚨Hint 3 </summary>
  
  Kan man definere relasjonen mellom siden og nettsiden det er linket til?
</details>
<details>
  <summary>🚨Løsningsforslag 3 </summary>
  
  `rel`-attributtet er viktig å sette på en lenke. Dette er egenskapen som bestemmer relasjonen mellom de to sidene det linkes mellom.
Én fasit: ` <a src="<urlen>" target="_blank" rel="noopener">Klikk her</a>.` Man må gjerne også utbrodere `rel` med `"noreferrer"` og andre verdier som passer på din lenke.

Ref: https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#tabnabbing
</details>
<br/>
<details>
  <summary>🚨Hint 4 </summary>
  
    ```js
    eval('al' + 'er' + 't(\'' + 'Hacked!' + '\')');
    
    om eval kjører her vil den faktisk trigge en alert("Hacked!")
    ```
    
Kan du sende inn noe i inputfeltet slik at den fortsetter å lese kode etter at han har funnet eller ikke funnet propertien til gjest?
    
</details>
<details>
  <summary>🚨Løsningsforslag 4 </summary>
  
Dersom man velger en property som finnes kan man skrive inn: `navn && alert("hacked!")`
eventuelt kan du skrive: `hvaduvil || alert("hacked!")`
    
  Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!
</details>
<br/>
<details>
  <summary>🚨Hint 5 </summary>
  
  Det kan se ut som at tekstfeltet laster data fra localStorage. Tekstfeltet er også veldig dynamisk, det ser nesten ut som at man
  kan sende inn helt vilkårlige props. Det er spesielt en prop som utvikleren er veldig stolt av, hva skjer om den f.eks. endres
  til å være en `div`? Kan det da være mulig å låne triks fra tidligere oppgaver?
</details>
<details>
  <summary>🚨Løsningsforslag 5 </summary>

Her er det ingen validering av props lagret i local storage, vi kan f.eks. gi inn i dev console og lagre følgende:

```json
{  
    "value": "Oops",
    "element": "div",
    "dangerouslySetInnerHTML": { "__html": "<img src='asdfasdf' onerror='alert(\"Hacked\")'>" }
}
```

Ref. https://medium.com/dailyjs/exploiting-script-injection-flaws-in-reactjs-883fb1fe36c1
</details>

#### Bonusoppgave 1
Sjekk hobbyprosjekt eller jobbprosjekt om noen av disse sårbarhetene finnes.

#### Bonusoppgave 2
Gå inn på [Hacker101](https://ctf.hacker101.com/ctf) og jobb med en CTF etter ditt nivå. Gjerne hvor skills er *web*. 

**Kilder:**

For å lære mer om spesifikke tips for å unngå XSS angrep, se: [XSS cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) 

For å lære mer om spesifikke tiltak mot CSRF se: [CSRF cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#javascript-guidance-for-auto-inclusion-of-csrf-tokens-as-an-ajax-request-header)

For å lære mer om sikkerthet i HTML5 se: [HTML5 security cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html)


### NPM og tredjepart biblioteker

Denne delen er bygget opp slik at du for hvert steg får mer informasjon som etterhvert leder deg til to sikkerhetshull som vi har lagt inn i applikasjonen. Begge hull gir brukere mulighet til å utføre stored XSS-angrep. Se an tiden, ikke bruk for lang tid på å lete i steg 1, hopp videre til neste steg hvis du setter deg fast.

#### 🏆Oppgaver

1. Åpne [/npm/](http://localhost:3000/npm) in nettleseren, prøv ut løsningen, eksperimenter litt for å se om du klarer å lure inn en kodesnutt
2. Let gjennom kildekoden `/src/npm/` for å finne potensielle sikkerhetshull
3. Kjør `npm outdated` og se om det er pakker som bør oppdateres
4. Kjør `npm audit` og se om du klarer å benytte informasjonen derfra til å utføre et XSS-angrep.
5. Gå inn på https://snyk.io/vuln/ og søk opp pakkene som brukes i dette prosjektet (eller installer `snyk` og kjør `snyk monitor`)
6. Fiks problemene du har funnet og aktiver audit slik at den kjører ved `npm install`

<details>
  <summary>🚨Hint 1</summary>

  Du kan bruke informasjonen fra https://snyk.io/vuln/SNYK-JS-MARKDOWNTOJSX-174624 til å lure inn HTML-kode i meldingsfeltet.
</details>

<details>
  <summary>🚨Hint 2</summary>

Det er mulig å legge inn et felt, f.eks. navngitt `href` i prototype for alle objekter ved å benytte svakhet i lodash,
trykk på lenken du får opp fra `npm audit`.
</details>

<details>
  <summary>🚨Hint 3</summary>

Det ryktes at backend på denne applikasjonen ikke har helt optimal validering. Det er lov å kalle API-et fra postman eller curl.
</details>

<details>
  <summary>🚨Løsningsforslag 1</summary>

Pakke: markdown-to-jsx

Finn rapportert sikkerhetshull på https://snyk.io/vuln/SNYK-JS-MARKDOWNTOJSX-174624 .

Send inn `<SCRIPT>alert(1)</SCRIPT>` i meldingsfeltet.
</details>

<details>
  <summary>🚨Løsningsforslag 2</summary>
Pakke: lodash

Finn rapportert svakhet med `npm audit` og benytt prototype pollution til å legge inn `href`-verdi.

```Shell
    curl 'http://localhost:3000/api/message' \
        --data '{"content": "Trykk på hjelp","constructor":{"prototype":{"href": "javascript:alert(1)"}}}' \
        --header 'Content-Type: application/json'
```
</details>

#### Bonusoppgave 1

Kjør `npm audit` på eget prosjekt og vurder resultatet.

#### Bonusoppgave 2

Søk opp pakker på https://snyk.io/vuln/ se om du finner noe spennende (finner du f.eks. en "Malicious Package" som du kunne ha installert uten å tenke over det).
