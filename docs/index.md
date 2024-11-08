# Velkommen til Webkomiteen

Gratulerer med opptak i Webkomiteen den nest beste komiteen i HC (Sportskom <3). I løpet av de neste årene kommer du til å lære utrulig mye kult og denne guiden skal hjelpe deg med å komme i gang. Selv om jeg har vært i Webkomiteen i snart 3 år finnes det fortsatt oppgaver jeg ikke har vært borte i før. I mine øyene er Webkoms hovedoppgave å vedlikeholde kunnskap. Dere kommer til å lære mye nytt i starten som kan føles litt overveldene, men det er absolutt ikke forventet at dere husker alt første gangen, dette kommer med tiden. Progammering er mengdetrening. Still spørsmål, se på gammel kode og spør Chat eller Google så kommer dette til å gå fint.  

## Installer programvare

For å jobbe med HC-nettsiden må koden og programvare lastes ned. Koden er delt opp i frontend og backend kode. Backend koden kjører HC-nettsiden som den er i dag. Frontend koden innholder kode for å endre nettsidens utseende. Denne koden blir fortsatt utvilket og er ikke en del av nettsiden i dag. I tillegg til koden bruker vi ulike progammer som må installeres på PCen for å kunne jobbe med koden. 

**Programmer:**

- VS-Code
- Git
- PostgreSQL
- Node.js
- Python 3.7
- Homebrew (Mac)

De neste avsnittene beskriver hvordan denne programvaren skal lastes ned.

### IDE

Første steget er å laste ned et integrated development environment (IDE) som VS-Code eller PyCharm. VS-Code kan brukes for både frontend og backend. PyCharm er en IDE som funker bra for python progammer og egner seg derfor bare for backend. Derfor anbefaler jeg å laste ned [VS-Code](https://code.visualstudio.com/download). 

Hvis du velger VS-Code burde du også laste ned VS-Code extensions for Python and React. Åpne VS-Code og klikk på extensions i menuen på venstre siden (Icon med fire firkanter). Søk opp Python og React hver for seg og last ned første forslaget som dukker opp.

### Python

For å kjøre nettsiden bruker vi [Python 3.7](https://www.python.org/downloads/release/python-379/). Last ned installeren og installer Python. Velg *Install launcher for all users*. Ikke velg *add Python 3.7 to PATH*. Dette ender standard python versjonen din til 3.7 som kan ødlegge andre prosjekter som bruker den globale Python interpreteren. Hvis du installere launcheren er det enkelt å bytte mellom ulike Python versjoner i terminalen. På denne måten kan du fortsette å bruke en nyere Python versjon for skoleprosjektene dine. For å skjekke at Python 3.7 har blitt installert riktig kan du kjøre kommandoen nedenfor.

```
py -3.7 --version
```

### Node.js

Frondend koden er skrevet i React som krever at [Node.js](https://nodejs.org/en) er installert. Installer Node.js og følg innstruksene i installeren. For å skjekke at Node.js har blitt installert riktig kan du kjøre kommandoen nedenfor.

```
npm --help
```


### Homebrew

[Homebrew](https://brew.sh/) er en package manager for macOS. Hvis du har en Windows PC kan du hoppe over dette steget. Følg instruksene på homebrew's sine nettsider for å installe homebrew. Dette må gjøres gjennom terminalen. For å skjekke at homebrew har blitt installert riktig kan du kjøre kommandoen nedenfor.

```
brew help
```

### Git

Git er et program som brukes for å holde oversikt over ulike versjoner av koden. På denne måten kan vi alltid gå tilbake til en gammel versjon av nettsiden dersom vi har klart å ødlegge noe. I tillegg til dette jobber alle i Webkom på sin kopi av nettsiden. Git sørger også for at ulike endringer ikke ødlegger for andre.  

#### Windows

Git kan lastes ned for Windows gjennom Git's sine [nettsider](https://git-scm.com/). Last ned installeren og følg instruksjonene.

#### Mac

For å laste ned Git på Mac må homebrew være installert på PCen. Homebrew er en package manager som brukes for å laste ned programvare blandt annet Git. For å installere Git på mac må kommandoen nedenfor kjøres i terminalen. 

```
brew install git
```

For å skjekke at Git har blitt installert riktig kan du kjøre kommandoen nedenfor. Funkerer for både Mac og Windows.

```
git help
```


### GitHub

Når Git er installert kan vi fortsette med å opprette en bruker på [GitHub](https://github.com/). GitHub er en nettside som hjeler oss med å lagre koden online slik at vi kan laste ned ulike versjoner. For å kunne gjøre dette må dere bli lagt til i organisasjonen [*HoiskolensChemikerforening*](https://github.com/HoiskolensChemikerforening) på GitHub. I tillegg til dette må dere generere en SSH-key for PCen deres. Denne SSH-keyen må legges til GitHub profilen deres. SSH-keyen fungerer som en type ID for PCen, slik at GitHub vet at denne PCen har tillatelse til å endre dine GitHub repositories. Hvordan man generere en SSH-key er beskrevet [her](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux). Hvordan SSH-keyen kan legges til GitHub profilen er beskrevet [her](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).


### PostgreSQL

PostgreSQL brukes for databasene i HC. PostgreSQL installeres ulikt på Windows og MacOS.

#### Windows

Gå på PostgreSQL sine [nettsider](https://www.postgresql.org/download/windows/) og last ned installeren. Jeg bruker versjon 15, men nyere versjoner burde også funke. Last ned og kjør installeren. Huk av *PostgreSQL Server*, *pgAdmin 4*, *Stack Builder* og *Command Line Tools* i første setup vinduet. Passordet du velger for superuserern postgres i neste vinduet kan velges fritt, men det er viktig at det er et passord man husker. Det funker også å velge *postgres* eller *webkom* som passord. Når du blir bedt om å velge port er det viktig at du velger *5432*. Resten kan står på default. 

Når PostgreSQL er installert må det opprettes en postgres bruker som heter webkom og en database med samme navn og passord. Dette kan gjøres på ulike måter enten gjennom *pg_admin* eller *psql shell*.

**Pg Admin:**

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

**psql shell**

For å opprette brukeren og databasen i terminalen istedenfor å bruke pg Admin må psql shell brukes. Søk opp psql i start menuen og åpne psql terminalen. Inne i psql terminalen kan du følge oppskriften som også brukes for MacOS beskrevet nedenfor.

**MacOS**

PostgreSQL for MacOS lastes ned ved hjelp av Homebrew. Her er det viktig å laste ned en postgres versjon som kjører på riktig port. Jeg anbefaler derfor å laste ned versjon 15. Kjør kommandoen nedenfor.

```
brew install postgresql@15
```

Når postgres er installert skrives det ut en melding i terminalen med diverse kommandoer som må kjøres for å fullføre installasjoenen. Disse kommandoene må kjøres for å starte PostgreSQL og til å psql til path. Skjekk installasjonen ved å kjøre kommandoen under.

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

## Last ned kode

### Backend

For å laste ned backend koden må du opprette en mappe PCen din, helst ikke på icloud eller onedrive. Åpne terminalen i denne mappen og kjør kommandoen under.

```
git clone git@github.com:HoiskolensChemikerforening/hc-backend.git
```

Denne kommandoen laster ned en mappe som heter `hc-backend` som inneholder koden. Naviger inn i denne mappen (i terminalen) ved å kjøre kommandoen under.

```
cd hc-backend
```

I denne mappen må det opprettes et virtual environment for å ha en avkoblet Python versjon ansvarlig for å kjøre backend koden. Dette gjøres ved å kjøre kommandoen under. 

**Windows** 

```
py -3.7 -m venv venv
```

```
.\venv\Scripts\activate
```

**MacOS**

```
python3.7 -m venv venv
```

```
source venv/bin/activate
```

Den første kommandoen over opprette en ny mappe som heter `venv` i `hc-backend` som innholder en avkoblet versjon av Python 3.7. Den andre kommandoen aktiverer denne versjoen. Dobbel skjekk at det står `(venv)` i terminalen nå.

Nå kan vi fortsette med å installere de nødvendige pakkene ved hjelp av `pip`. HC nettsiden bruker mange forskjellige pakker. Å installere hver pakke for seg hadde derfor tatt lang tid. Heldigvis finnes det en kommando som kan installere alle pakker automatisk. 

```
pip install -r requirements/development.txt
```







