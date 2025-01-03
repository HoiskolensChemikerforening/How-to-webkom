# Velkommen til Webkomiteen

Gratulerer med opptak i Webkomiteen den nest beste komiteen i HC (Sportskom <3). I løpet av de neste årene kommer du til å lære utrulig mye kult og denne guiden skal hjelpe deg med å komme i gang. Selv om jeg har vært i Webkomiteen i snart 3 år finnes det fortsatt oppgaver jeg ikke har vært borte i før. I mine øyene er Webkoms hovedoppgave å vedlikeholde kunnskap. Dere kommer til å lære mye nytt i starten som kan føles litt overveldene, men det er absolutt ikke forventet at dere husker alt første gangen, dette kommer med tiden. Progammering er mengdetrening. Still spørsmål, se på gammel kode og spør Chat eller Google så kommer dette til å gå fint.  





## Installer programvare

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


### Git

Git er et program som brukes for å holde oversikt over ulike versjoner av koden. På denne måten kan vi alltid gå tilbake til en gammel versjon av nettsiden dersom vi har klart å ødlegge noe. I tillegg til dette jobber alle i Webkom på sin kopi av nettsiden. Git sørger også for at ulike endringer ikke ødlegger for andre. Git kan lastes ned for Windows gjennom Git's sine [nettsider](https://git-scm.com/). Last ned installeren og følg instruksjonene. For å skjekke at Git har blitt installert riktig kan du kjøre kommandoen nedenfor.

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





## Last ned kode

I Webkomiteen jobber vi med mange ulike kodeprosjekter som alle ligger på GitHuben vårt. For å komme i gang med komiteearbeidet er det derfor viktig å laste ned koden for både frondend og backend prosjektene. 

### Backend

For å laste ned backend koden må du opprette en mappe på PCen din, helst ikke på icloud eller onedrive. Åpne terminalen i denne mappen og kjør kommandoen under.

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

Når pakkene er installert må vi synkronisere databasen med nettsiden ved å kjøre følgene kommando.

```
python manage.py migrate
```

Du trenger også en admin bruker i din lokal database. Denne kan opprettes med følgene kommando. Denne brukeren eksisterer kun i din lokal database. Det er dermed ikke viktig å velge et trygt passord. E-postaddressen kan også være en tulle e-postaddresse.

```
python manage.py createsuperuser
```


Vi må også load inn data i databasen.


Mac: 

```
python manage.py loaddata chemie/fixtures/*.json
```

Windows:

```
python manage.py loaddata chemie/fixtures/email-templates.json
```

```
python manage.py loaddata chemie/fixtures/flatpages.json
```

```
python manage.py loaddata chemie/fixtures/sites.json
```

Nettsiden kjøres med følgene kommando. Trykk på linken som skrives ut i terminalen for å åpne siden.



```
python manage.py runserver
```

Gå inn på adminsiden ved å skrive in linken [127.0.0.1:8000/admin](127.0.0.1:8000/admin). Dette krever at du logger deg inn med brukeren du har opprettet tidligere. Vær obs på at innloggingen bare fungere på admin siden og ikke gjennom den valige innloggingssiden. Trykk på **Brukere** under **Autentisering og Autorisasjon**. Trykk på brukeren din å legg til profilinformasjon for alle feltene i bold skrift. 

Trykk **strg+C** eller **control+C** på mac for å avslutte kjøringen.

Åpne **hc-backend** mappen i VS-code. VS-code skal automatisk gjenkjenne ditt virtual environment. Åpne et terminal i VS-code og check at det står `venv` i terminalen. 

Om det ikke står (venv) i terminalen din kan den aktiveres ved å kjøre:

Mac:

```
source venv/bin/activate
```

Windows:

```
.\venv\Scripts\activate
```

Når dere ønsker å kjøre nettsiden i fremtiden kan dere gjøre det gjennom VS-code terminalen ved å kjøre. 

```
python manage.py runserver
```

### Frontend



- lag frondend mappe

- åpne terminal mappens plassering

- git clone sshhcfronted link 

- åpne hc-frontend i vs code

- npm install

- npm start 



<div id="Windows" class="tab-block"></div>

{% include "getting-started/windows.md" %}
   
<div id="MacOS" class="tab-block"></div>

{% include "getting-started/mac.md" %}

<div id="Linux" class="tab-block"></div>

{% include "getting-started/linux.md" %}

<div  class="tab-end"></div>


<div class="tab-block"></div>

windows
   
<div  class="tab-block"></div>

mac

<div  class="tab-block"></div>

linux

<div  class="tab-end"></div>

hei
  




