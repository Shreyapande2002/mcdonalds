import React from "react";
import '../Styles/Discovery.css';

function Discovery() {
  return (
    <div className="discovery-container">
      <header className="discovery-header">
        <h1>McDonald's Discovery</h1>
      </header>
      <section className="discovery-content">
        <div className="discovery-description">
          <h2>About McDonald's</h2>
          <p>
            McDonald's is one of the largest and most recognizable fast-food chains in the world. Founded in 1940,
            McDonald's has grown to become a global leader in the fast-food industry, known for its iconic golden arches
            and a wide variety of menu items that cater to people of all ages.
          </p>
        </div>
        <div className="discovery-food">
          <h2>Popular McDonald's Foods</h2>
          <ul>
            <li>
              <h3>Big Mac</h3>
              <p>The Big Mac is a classic burger that features two beef patties, special sauce, lettuce, cheese, pickles, and onions on a sesame seed bun.</p>
            </li>
            <li>
              <h3>French Fries</h3>
              <p>McDonald's French fries are world-famous for their unique taste and crispy texture, made from high-quality potatoes.</p>
            </li>
            <li>
              <h3>Chicken McNuggets</h3>
              <p>These bite-sized pieces of tender chicken are coated in a crispy batter, perfect for dipping in your favorite sauce.</p>
            </li>
            <li>
              <h3>Egg McMuffin</h3>
              <p>A popular breakfast choice, the Egg McMuffin features a freshly cracked egg, Canadian bacon, and American cheese on a toasted English muffin.</p>
            </li>
            <li>
              <h3>McFlurry</h3>
              <p>A delicious ice cream treat mixed with your choice of candy or cookie pieces, perfect for satisfying your sweet tooth.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Discovery;
