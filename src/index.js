import Template from "./Templates/template";
import Cards from "./Templates/cards";
import "./assets/index.scss";

(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Template();
    const carousel = null || document.getElementById('carousel-container');
    carousel.innerHTML = await Cards();
})();