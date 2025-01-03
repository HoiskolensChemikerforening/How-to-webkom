## Installasjon av programvare

<div class="tabs">
  <input class="tab-radio" type="radio" id="tab1" name="tab" checked>
  <input class="tab-radio" type="radio" id="tab2" name="tab">
    <input class="tab-radio" type="radio" id="tab3" name="tab">
  <div class="tab-labels">
    <label class="tab-label active" for="tab1">Windows</label>
    <label class="tab-label" for="tab2">Mac</label>
    <label class="tab-label" for="tab3">Linux</label>
  </div>
</div>

For å jobbe med HC-nettsiden må koden og programvare lastes ned. Koden er delt opp i frontend og backend kode. Backend koden kjører HC-nettsiden som den er i dag. Frontend prosjektet innholder kode for å endre nettsidens utseende. Denne koden blir fortsatt utvilket og er ikke en del av nettsiden i dag. I tillegg til koden bruker vi ulike progammer som må installeres på PCen for å kunne begynne å jobbe. 

<!-- Windows -->
<div class="tab-block"></div>

<!-- Mac -->
<div class="tab-block"></div>

<!-- Linux -->
<div class="tab-block"></div>

<!-- End -->
<div class="tab-end"></div>
<!-- End -->

**Programmer:** 
<!-- Windows -->
<div class="tab-block"></div>

- Visual Studio Code
- Git
- PostgreSQL
- Node.js
- Python 3.7
- Visual Studio Build Tools
<!-- Mac -->
<div class="tab-block"></div>

- Visual Studio Code
- Git
- PostgreSQL
- Node.js
- Python 3.7
- Homebrew
<!-- Linux -->
<div class="tab-block"></div>

- Visual Studio Code
- Git
- PostgreSQL
- Node.js
- Python 3.7
- Homebrew
<!-- End -->
<div class="tab-end"></div>
<!-- End -->

De neste avsnittene beskriver hvordan denne programvaren skal lastes ned.

### IDE

Første steget er å laste ned et integrated development environment (IDE) som Visual Studio Code (VS-Code) eller PyCharm. VS-Code kan brukes for både frontend og backend utvikling. PyCharm er en IDE som funker bra for python prosjekter og egner seg derfor bare for backend utvikling. Derfor anbefaler jeg å laste ned [VS-Code](https://code.visualstudio.com/download). 

Hvis du velger VS-Code burde du også laste ned VS-Code extensions for Python and React. Åpne VS-Code og klikk på extensions i menuen på venstre siden (Icon med fire firkanter). Søk opp Python og React hver for seg og last ned første forslaget som dukker opp. Det kan også være lurt å skru på automatisk lagring (under **file**).

### Python

<!-- Windows -->
<div class="tab-block"></div>
For å kjøre nettsiden bruker vi [Python 3.7](https://www.python.org/downloads/release/python-379/). Last ned installeren [her](https://www.python.org/ftp/python/3.7.9/python-3.7.9-amd64.exe) dersom PCen din er et 64-bit system. Eldre PCer kan også ha et 32-bit system. I slike tilfeller brukes det [denne](https://www.python.org/ftp/python/3.7.9/python-3.7.9.exe) installeren. Systemtypen finner du under Instillinger > System > Om. Bruk installeren for å installere Python. Om du får muligheten for å huke av noen bokser under installasjonsprosessen er det viktig å velge riktig. Velg *Install launcher for all users*. Ikke velg *add Python 3.7 to PATH*. Å legge Python 3.7 til PATH endrer standard python versjonen din til 3.7 som kan ødlegge andre prosjekter som bruker den globale Python interpreteren. Hvis du installere launcheren er det enkelt å bytte mellom ulike Python versjoner i terminalen. På denne måten kan du fortsette å bruke en nyere Python versjon for skoleprosjektene dine. For å skjekke at Python 3.7 har blitt installert riktig kan du kjøre kommandoen nedenfor.

```
py -3.7 --version
```

<!-- Mac -->
<div class="tab-block"></div>

For å kjøre nettsiden bruker vi [Python 3.7](https://www.python.org/downloads/release/python-379/). Last ned installeren [her](https://www.python.org/ftp/python/3.7.9/python-3.7.9-macosx10.9.pkg) og installer Python. For å skjekke at Python 3.7 har blitt installert riktig kan du kjøre kommandoen nedenfor.

```
python3.7 --version
```

<!-- Linux -->
<div class="tab-block"></div>

For å kjøre nettsiden bruker vi [Python 3.7](https://www.python.org/downloads/release/python-379/). Last ned python ved å kjøre følgende kommandoer i terminalen.

```bash
sudo apt-get update
sudo apt-get install python3.7.9
```

For å skjekke at Python 3.7 har blitt installert riktig kan du kjøre kommandoen nedenfor.

```
python3.7 --version
```

<!-- End -->
<div class="tab-end"></div>
<!-- End -->

### Node.js

Frondend koden er skrevet i React som krever at [Node.js](https://nodejs.org/en) er installert. Installer Node.js og følg innstruksene i installeren. For å skjekke at Node.js har blitt installert riktig kan du kjøre kommandoen nedenfor.

```
npm --help
```

### Visual Studio Build Tools

<!-- Windows -->
<div class="tab-block"></div>

Noen Python pakker som brukes for å kjøre nettsiden forutsetter at PCen er istand til å kombilere C++. Det er dermed nødvendig å laste ned [Visual Studio Build Tools](https://aka.ms/vs/17/release/vs_BuildTools.exe). Kjør installeren og velg *Desktop development with C++* under installasjonen.

<!-- Mac -->
<div class="tab-block"></div>

Visual Studio Build Tools brukes for å kombilere C++ kode. På Mac er det ikke nødvendig med ekstra programvare. Du kan derfor hoppe over dette steget. 

<!-- Linux -->
<div class="tab-block"></div>

Visual Studio Build Tools brukes for å kombilere C++ kode. På Linux er det ikke nødvendig med ekstra programvare. Du kan derfor hoppe over dette steget. 

<!-- End -->
<div class="tab-end"></div>
<!-- End -->



### Homebrew

<!-- Windows -->
<div class="tab-block"></div>

Homebrew er en package manager for MacOS and Linux, og dermed ikke nødvendig for Windows PCer. 

<!-- Mac -->
<div class="tab-block"></div>

[Homebrew](https://brew.sh/) er en package manager for macOS og Linux.  Følg instruksene nedenfor eller på Homebrew's sine nettsider for å installe homebrew. Dette må gjøres gjennom terminalen. Dersom du blir spurt om passord under installasjonen er det passordet til PCen din.

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

<!-- Linux -->
<div class="tab-block"></div>

[Homebrew](https://brew.sh/) er en package manager for macOS og Linux. Denne Linux innstruksen har ikke blitt testet ennå. Jeg antar at alle nødvendige pakkene er tilgjengelig gjennom `apt-get`. Det er dermed ikke nødvendig å installere homebrew, men det kan hjelpe for å installere Postgres. Jeg antar at installasjonen ligner på fremgansmåten for MacOS.

<!-- End -->
<div class="tab-end"></div>
<!-- End -->




### Git

Git er et program som brukes for å holde oversikt over ulike versjoner av koden. På denne måten kan vi alltid gå tilbake til en gammel versjon av nettsiden dersom vi har klart å ødlegge noe. I tillegg til dette jobber alle i Webkom på sin kopi av nettsiden. Git sørger også for at ulike endringer ikke ødlegger for andre. 

<!-- Windows -->
<div class="tab-block"></div>

Git kan lastes ned for Windows gjennom Git's sine [nettsider](https://git-scm.com/). Last ned installeren og følg instruksjonene. 

<!-- Mac -->
<div class="tab-block"></div>

For å laste ned Git på Mac må homebrew være installert på PCen. Homebrew er en package manager som brukes for å laste ned programvare blandt annet Git. For å installere Git på Mac må kommandoen nedenfor kjøres i terminalen. 

```
brew install git
```

<!-- Linux -->
<div class="tab-block"></div>

For å laste ned Git på Linux kjører vi kommandoen nedenfor. 

```
sudo apt-get update
sudo apt-get install git
```

<!-- End -->
<div class="tab-end"></div>
<!-- End -->


For å skjekke at Git har blitt installert riktig kan du kjøre kommandoen nedenfor. 

```
git help
```


### GitHub

Når Git er installert kan vi fortsette med å opprette en bruker på [GitHub](https://github.com/). GitHub er en nettside som hjelper oss med å lagre koden online slik at vi kan laste ned ulike versjoner. For å kunne gjøre dette må dere bli lagt til i organisasjonen [*HoiskolensChemikerforening*](https://github.com/HoiskolensChemikerforening) på GitHub. I tillegg til dette må dere generere en SSH-key for PCen deres. Denne SSH-keyen må legges til GitHub profilen deres. SSH-keyen fungerer som en type ID for PCen, slik at GitHub vet at denne PCen har tillatelse til å endre dine GitHub repositories. Hvordan man generere en SSH-key er beskrevet [her](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux). Hvordan SSH-keyen kan legges til GitHub profilen er beskrevet [her](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).


### PostgreSQL

<!-- Windows -->
<div class="tab-block"></div>

PostgreSQL brukes for databasene i HC. Gå på PostgreSQL sine [nettsider](https://www.postgresql.org/download/windows/) og last ned installeren. Jeg bruker versjon 15, men nyere versjoner burde også funke. Last ned og kjør installeren. Huk av *PostgreSQL Server*, *pgAdmin 4*, *Stack Builder* og *Command Line Tools* i første setup vinduet. Passordet du velger for superuserern postgres i neste vinduet kan velges fritt, men det er viktig at det er et passord man husker. Det funker også å velge *postgres* eller *webkom* som passord. Når du blir bedt om å velge port er det viktig at du velger *5432*. Resten kan står på default. 

Når PostgreSQL er installert må det opprettes en postgres bruker som heter webkom og en database med samme navn og passord. Dette kan gjøres på ulike måter enten gjennom *pg_admin* eller *psql shell*.

**Pg-Admin:**

1. Åpne Pg Admin
2. Log inn med passordet du definerte under installasjonen
3. Klikk på *PostgreSQL X* og høyreklikk på “Login/Group Roles” → Create → Login/Group Role
    - General-tab:
        - Name : webkom
    - Definition-tab
        - Password: webkom
    - Privileges-tab
        - Huk av alle
    - Klikk Save
4. Høyreklikk på *Databases* → Create → Database
    - General-tab
        - Database: webkom
        - Owner: webkom
    - Klikk Save

**PSQL Shell**

For å opprette brukeren og databasen i terminalen istedenfor å bruke Pg Admin må vi bruke psql shell. Søk opp psql i start menuen og åpne psql terminalen. Inne i psql terminalen trykker du på enter frem til du ble bedt om å oppgi passordet ditt. Dette er passordet du lagde under installasjoenen. Etter du har skrevet inn passorded kan Webkom brukeren og databasen opprettes ved å kjøre følgende kommandoer. 

```
CREATE ROLE webkom WITH  LOGIN SUPERUSER PASSWORD 'webkom';
```

og 

```
CREATE DATABASE webkom;
```

<!-- Mac -->
<div class="tab-block"></div>

PostgreSQL brukes for databasene i HC. PostgreSQL for MacOS lastes ned ved hjelp av Homebrew. Her er det viktig å laste ned en postgres versjon som kjører på riktig port. Jeg anbefaler derfor å laste ned versjon 15. Kjør kommandoen nedenfor.

```
brew install postgresql@15
```

Når postgres er installert skrives det ut en melding i terminalen med diverse kommandoer som må kjøres for å fullføre installasjoenen. Disse kommandoene må kjøres for å starte PostgreSQL og til å legge til psql til path. Skjekk installasjonen ved å kjøre kommandoen under i en ny terminal.

```
psql postgres
```

Kommandoen åpner psql shellen. Skjekk at nye linjer i terminalen starter med *postgres=#*. Her må det opprettes en ny postgres bruker og en database. Kjør:

```
CREATE ROLE webkom WITH  LOGIN SUPERUSER PASSWORD 'webkom';
```

og 

```
CREATE DATABASE webkom;
```

<!-- Linux -->
<div class="tab-block"></div>

Finn ut av det selv og oppdater innstruksen. Lykke til! :P
<!-- End -->
<div class="tab-end"></div>
<!-- End -->

