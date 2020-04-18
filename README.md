# Frontendsikkerhet
Dette er en samling med oppgaver for å lære om frontendsikkerthet og prøve det ut selv.

## Basic setup
Før vi kommer i gang med oppgavene skal vi sette opp et minimalt oppsett som vi kan bruke for å se sikkerhetshull i praksis. 
Sørg for at du har node og npm installert (https://nodejs.org/en/download/) og klon dette prosjektet: `git clone https://github.com/JulieHillRoa/frontendsikkerhet.git`. 
Gå så inn i mappen og kjør `npm i` derretter `npm run start` for å kjøre opp applikasjonen.

Presentasjonen med intro til hvert tema finner du her: https://docs.google.com/presentation/d/12WlGY49Ycj4tZOwHrRAaDTMVd8okkMXZCL7BHFW7XOM/edit?usp=sharing

### Utvikling av moderne web applikasjoner
tekst

#### 🏆Oppgave
Oppgavetekst

<details>
  <summary>🚨Løsningsforslag/Hint</summary>

```js
Hint eller løsningsforslag om vi har noe
```

</details>
<br/>

### NPM og tredjepart biblioteker

1. Åpne [/npm/](http://localhost:3000/npm) in nettleseren og prøv ut løsningen. Ser du noen åpenbare sikkerhetsproblemer? Noe som kan tukles med for å endre oppførsel?
2. Se over kildekoden som ligger under `/src/npm/` og vurder om det er noe du ville ha påpekt på som problematisk mtp. sikkerhet hvis du kom over tilsvarende i en PR.
3. Kjør `npm outdated` og se om det er pakker som bør oppdateres. Er dette nok informasjon til å lure inn en kodesnutt på siden uten å endre kildekoden?
4. Kjør `npm audit` og se om du klarer å benytte informasjonen til å utføre et XSS-angrep
5. Fiks problemet og aktiver audit slik at den kjører ved `npm install`

Bonusoppgave 1: Kjør `npm audit` på eget prosjekt og vurder resultatet.
Bonusoppgave 2: Søk gjerne opp diverse pakker på https://snyk.io/vuln/ se om du finner noe spennende (finner du f.eks. en "Malicious Package" som du kunne ha installert uten å tenke over det).

### Lagring i nettleser
tekst

#### 🏆Oppgave
Oppgavetekst

<details>
  <summary>🚨Løsningsforslag/Hint</summary>

```js
Hint eller løsningsforslag om vi har noe
```

</details>
<br/>

## Løsningsforslag

Løsninger per oppgave er kryptert for å unngå at deltakere kommer over løsningen før de har
fått prøvd seg. Passordet er hemmelig ;)

```Shell
# Krypter
openssl aes-256-cbc -pbkdf2 -in fil.txt -out fil.enc

# Dekrypter
openssl aes-256-cbc -pbkdf2 -d -in fil.enc
```
