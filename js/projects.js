const projects = {

    workplace: {
        number: "01",
        title: "Workplace",

        short: "System administracyjno-magazynowy do obsługi procesów magazynowych.",

        content: `
            <h2>Opis projektu</h2>

            <p>
                Kompleksowy system administracyjno-magazynowy zbudowany
                w oparciu o Python i Django. System został zaprojektowany
                do obsługi oraz monitorowania procesów magazynowych.
            </p>

            <p>
                Aplikacja umożliwia między innymi obsługę załadunku,
                przenoszenie towarów pomiędzy lokalizacjami oraz
                przeprowadzanie inwentaryzacji.
            </p>

            <h2>Technologie</h2>

            <div class="project-tech-list">

                <div class="tech-item">
                    <i class="devicon-python-plain"></i>
                    <span>Python</span>
                </div>

                <div class="tech-item">
                    <i class="devicon-django-plain"></i>
                    <span>Django</span>
                </div>

                <div class="tech-item">
                    <i class="devicon-javascript-plain"></i>
                    <span>JavaScript</span>
                </div>

                <div class="tech-item">
                    <i class="devicon-mariadb-original"></i>
                    <span>MariaDB</span>
                </div>

                <div class="tech-item">
                    <i class="devicon-docker-plain"></i>
                    <span>Docker</span>
                </div>

            </div>

            <h2>Funkcjonalności</h2>

            <ul>
                <li>obsługa załadunku towarów</li>
                <li>przenoszenie towarów pomiędzy lokalizacjami</li>
                <li>inwentaryzacja</li>
                <li>monitorowanie procesów magazynowych</li>
                <li>zarządzanie użytkownikami</li>
                <li>rejestrowanie błędów systemowych</li>
                <li>szczegółowe logi API</li>
            </ul>
            <h2>Kod źródłowy</h2>
            <p class="project-private">
                <i class="fa-solid fa-lock"></i>
                Projekt wykonany dla ZAP Rachunkowość Sp. z o.o. — kod źródłowy prywatny.
            </p>
        `
    },
    workplace_zam: {
    number: "02",
    title: "Workplace — Zamówienia",
    short: "Produkcyjny system do składania, zarządzania i obsługi zamówień przez kontrahentów.",
    content: `
        <h2>Opis projektu</h2>

        <p>
            Workplace — Zamówienia to produkcyjny system webowy
            przeznaczony do obsługi procesu składania zamówień
            przez kontrahentów.
        </p>

        <p>
            Aplikacja umożliwia przeglądanie dostępnych produktów,
            filtrowanie oferty, tworzenie zamówień poprzez dodawanie
            odpowiednich pozycji oraz przeglądanie wcześniej złożonych
            zamówień.
        </p>

        <h2>Technologie</h2>

        <div class="project-tech-list">

            <div class="tech-item">
                <i class="devicon-python-plain"></i>
                <span>Python</span>
            </div>

            <div class="tech-item">
                <i class="devicon-django-plain"></i>
                <span>Django</span>
            </div>

            <div class="tech-item">
                <i class="devicon-javascript-plain"></i>
                <span>JavaScript</span>
            </div>

            <div class="tech-item">
                <i class="devicon-html5-plain"></i>
                <span>HTML</span>
            </div>

            <div class="tech-item">
                <i class="devicon-css3-plain"></i>
                <span>CSS</span>
            </div>

            <div class="tech-item">
                <i class="devicon-mariadb-original"></i>
                <span>MariaDB</span>
            </div>

            <div class="tech-item">
                <i class="devicon-docker-plain"></i>
                <span>Docker</span>
            </div>

        </div>

        <h2>Obsługa zamówień</h2>

        <ul>
            <li>przeglądanie dostępnych produktów</li>
            <li>filtrowanie produktów</li>
            <li>wybór produktów do zamówienia</li>
            <li>dodawanie i zarządzanie pozycjami zamówienia</li>
            <li>tworzenie nowych zamówień</li>
            <li>wyświetlanie złożonych zamówień</li>
            <li>przeglądanie szczegółów zamówień</li>
        </ul>

        <h2>Administracja</h2>

        <p>
            System posiada rozbudowaną część administracyjną
            umożliwiającą zarządzanie użytkownikami oraz obsługę
            danych wykorzystywanych przez aplikację.
        </p>

        <ul>
            <li>zarządzanie użytkownikami</li>
            <li>przechowywanie danych użytkowników w MariaDB</li>
            <li>obsługa danych systemowych</li>
            <li>monitorowanie i obsługa błędów</li>
        </ul>

        <h2>Obsługa błędów</h2>

        <p>
            Aplikacja posiada mechanizmy rejestrowania oraz obsługi
            błędów występujących podczas działania systemu.
            Pozwala to na monitorowanie problemów i ułatwia
            diagnozowanie nieprawidłowości.
        </p>

        <h2>Automatyczne tłumaczenie</h2>

        <p>
            System posiada również mechanizm automatycznego
            tłumaczenia treści. Wykorzystywany jest wielopoziomowy
            cache, dzięki któremu wcześniej przetłumaczone treści
            mogą być ponownie wykorzystane.
        </p>

        <p>
            Tłumaczenia są wyszukiwane kolejno w pamięci aplikacji
            oraz w bazie danych, a w przypadku braku odpowiedniego
            wpisu system korzysta z zewnętrznych usług tłumaczeniowych.
        </p>

        <h2>Kod źródłowy</h2>
        <p class="project-private">
            <i class="fa-solid fa-lock"></i>
            Projekt wykonany dla ZAP Rachunkowość Sp. z o.o. — kod źródłowy prywatny.
        </p>
        `
    },

    aizap: {
        number: "03",
        title: "AiZap",

        short: "Lokalny system AI wykorzystujący architekturę RAG.",

        content: `
            <h2>Opis projektu</h2>

            <p>
                Lokalny system sztucznej inteligencji wykorzystujący
                architekturę RAG do wyszukiwania informacji oraz
                generowania odpowiedzi na podstawie dokumentacji.
            </p>

            <p>
                System wykorzystuje lokalne modele językowe (JollyLlama/Mistral-Small-3.1-24B:Q4_K_S),
                embeddingi (bge-m3) oraz bazę wektorową (ChromaDB).
            </p>

            <h2>Technologie</h2>

            <div class="project-tech-list">

                <div class="tech-item">
                    <i class="devicon-python-plain"></i>
                    <span>Python</span>
                </div>

                <div class="tech-item">
                    <i class="devicon-fastapi-plain"></i>
                    <span>FastAPI</span>
                </div>

                <div class="tech-item">
                    <i class="fa-solid fa-brain"></i>
                    <span>RAG</span>
                </div>

                <div class="tech-item">
                    <i class="fa-solid fa-robot"></i>
                    <span>Ollama</span>
                </div>

            </div>

            <h2>Funkcjonalności</h2>

            <ul>
                <li>wyszukiwanie semantyczne</li>
                <li>generowanie odpowiedzi na podstawie dokumentacji</li>
                <li>lokalne modele językowe</li>
                <li>embeddingi</li>
                <li>baza wektorowa</li>
            </ul>
            <h2>Kod źródłowy</h2>
            <p class="project-private">
                <i class="fa-solid fa-lock"></i>
                Projekt wykonany dla ZAP Rachunkowość Sp. z o.o. — kod źródłowy prywatny.
            </p>
        `
    },
    catdog: {
        number: "04",
        title: "CatDog AI",
        short: "System klasyfikacji obrazów wykorzystujący uczenie maszynowe do rozpoznawania kotów i psów.",
        content: `
            <h2>Opis projektu</h2>

            <p>
                CatDog AI to projekt wykorzystujący uczenie maszynowe
                do automatycznej klasyfikacji obrazów. System analizuje
                przesłane zdjęcie i określa, czy przedstawia ono kota
                czy psa.
            </p>

            <p>
                Aplikacja została zbudowana jako API w FastAPI.
                Obraz przesłany przez użytkownika jest przetwarzany
                za pomocą OpenCV, a następnie przekazywany do
                wytrenowanego modelu XGBoost.
            </p>

            <h2>Technologie</h2>

            <div class="project-tech-list">

                <div class="tech-item">
                    <i class="devicon-python-plain"></i>
                    <span>Python</span>
                </div>

                <div class="tech-item">
                    <i class="devicon-fastapi-plain"></i>
                    <span>FastAPI</span>
                </div>

                <div class="tech-item">
                    <i class="devicon-opencv-plain"></i>
                    <span>OpenCV</span>
                </div>

                <div class="tech-item">
                    <i class="fa-solid fa-brain"></i>
                    <span>XGBoost</span>
                </div>

                <div class="tech-item">
                    <i class="devicon-mysql-original"></i>
                    <span>MySQL</span>
                </div>

                <div class="tech-item">
                    <i class="devicon-sqlite-plain"></i>
                    <span>SQLite</span>
                </div>

                <div class="tech-item">
                    <i class="devicon-numpy-plain"></i>
                    <span>NumPy</span>
                </div>

            </div>

            <h2>Przetwarzanie obrazu</h2>

            <p>
                Przed przekazaniem obrazu do modelu dane są przetwarzane
                za pomocą OpenCV. Obraz jest dekodowany, a następnie
                skalowany do rozmiaru 128 × 128 pikseli.
            </p>

            <p>
                Tak przygotowane dane są przekształcane do postaci
                wektora cech, który może zostać wykorzystany przez
                model XGBoost.
            </p>

            <h2>Model uczenia maszynowego</h2>

            <p>
                Do klasyfikacji wykorzystano model XGBoost
                <strong>XGBClassifier</strong>. Dane treningowe są
                pobierane z bazy MySQL, przetwarzane do odpowiedniego
                formatu, a następnie wykorzystywane do trenowania modelu.
            </p>

            <p>
                Po zakończeniu treningu model jest zapisywany lokalnie
                za pomocą biblioteki Joblib i może być później
                wykorzystywany do wykonywania predykcji.
            </p>

            <h2>API</h2>

            <p>
                System udostępnia endpoint FastAPI:
            </p>

            <pre><code>POST /aii</code></pre>

            <p>
                Endpoint przyjmuje obraz jako plik, zapisuje go lokalnie,
                wykonuje predykcję za pomocą wytrenowanego modelu
                i zwraca wynik klasyfikacji.
            </p>

            <h2>Przykładowa odpowiedź</h2>

            <pre><code>{
        "filename": "image.jpg",
        "message": "kot"
    }</code></pre>

            <h2>Baza danych</h2>

            <p>
                Dane treningowe obrazów przechowywane są w bazie MySQL.
                Dla każdego obrazu zapisywane są przetworzone dane
                oraz odpowiadająca im etykieta.
            </p>

            <p>
                Projekt wykorzystuje również SQLite do przechowywania
                kluczy aplikacji.
            </p>

            <h2>Funkcjonalności</h2>

            <ul>
                <li>przesyłanie obrazów przez API</li>
                <li>automatyczna klasyfikacja kota lub psa</li>
                <li>przetwarzanie obrazów za pomocą OpenCV</li>
                <li>trenowanie modelu XGBoost</li>
                <li>zapisywanie wytrenowanego modelu</li>
                <li>przechowywanie danych treningowych w MySQL</li>
                <li>obsługa kluczy aplikacji przez SQLite</li>
                <li>udostępnienie modelu poprzez API FastAPI</li>
            </ul>
            <h2>Kod źródłowy</h2>
            <p class="project-private">
                <i class="fa-solid fa-lock-open"></i>
                Projekt publiczny — kod źródłowy jest dostępny na: <a target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                    href="https://github.com/CatStackLab/dogcatai-api.git"
                    >

                        https://github.com/CatStackLab/dogcatai-api.git

                </a>
            </p>
        `
    },
    ocr: {
    number: "05",
    title: "OCR - wykrywanie fragmentów numerycznych",
    short: "Narzędzie do automatycznego wykrywania i oznaczania elementów na obrazach z wykorzystaniem technologii OCR.",
    content: `
        <h2>Opis projektu</h2>

        <p>
            OCR Document Tool to desktopowa aplikacja służąca do
            automatycznego wykrywania tekstu na obrazach oraz
            przygotowywania oznaczonej dokumentacji na podstawie
            wykrytych elementów.
        </p>

        <p>
            Aplikacja wykorzystuje EasyOCR do rozpoznawania tekstu
            oraz OpenCV do przetwarzania obrazu. Wykryte fragmenty
            zawierające wartości numeryczne są automatycznie
            zaznaczane, a użytkownik może następnie ręcznie
            skorygować wykryte obszary.
        </p>

        <h2>Technologie</h2>

        <div class="project-tech-list">

            <div class="tech-item">
                <i class="devicon-python-plain"></i>
                <span>Python</span>
            </div>

            <div class="tech-item">
                <i class="devicon-opencv-plain"></i>
                <span>OpenCV</span>
            </div>

            <div class="tech-item">
                <i class="fa-solid fa-eye"></i>
                <span>EasyOCR</span>
            </div>

            <div class="tech-item">
                <i class="fa-solid fa-desktop"></i>
                <span>Tkinter</span>
            </div>

            <div class="tech-item">
                <i class="fa-solid fa-file-pdf"></i>
                <span>ReportLab</span>
            </div>

            <div class="tech-item">
                <i class="fa-solid fa-box"></i>
                <span>PyInstaller</span>
            </div>

        </div>

        <h2>Rozpoznawanie tekstu</h2>

        <p>
            Obraz może zostać przekazany do analizy w całości lub
            użytkownik może wcześniej zaznaczyć interesujący go
            fragment obrazu.
        </p>

        <p>
            Wybrany obszar jest skalowany przed wykonaniem analizy,
            a następnie przekształcany do skali szarości. Tak
            przygotowany obraz jest przekazywany do modelu EasyOCR,
            który wykrywa znajdujące się na nim fragmenty tekstu
            wraz z ich współrzędnymi.
        </p>

        <p>
            Wyniki OCR są następnie filtrowane. Aplikacja wyszukuje
            przede wszystkim fragmenty zawierające cyfry, a wykryte
            obszary są automatycznie zaznaczane na obrazie.
        </p>

        <h2>Interaktywna edycja</h2>

        <p>
            Po zakończeniu automatycznej analizy użytkownik może
            ręcznie uzupełniać lub modyfikować wykryte obszary.
            Prostokąty mogą być dodawane bezpośrednio za pomocą
            myszy.
        </p>

        <p>
            Aplikacja umożliwia również usuwanie zaznaczeń poprzez
            wskazanie odpowiedniego obszaru i użycie dedykowanej
            funkcji edycji.
        </p>

        <h2>Przetwarzanie obrazu</h2>

        <p>
            Do obsługi obrazów wykorzystano bibliotekę OpenCV.
            Program umożliwia wybór pliku wejściowego, wyświetlanie
            obrazu w interaktywnym oknie oraz zaznaczanie obszarów
            zainteresowania za pomocą myszy.
        </p>

        <p>
            Dla każdego wykrytego elementu zapisywany jest również
            odpowiedni fragment oryginalnego obrazu, który może
            zostać później wykorzystany podczas generowania
            dokumentacji.
        </p>

        <h2>Generowanie dokumentacji</h2>

        <p>
            Po zaakceptowaniu zaznaczeń aplikacja tworzy oznaczoną
            wersję obrazu. Każdy wykryty element otrzymuje własny
            numer, który jest umieszczany bezpośrednio na obrazie.
        </p>

        <p>
            Jednocześnie poszczególne fragmenty obrazu są zapisywane
            jako osobne pliki, a następnie wykorzystywane do
            automatycznego wygenerowania dokumentu PDF.
        </p>

        <h2>Generowanie PDF</h2>

        <p>
            Dokumentacja jest tworzona za pomocą biblioteki ReportLab.
            PDF zawiera kolejne wycięte fragmenty obrazu wraz z ich
            numeracją, dzięki czemu może służyć jako legenda lub
            dokumentacja analizowanego materiału.
        </p>

        <p>
            Wyniki są organizowane w katalogach na podstawie nazwy
            analizowanego pliku. Aplikacja zapisuje zarówno
            oznaczony obraz, jak i wygenerowany dokument PDF.
        </p>

        <h2>Przykładowy proces</h2>

        <pre><code>Obraz wejściowy
        ↓
Wybór obszaru lub analiza całego obrazu
        ↓
Przetwarzanie OpenCV
        ↓
EasyOCR
        ↓
Wykrycie tekstu
        ↓
Filtrowanie elementów zawierających cyfry
        ↓
Automatyczne zaznaczenie
        ↓
Ręczna korekta
        ↓
Numerowanie elementów
        ↓
Wycięcie fragmentów
        ↓
Generowanie PDF</code></pre>

        <h2>Funkcjonalności</h2>

        <ul>
            <li>wybór obrazu z poziomu aplikacji</li>
            <li>analiza całego obrazu za pomocą OCR</li>
            <li>analiza wybranego obszaru obrazu</li>
            <li>automatyczne wykrywanie tekstu za pomocą EasyOCR</li>
            <li>filtrowanie wyników zawierających wartości numeryczne</li>
            <li>automatyczne zaznaczanie wykrytych elementów</li>
            <li>ręczne dodawanie obszarów za pomocą myszy</li>
            <li>usuwanie niepotrzebnych zaznaczeń</li>
            <li>automatyczne numerowanie elementów</li>
            <li>zapisywanie wyciętych fragmentów obrazu</li>
            <li>generowanie oznaczonego obrazu</li>
            <li>generowanie dokumentacji PDF</li>
            <li>dystrybucja aplikacji jako samodzielnego pliku wykonywalnego</li>
        </ul>

        <h2>Kod źródłowy</h2>

        <p class="project-private">
            <i class="fa-solid fa-lock-open"></i>
            Projekt publiczny — kod źródłowy jest dostępny na: <a target="_blank"
                rel="noopener noreferrer"
                class="project-link"
                href="https://github.com/CatStackLab/OCR.git"
                >

                    https://github.com/CatStackLab/OCR.git

            </a>
        </p>
    `
},
};

const projectsPanel = document.getElementById("projects-panel");



const projectModal =
    document.getElementById("project-modal");

const projectModalClose =
    document.getElementById("project-modal-close");

const projectModalNumber =
    document.getElementById("project-modal-number");

const projectModalTitle =
    document.getElementById("project-modal-title");

const projectModalBody =
    document.getElementById("project-modal-body");


function openProject(id) {

    const project = projects[id];

    if (!project) {
        return;
    }

    projectModalNumber.textContent = project.number;

    projectModalTitle.textContent = project.title;

    projectModalBody.innerHTML = project.content;

    projectModal.classList.add("open");

    document.body.classList.add("modal-open");

}

projectModalClose.addEventListener("click", () => {

    projectModal.classList.remove("open");

    document.body.classList.remove("modal-open");

});

projectModal.addEventListener("click", event => {

    if (event.target === projectModal) {

        projectModal.classList.remove("open");

        document.body.classList.remove("modal-open");

    }

});

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        projectModal.classList.contains("open")
    ) {

        projectModal.classList.remove("open");

        document.body.classList.remove("modal-open");

    }

});