<span class="custom-h3">IDE</span>

### Homebrew

[Homebrew](https://brew.sh/) er en package manager for macOS. Hvis du har en Windows PC kan du hoppe over dette steget. Følg instruksene nedenfor eller på homebrew's sine nettsider for å installe homebrew. Dette må gjøres gjennom terminalen. Dersom du blir spurt om passord under installasjonen er det passordet til PCen din.

Innstaller homebrew ved hjelp av følgene kommando. 

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Når homebrew har blitt installert skrives det ut en lang melding i terminalen. Under **next steps** finner du tre ulike kommandoer som må kjøres for
å bruke homebrew i terminalen. Kommandoene er ført opp under. Bytt ut <brukernavn\> med ditt brukernavn. Det er anbefalt å kopiere disse kommandoene direkte 
fra din terminal.

```
echo >> /Users/<brukernavn>/.zprofile
```

```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/<brukernavn>/.zprofile
```

```
eval "$(/opt/homebrew/bin/brew shellenv)"
```


For å skjekke at homebrew har blitt installert riktig kan du kjøre kommandoen nedenfor.

```
brew help
```

Git er et program som brukes for å holde oversikt over ulike versjoner av koden. På denne måten kan vi alltid gå tilbake til en gammel versjon av nettsiden dersom vi har klart å ødlegge noe. I tillegg til dette jobber alle i Webkom på sin kopi av nettsiden. Git sørger også for at ulike endringer ikke ødlegger for andre. For å laste ned Git på Mac må homebrew være installert på PCen. Homebrew er en package manager som brukes for å laste ned programvare blandt annet Git. For å installere Git på mac må kommandoen nedenfor kjøres i terminalen. 

```
brew install git
```

For å skjekke at Git har blitt installert riktig kan du kjøre kommandoen nedenfor. Fungerer for både Mac og Windows.

```
git help
```