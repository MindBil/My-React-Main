const App = () => {
//returne turi buti JSX
//JSX - java script + html
  return (<div>
    <header>
      <img class="himg" src="https://www.esencialcostarica.com/eng/wp-content/uploads/2022/09/site-logo-.jpeg" alt="" />
    </header>
    <nav>
        <a href="">Home</a>
        <a href="">Product</a>
        <a href="">Company</a>
        <a href="">Contact</a>
      </nav>
      <article>
        <p>Header Image</p>
      </article>
      <section class="miniArticles">
        <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro nostrum vitae amet possimus, aperiam praesentium itaque veniam sit quia, ipsa et iure, ratione a. Incidunt ea vel vitae sint?</p>
        </div>

        <div>
        <h1>Company</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro nostrum vitae amet possimus, aperiam praesentium itaque veniam sit quia, ipsa et iure, ratione a. Incidunt ea vel vitae sint?</p>
        </div>

        <div>
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro nostrum vitae amet possimus, aperiam praesentium itaque veniam sit quia, ipsa et iure, ratione a. Incidunt ea vel vitae sint?</p>
        </div>
      </section>

      <section class="mainArticles">
        <div class="mainArticleWrapper">
      <h1>Content</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro nostrum vitae amet possimus, aperiam praesentium itaque veniam sit quia, ipsa et iure, ratione a. Incidunt ea vel vitae sint?</p>

        <h2>Sub Header</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro nostrum vitae amet possimus, aperiam praesentium itaque veniam sit quia, ipsa et iure, ratione a. Incidunt ea vel vitae sint?</p>
        </div>
        <aside>
          <h1>Navigation</h1>
          <a href="">Home</a><br />
        <a href="">Product</a><br />
        <a href="">Company</a><br />
        <a href="">Contact</a>
        </aside>

      </section>
  </div>);
}

export default App;