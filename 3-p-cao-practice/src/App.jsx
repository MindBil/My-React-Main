import Card from "./components/Card";
import Hero from "./components/Hero";
import Article from "./components/Article";

const App = () => {
  const cardArray = [];

  for (let i = 0; i < 3; i++) {
    cardArray.push(
      <Card className="card"
        key={i}
        subtitle="Ipsum Feugiat"
        imageUrl="https://www.splitshire.com/wp-content/uploads/2018/05/SplitShire-02889.jpg"
      />
    );
  }

  for (let i = 0; i < 3; i++) {
    cardArray.push(
      <Card
        key={i}
        subtitle="Rhoncus Semper"
        imageUrl="https://images.unsplash.com/photo-1473163162601-1dc5c6676070?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMjc1NDl8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
      />
    );
  }

  return (
    <div>
      <Hero
        imageUrl="https://static.vecteezy.com/system/resources/previews/003/001/573/large_2x/abstract-blur-beach-sea-at-sunrise-or-sunset-time-for-background-free-photo.jpg"
        title="Title"
        subtitle="Some about text"
        secondSubtitle="In two lines"
        buttonText="Button"
      />
      <br />

      <Article 
        title="Portfolio"
        subtitle="What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <br />

      {cardArray}
      <br />
      
    </div>
  );
};

export default App;