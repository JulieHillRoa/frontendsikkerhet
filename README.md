# Frontendsikkerhet
Dette er en samling med oppgaver for å lære om frontendsikkerthet og prøve det ut selv.

## Basic setup
Før vi kommer i gang med oppgavene skal vi sette opp et minimalt oppsett som vi kan bruke for å se sikkerhetshull i praksis. 
Sørg for at du har node og npm installert (https://nodejs.org/en/download/) og klon dette prosjektet: `git clone https://github.com/JulieHillRoa/frontendsikkerhet.git`. 
Gå så inn i mappen og kjør `npm i` derretter `npm run start` for å kjøre opp applikasjonen.

Presentasjonen med intro til hvert tema finner du her: https://docs.google.com/presentation/d/12WlGY49Ycj4tZOwHrRAaDTMVd8okkMXZCL7BHFW7XOM/edit?usp=sharing

### Utvikling av moderne web applikasjoner
Denne oppgaven går ut på å utforske noen av de sårbare elementene ved utvikling av en webapplikasjon. 
Oppgavene vil være basert på Reactjs. 

Rammeverket er i utgangspunktet ganske sikkert når det gjelder beskyttelse mot XSS-angrep.
Det er fler tiltak som blir gjort for å hindre angrep, som for eksempel å escape streng-variabler i views automatisk. Et annet tiltak er at  
med JSX sender man en fuksjon som event handler isteden for en streng som kan inneholde ondsinnet kode. 
```js
HTML: 
<button onclick="onButtonClick()">Klikk her</button>

JSX:
<button onClick={ onButtonClick }>Klikk her</button>
```

Vi skal nå gå igjennom 5 oppgaver rundt fallgruver som alle webutviklere burde vite om. 

#### 🏆Oppgaver
Bruk chrome for disse oppgavene:

1. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Href og følg teksten på siden.
Ta en titt på koden i `/webapp/Href.jsx` for å se koden du skal hacke.
2. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: DangerouslySetInnerHTML og følg teksten på siden. 
Ta en titt på koden i `/webapp/DangerouslySetInnerHTML.jsx` for å se koden du skal hacke.
3. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Tabsnapping. Følg lenken og oppgave teksten. 
Ta en titt på koden i `/webapp/Tabsnapping.jsx` for å se koden du skal fikse.
4. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Eval(). 
Prøv å se om du kan få siden til å kjøre `alert("Hacked")` ved å skrive i input-feltet. Ta en titt på koden i `/webapp/Eval.jsx`.
5. Åpne [/webapp/](http://localhost:3000/webapp) in nettleseren, klikk på knappen: Props. 
Prøv å se om du kan få siden til å kjøre `alert("Hacked")` ved å skrive i input-feltet. Ta en titt på koden i `/webapp/SpreadProps.jsx`.

<details>
  <summary>🚨Hint 1 </summary>
  
  `javascript:` lar deg sende inne javascriptkode som blir trigget når linken blir klikket på.
  
</details>
<details>
  <summary>🚨Løsningsforslag 1 </summary>
  
  Én fasit: `javascript:alert("Hacked!")`
        
  Dersom man kommer på en side som validerer mot `javascript:` kan man sende inn base64: f.eks 
  ```js 
  "data:text/html;base64,PHNjcmlwdD5hbGVydCgiSGFja2VkISIpOzwvc2NyaXB0Pg=="
  ```
</details>
<details>
  <summary>🚨Hint 2 </summary>
  
  Sender du inn en svg setter man i gang en xml-parser, som kan skape trøbbel. Med img-tagen er det veldig enkelt å trigge 
  ```js
  <element onerror="ondsinnet kode" src="">
  ```
</details>
<details>
  <summary>🚨Løsningsforslag 2 </summary>
  
Én fasit: `<img onerror=alert("Hacked!") src="feil">`
</details>
<br/>
<details>
  <summary>🚨Hint 3 </summary>
  
  a-tagen har en attributt `rel` hvor du kan definere relasjonen mellom siden og nettsiden det er linket til.
</details>
<details>
  <summary>🚨Løsningsforslag 3 </summary>
  
Én fasit: ` <a src="<urlen>" target="_blank" rel="noopener">Klikk her</a>.` Man må gjerne også utbrodere `rel` med `"noreferrer"` og andre verdier som passer på din lenke.
</details>
<br/>
<details>
  <summary>Hint 5 </summary>
  
  Det kan se ut som at tekstfeltet laster data fra localStorage. Tekstfeltet er også veldig dynamisk, det ser nesten ut som at man
  kan sende inn helt vilkårlige props. Det er spesielt en prop som utvikleren er veldig stolt av, hva skjer om den f.eks. endres
  til å være en `div`? Kan det da være mulig å låne triks fra tidligere oppgaver?
</details>
<br/>
<details>
  <summary>🚨Løsningsforslag 5 </summary>

    Her er det ingen validering av props lagret i local storage, vi kan f.eks. gi inn i dev console og lagre følgende:

    ```json
    {  
        "value": "Oops",
        "element": "div",
        "dangerouslySetInnerHTML": { "__html": "<img src='asdfasdf' onerror='alert(1)'>" }
    }
    ```

    Ref. https://medium.com/dailyjs/exploiting-script-injection-flaws-in-reactjs-883fb1fe36c1
</details>


**Kilder:**

For å lære mer om spesifikke tips for å unngå XSS angrep, se: [XSS cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) 

For å lære mer om spesifikke tiltak mot CSRF se: [CSRF cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#javascript-guidance-for-auto-inclusion-of-csrf-tokens-as-an-ajax-request-header)

OBS! Dette er ganske lette oppgaver for de i sikkerhetsfaggruppa. Burde vi anbefale CTF oppgaver? (Det viktigste er jo at de får med seg funksjonene som er sårbare)

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
