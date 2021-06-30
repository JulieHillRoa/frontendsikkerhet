# Frontendsikkerhet
Dette er en samling med oppgaver for å lære om frontendsikkerthet og selv kjenne på farene.

## Basic setup
Før vi kommer i gang med oppgavene skal vi sette opp et minimalt oppsett som vi kan bruke for å se sikkerhetshull i praksis. 

Sørg for at du har node og npm installert (https://nodejs.org/en/download/) og klon dette prosjektet: 

```
git clone https://github.com/JulieHillRoa/frontendsikkerhet.git
```

Gå så inn i mappen, installer npm pakkene og start applikasjonen:

```
cd frontendsikkerhet
npm install
npm start
```

Presentasjonen med intro til hvert tema finner du her: https://docs.google.com/presentation/d/12WlGY49Ycj4tZOwHrRAaDTMVd8okkMXZCL7BHFW7XOM/edit?usp=sharing

## Utvikling av moderne web applikasjoner
Denne oppgaven går ut på å utforske noen av de sårbare elementene ved utvikling av en webapplikasjon. 
Oppgavene vil være basert på Reactjs, men sikkerhetshullene er ikke nødvendigvis kun tilfelle i React. 

Rammeverket er i utgangspunktet ganske sikkert når det gjelder beskyttelse mot XSS-angrep.
Det er flere tiltak som blir gjort for å hindre angrep, som for eksempel å escape streng-variabler i views automatisk. Et annet tiltak er at  
med JSX sender man en funksjon som event handler isteden for en streng som kan inneholde ondsinnet kode. 
```js
HTML: 
<button onclick="onButtonClick()">Klikk her</button>

JSX:
<button onClick={ onButtonClick }>Klikk her</button>
```

Vi skal nå gå igjennom 4 oppgaver rundt fallgruver som webutviklere burde vite om. 

### 🏆 Oppgaver
Koden finner du i `src/webapp`, dersom du står fast finner du hint og fasit lenger ned på siden. 
Bruk Chrome for disse oppgavene.
Når du har utført en oppgave se info om problemet før du hopper videre til neste oppgave.

1. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Oppgave1 og følg teksten på siden.
<details>
  <summary>Klarte du å få applikasjonen til å kjøre scriptet?</summary>
  Som du sikkert opplevde går det ikke ann å skrive alert("hacked") direkte i feltene. Dette er fordi React escaper input og tolker det som tekst isteden for   kjørbar kode. Dette beskytter oss på god vei mot onsinnede som prøver å utnytte våre inputfelt. Det man derimot ikke får like mye beskyttelse mot er å ta i bruk brukerinput rett i enkelte html-atributter som blir eksekvert når man klikker på elementet. 
</details>
  
2. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Oppgave2 og følg teksten på siden. 
<details>
  <summary>Klarte du å få applikasjonen til å kjøre scriptet?</summary>
  I likhet med oppgave 1 hjelper React oss med å escape og encode enkelte tegn og input som f.eks <script>-tags. Fordi dangerouslySetInnerHTML setter input direkte på DOMen er det likevel ikke alt React hjelper oss med: Som f.eks events på HTML-attributter. Man skal aldri stole på brukerinput og man burde generelt tenke seg om flere ganger før man bruker denne funksjonen eller lar brukere manipulere DOM'en direkte. En måte å beskytte seg litt mer fra angrep er å Sanatize dataen før den blir eksekvert. Dette finnes det forskjellige pakker som hjelper deg å gjøre. Blandt annet DOMPurify som i vårt eksempel ville fjernet `onerror=alert("Hacked!")` delen av `<img onerror=alert("Hacked!") src="feil">` og etterlatt den slik: `<img  src="feil">`
</details>
  
3. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Oppgave3 og følg teksten på siden. 
  <details>
  <summary>Klarte du å få applikasjonen til å kjøre scriptet?</summary>
  I javascript finnes det en funksjon: eval(). Denne evaluerer koden som blir sendt inn som også vil si at koden blir kjørt. Ved å gjøre en logisk operasjon her kan man også få kjørt ondsinnet kode noe som gjør at det kan være stor fare for et XSS-angrep. 
</details>
  
4. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Oppgave4. Prøv å se om du kan få siden til å kjøre `alert("Hacked")`.
  <details>
  <summary>Klarte du å få applikasjonen til å kjøre scriptet?</summary>
  Her bruker man localStorage. Dette kan være et nyttig verktøy å bruke, men det er veldig lett å manipulere. Det er derfor viktig å gjøre tiltak på denne dataen før man tar i bruk info man finner i localStorage. 
  </details>

<details>
  <summary>:bulb: Hint 1 </summary>
  
  Ikke forvent at alert-koden blir kjørt før linken er klikket på. Er det noen måte å kjøre javascript-kode på når du er inne i en a-tags href-attributt?
  
</details>
<details>
  <summary>🚨 Løsningsforslag 1 </summary>
  
  Én fasit: `javascript:alert("Hacked!")`
        
  Dersom man kommer på en side som validerer mot `javascript:` kan man sende inn base64: f.eks `<script>alert("Hacked!");</script>` encodet:
  ```js  
  data:text/html;base64,YWxlcnQoImhhY2tlZCEiKQ==
  ```
</details>
<br/>
<details>
  <summary>:bulb: Hint 2 </summary>
  
  Her brukes [dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml) til å bytte ut innholdet. 

  Heldigvis vil ikke script-tager bli kjørt hvis man setter de inn med dette attributtet. Det var det første jeg prøvde også. Men det finnes attributter som blir kjørt når spesielle hendelser skjer, vet du om et slikt?
</details>
<details>
  <summary>🚨 Løsningsforslag 2 </summary>
  
Én fasit: `<img onerror=alert("Hacked!") src="feil">`
</details>
<br/>
<details>
  <summary>:bulb: Hint 4.1 </summary>
  
  Her brukes eval til å hente ut verdiene i et objekt. 
  ```js
  const getSvaret = () => {
      input && setSvar(eval('gjest.' + input ))
  };
  ```
Kan du sende inn noe i inputfeltet slik at den fortsetter å lese kode etter at han har funnet eller ikke funnet propertien til gjest?
</details>
</details>
<br/>
<details>
  <summary>:bulb: Hint 4.2 </summary>
  
Pst. Du husker kanskje at [logiske operatorer i JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) leses fra venstre til høyre? 
</details>
<details>
  <summary>🚨 Løsningsforslag 4 </summary>
  
Dersom man velger en property som finnes kan man skrive inn: `navn && alert("hacked!")`
eventuelt kan du skrive: `hvaduvil || alert("hacked!")`
    
  Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!
</details>
<br/>
<details>
  <summary>:bulb: Hint 5 </summary>
  
  Det kan se ut som at tekstfeltet laster data fra localStorage. Tekstfeltet er også veldig dynamisk, det ser nesten ut som at man
  kan sende inn helt vilkårlige props. Det er spesielt en prop som utvikleren er veldig stolt av, hva skjer om den f.eks. endres
  til å være en `div`? Kan det da være mulig å låne triks fra tidligere oppgaver?
</details>
<details>
  <summary>🚨 Løsningsforslag 5 </summary>

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

### Bonusoppgave 1
Sjekk hobbyprosjekt eller jobbprosjekt om noen av disse sårbarhetene finnes.

### Bonusoppgave 2
Gå inn på [Hacker101](https://ctf.hacker101.com/ctf) og jobb med en CTF etter ditt nivå. Gjerne hvor skills er *web*. 

**Kilder:**

For å lære mer om spesifikke tips for å unngå XSS angrep, se: [XSS cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) 

For å lære mer om spesifikke tiltak mot CSRF se: [CSRF cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#javascript-guidance-for-auto-inclusion-of-csrf-tokens-as-an-ajax-request-header)

For å lære mer om sikkerthet i HTML5 se: [HTML5 security cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html)


## NPM og tredjepart biblioteker

Denne delen er bygget opp slik at du for hvert steg får mer informasjon som etterhvert leder deg til to sikkerhetshull som vi har lagt inn i applikasjonen. Begge hull gir brukere mulighet til å utføre stored XSS-angrep. Se an tiden, ikke bruk for lang tid på å lete i steg 1, hopp videre til neste steg hvis du setter deg fast.

### 🏆 Oppgaver

1. Åpne [/npm/](http://localhost:3000/npm) in nettleseren, prøv ut løsningen, eksperimenter litt for å se om du klarer å lure inn en kodesnutt
2. Let gjennom kildekoden `/src/npm/` for å finne potensielle sikkerhetshull
3. Kjør `npm outdated` og se om det er pakker som bør oppdateres
4. Kjør `npm audit` og se om du klarer å benytte informasjonen derfra til å utføre et XSS-angrep.
5. Gå inn på https://snyk.io/vuln/ og søk opp pakkene som brukes i dette prosjektet (eller installer `snyk` og kjør `snyk monitor`)
6. Fiks problemene du har funnet og aktiver audit slik at den kjører ved `npm install`

<details>
  <summary>:bulb: Hint 1</summary>

  Du kan bruke informasjonen fra https://snyk.io/vuln/SNYK-JS-MARKDOWNTOJSX-174624 til å lure inn HTML-kode i meldingsfeltet.
</details>

<details>
  <summary>:bulb: Hint 2</summary>

Det er mulig å legge inn et felt, f.eks. navngitt `href` i prototype for alle objekter ved å benytte svakhet i lodash,
trykk på lenken du får opp fra `npm audit`.
</details>

<details>
  <summary>:bulb: Hint 3</summary>

Det ryktes at backend på denne applikasjonen ikke har helt optimal validering. Det er lov å kalle API-et fra postman eller curl.
</details>

<details>
  <summary>🚨 Løsningsforslag 1</summary>

Pakke: markdown-to-jsx

Finn rapportert sikkerhetshull på https://snyk.io/vuln/SNYK-JS-MARKDOWNTOJSX-174624 .

Send inn `<SCRIPT>alert(1)</SCRIPT>` i meldingsfeltet.
</details>

<details>
  <summary>🚨 Løsningsforslag 2</summary>
Pakke: lodash

Finn rapportert svakhet med `npm audit` og benytt prototype pollution til å legge inn `href`-verdi.

```Shell
    curl 'http://localhost:3000/api/message' \
        --data '{"content": "Trykk på hjelp","constructor":{"prototype":{"href": "javascript:alert(1)"}}}' \
        --header 'Content-Type: application/json'
```
</details>

### Bonusoppgave 1

Kjør `npm audit` på eget prosjekt og vurder resultatet.

### Bonusoppgave 2

Søk opp pakker på https://snyk.io/vuln/ se om du finner noe spennende (finner du f.eks. en "Malicious Package" som du kunne ha installert uten å tenke over det).
