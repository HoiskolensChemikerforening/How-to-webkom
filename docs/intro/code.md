## Last ned kode

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

<!-- Windows -->
<div class="tab-block"></div>

<!-- Mac -->
<div class="tab-block"></div>

<!-- Linux -->
<div class="tab-block"></div>

<!-- End -->
<div class="tab-end"></div>
<!-- End -->


I Webkomiteen jobber vi med mange ulike kodeprosjekter som alle ligger på [GitHub](https://github.com/HoiskolensChemikerforening). For å komme i gang med komiteearbeidet er det derfor viktig å laste ned koden for både frontend og backend prosjektene. 

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

<!-- Windows -->
<div class="tab-block"></div>

```
py -3.7 -m venv venv
```

```
.\venv\Scripts\activate
```

<!-- Mac -->
<div class="tab-block"></div>

```
python3.7 -m venv venv
```

```
source venv/bin/activate
```

<!-- Linux -->
<div class="tab-block"></div>

```
python3.7 -m venv venv
```

```
source venv/bin/activate
```

<!-- End -->
<div class="tab-end"></div>
<!-- End -->



Den første kommandoen over oppretter en ny mappe som heter `venv` i `hc-backend` som innholder en avkoblet versjon av Python 3.7. Den andre kommandoen aktiverer denne versjoen. Dobbel skjekk at det står `(venv)` i terminalen nå.

Nå kan vi fortsette med å installere de nødvendige pakkene ved hjelp av `pip`. HC nettsiden bruker mange forskjellige pakker. Å installere hver pakke for seg hadde derfor tatt lang tid. Heldigvis finnes det en kommando som kan installere alle pakker automatisk. 

```
pip install -r requirements/development.txt
```

Når pakkene er installert må vi synkronisere databasen med vår lokal kopi av nettsiden ved å kjøre følgene kommando.

```
python manage.py migrate
```

Du trenger også en admin bruker i din lokal database. Denne kan opprettes med følgene kommando. Denne brukeren eksisterer kun i din lokal database. Det er dermed ikke viktig å velge et trygt passord. E-postaddressen kan også bli valgt tilfeldig.

```
python manage.py createsuperuser
```


Noen undersider og e-post maler er lagret som JSON objekter (ser for deg et stort python dictionary med masse data). Disse må lastes inn i databasen før bruk. 

<!-- Windows -->
<div class="tab-block"></div>

```
python manage.py loaddata chemie/fixtures/email-templates.json
```

```
python manage.py loaddata chemie/fixtures/flatpages.json
```

```
python manage.py loaddata chemie/fixtures/sites.json
```


<!-- Mac -->
<div class="tab-block"></div>

```
python manage.py loaddata chemie/fixtures/*.json
```

<!-- Linux -->
<div class="tab-block"></div>

```
python manage.py loaddata chemie/fixtures/*.json
```

<!-- End -->
<div class="tab-end"></div>
<!-- End -->


Nå er vi nesten i mål, for å kjøre nettsiden brukes det følgene kommando. Trykk på linken som skrives ut i terminalen for å åpne siden.



```
python manage.py runserver
```

Gå inn på adminsiden ved å åpne [127.0.0.1:8000/admin](127.0.0.1:8000/admin). Dette krever at du logger deg inn med brukeren du har opprettet tidligere. Vær obs på at innloggingen bare fungere på admin siden og ikke gjennom den valige innloggingssiden. Trykk på **Brukere** under **Autentisering og Autorisasjon**. Deretter trykker du på brukeren din for å legge til profilinformasjon for alle feltene i bold skrift. Dette er viktig for å kunne bruke den valige påloggingssiden i fremtiden.

<!-- Windows -->
<div class="tab-block"></div>

Trykk **ctrl+C** for å avslutte kjøringen.

<!-- Mac -->
<div class="tab-block"></div>

Trykk  **control+C** for å avslutte kjøringen.

<!-- Linux -->
<div class="tab-block"></div>

Trykk **ctrl+C** for å avslutte kjøringen.

<!-- End -->
<div class="tab-end"></div>
<!-- End -->

Åpne **hc-backend** mappen i VS-code. VS-code skal automatisk gjenkjenne ditt virtual environment. Åpne et terminal i VS-code og check at det står `venv` i terminalen. Om det ikke står (venv) i terminalen din kan den aktiveres ved å kjøre:

<!-- Windows -->
<div class="tab-block"></div>

```
.\venv\Scripts\activate
```

<!-- Mac -->
<div class="tab-block"></div>

```
source venv/bin/activate
```

<!-- Linux -->
<div class="tab-block"></div>

```
source venv/bin/activate
```

<!-- End -->
<div class="tab-end"></div>
<!-- End -->


Når dere ønsker å kjøre nettsiden i fremtiden kan dere gjøre det gjennom VS-code terminalen ved å kjøre. 

```
python manage.py runserver
```

### Frontend

Fremgangsmåten for å installere frontend prosjektet likner på fremgangmåten for backend prosjektet, men er kanskje litt mindre komplisert. 

Vi starter igjen med å lage en mappe, igjen helst ikke på icloud eller onedrive. Jeg pleier å legge frontend prosjektet i en mappe ved siden av backend koden. Åpne terminalen i denne mappen og kjør kommandoen under.

```
git clone git@github.com:HoiskolensChemikerforening/hc-frontend.git
```

Denne kommandoen laster ned en mappe som heter hc-frontend som inneholder koden for frontend prosjektet. Naviger inn i denne mappen (i terminalen) ved å kjøre kommandoen under.

```
cd hc-frontend
```

Frontend prosjektet krever også en del pakker, men denne gangen er det ikke Python pakker. Vi bruker derfor ikke et virtual environment. Kjør:

```
npm install
```

For å starte frontend prosjektet er det nødvendig å ha backend prosjektet kjørende i bakgrunnen. Frontend prosjektet bruker noe som kalles for API for å kommunisere med backend prosjektet. Backend prosjektet kjøres ved å kjøre følgene kommando i VS-Code terminalen (hc-backend prosjektet må være åpen i VS-Code).

```
python manage.py runserver
```

For å starte frontend prosjektet kan vi nå kjøre følgende kommando i terminalen vi har brukt for å laste ned frontend koden.

```
npm start 
```

Vi kan også åpne hc-frontend mappen i et nytt VS-Code vindu og kjøre siden gjennom VS-Code terminalen.





  

