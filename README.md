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
  `javascript:` lar deg sende inne javascript kode som blir trigget når linken blir klikket på
</details>
<br/>
<details>
  <summary>🚨Løsningsforslag 1 </summary>
```js
Én fasit: javascript:alert("Hacked!")
Dersom man kommer på en side som validerer mot `javascript:` kan man sende inn base64: f.eks "data:text/html;base64,PHNjcmlwdD5hbGVydCgiSGFja2VkISIpOzwvc2NyaXB0Pg=="
```
</details>
<br/>

<details>
  <summary>🚨Hint 2 </summary>
  Sender du inn en svg setter man i gang en xml-parser, som kan skape trøbbel. Med img-tagen er det veldig enkelt å trigge `js<element onerror="ondsinnet kode" src="">
</details>
<br/>
<details>
  <summary>🚨Løsningsforslag 2 </summary>
```js
Én fasit: <img onerror=alert("Hacked!") src="feil">
```
</details>
<br/>

<details>
  <summary>🚨Hint 3 </summary>
  a-tagen har en attributt `rel` hvor du kan definere relasjonen mellom siden og nettsiden det er linket til.
</details>
<br/>
<details>
  <summary>🚨Løsningsforslag 3 </summary>
```js
Én fasit: <a src="<urlen>" target="_blank" rel="noopener">Klikk her</a>. Man må gjerne og utbrodere `rel` med "noreferrer" og andre verdier som passer på din lenke.
```
</details>
<br/>

**Kilder:**

For å lære mer om spesifikke tips for å unngå XSS angrep, se: [XSS cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) 

For å lære mer om spesifikke tiltak mot CSRF se: [CSRF cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#javascript-guidance-for-auto-inclusion-of-csrf-tokens-as-an-ajax-request-header)

OBS! Dette er ganske lette oppgaver for de i sikkerhetsfaggruppa. Burde vi anbefale CTF oppgaver? (Det viktigste er jo at de får med seg funksjonene som er sårbare)

### NPM og tredjepart biblioteker

Denne oppgaven er bygget opp slik at du for hvert steg får mer informasjon som etterhvert leder deg til to sikkerhetshull som vi har lagt inn i applikasjonen. Begge hull gir brukere mulighet til å utføre stored XSS-angrep. Se an tiden, ikke bruk for lang tid på å lete i steg 1, hopp videre til neste steg hvis du setter deg fast.

1. Åpne [/npm/](http://localhost:3000/npm) in nettleseren, prøv ut løsningen, eksperimenter litt for å se om du klarer å lure inn en kodesnutt
2. Let gjennom kildekoden `/src/npm/` for å finne potensielle sikkerhetshull
3. Kjør `npm outdated` og se om det er pakker som bør oppdateres
4. Kjør `npm audit` og se om du klarer å benytte informasjonen derfra til å utføre et XSS-angrep.
5. Gå inn på https://snyk.io/vuln/ og søk opp pakkene som brukes i dette prosjektet (eller installer `snyk` og kjør `snyk monitor`)
6. Fiks problemene du har funnet og aktiver audit slik at den kjører ved `npm install`

Bonusoppgave 1: Kjør `npm audit` på eget prosjekt og vurder resultatet.

Bonusoppgave 2: Søk opp pakker på https://snyk.io/vuln/ se om du finner noe spennende (finner du f.eks. en "Malicious Package" som du kunne ha installert uten å tenke over det).

## Løsningsforslag

Løsninger per oppgave er kryptert for å unngå at deltakere kommer over løsningen før de har
fått prøvd seg. Passordet er hemmelig ;)

```Shell
# Krypter
openssl aes-256-cbc -pbkdf2 -in fil.txt -out fil.enc

# Dekrypter
openssl aes-256-cbc -pbkdf2 -d -in fil.enc
```
