import getData from "@utils/getData";

const Template = async () => {
    const data = await getData();
    const view = `
    <header>
    <h1 class="title">My Carousel</h1>
    </header>
    <main>
        <h2>Main content</h2>
        <div class="container">
            <div class="carousel-container" id="carousel-container">
                
                </div>
            </div>
        </div>
        
    </main>
    <footer>
        <h3>Thank you</h3>
    </footer>
    `;
    return view;
}

export default Template;