## Terminalen

Terminalen kan brukes til mange ulike formål. Hittil har vi for eksempel brukt terminalen til å laste ned filer, installere programvare eller bare for å navigere gjennom ulike filer på PCen. Dette var nødvendig for å installere programvare og kode. Instruksen for installasjon av programvare og nedlasting av kode krevde ikke noe form av forståelse, men det er lurt å ha en viss grunnforståelse av de mest vanlige kommandoene for fremtidig komitearbeid. 


Det finnes mange ulike terminal typer. Windows bruker for eksempel **cmd** og **PowerShell**. På Mac er det valig å bruke **zsh** eller **bash** som også den mest valige terminaltypen på Linux systemer. Kommandoer som fungere i bash fungerer ikke automatisk også i PowerShell. Det er derfor ikke mulig å lære seg kommandoer som fungere universell for alle terminal typer. Serveren som kjører HC-nettsiden bruker et Linux system. Det holder derfor ikke å lære seg kommandoene for bare et operativ system (med mindre du også bruker Linux privat). Heldigvis er bash terminalen også tilgengelig på MacOS. I tillegg til dette er forskjellen mellom zsh og bash neglisjerbar. MacOS brukere trenger derfor ikke å lære seg to ulike set av kommandoer. Windows brukerer derimot burde beherske begge terminaltyper. 

Det er viktig å forstå at alt som er lagret på PCen din befinner seg i ulike mapper på hardisken din. Mappestukturen er hierarkisk og starter i root mappen / eller C:. Filer som ligger i denne mappen kan ofte ikke endres uten spesielle rettigheter. Alle andre filene på PCen ligger i submapper og har dermed en unik filsti som beskriver veien fra root mappen til filen. For eksempel *C:\Users\paulj\Downloads*. Terminalen kan brukes for å navigere og endre filer på denne filstien ved å hoppe fra mappe til mappe.  

Denne siden innholder en liste med nytte kommandoer for **bash** og **PowerShell**. 

<div class="tabs">
  <input class="tab-radio" type="radio" id="tab1" name="tab" checked>
  <input class="tab-radio" type="radio" id="tab2" name="tab">
  <div class="tab-labels">
    <label class="tab-label active" for="tab1">Bash</label>
    <label class="tab-label" for="tab2">PowerShell</label>
  </div>
</div>


<!-- Bash -->
<div class="tab-block"></div>

- **pwd:** Viser hvor vi befinner oss på PCen. For eksempel */home/paul/*.
- **ls:** Viser alle filer og mapper som befinder seg i mappen vi er i akkruat nå.
- **ls <dirpath\>:** Viser alle filer og mapper som befinder seg i mappen <dirpath\>.
- **cd**: Hopp til root mappen */*.
- **cd <dirname\>**: Hopp inn i en mappe med navn <dirname\>.
- **cd <dirpath\>**: Hopp til en mappe som ligger under <filepath\>.
- **cd ..**: Hopp ut av mappen vi er i akkruat nå.
- **nano <filename\>:** Åpne Nano (Texteditor) for å endre innholdet av filen <filename\>.  
- **source <filename\>:** Kjør et script <filename\>. 
- **source venv/bin/activate:** Aktiver et virtual environment (Forutsetter at terminalen befinner seg i mappen som innholder venv mappen). 

<!-- PowerShell -->
<div class="tab-block"></div>

- **pwd:** Viser hvor vi befinner oss på PCen. For eksempel */home/paul/*.
- **ls:** Viser alle filer og mapper som befinder seg i mappen vi er i akkruat nå.
- **ls <dirpath\>:** Viser alle filer og mapper som befinder seg i mappen <dirpath\>.
- **cd**: Hopp til root mappen */*.
- **cd <dirname\>**: Hopp inn i en mappe med navn <dirname\>.
- **cd <dirpath\>**: Hopp til en mappe som ligger under <filepath\>.
- **cd ..**: Hopp ut av mappen vi er i akkruat nå.
- **.\venv\bin\activate:** Aktiver et virtual environment (Forutsetter at terminalen befinner seg i mappen som innholder venv mappen). 


<!-- End -->
<div class="tab-end"></div>
<!-- End -->
