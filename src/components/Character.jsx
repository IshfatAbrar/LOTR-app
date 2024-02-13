import React from "react";
import styles from "./character.module.css"; // Import CSS file for component styling

function Character(props) {
  const { data, search } = props;

  const handleClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    // Additional logic if needed
  };

  // Filter characters based on the search input
  const filteredCharacters = data.docs.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <ol>
        {filteredCharacters.map((character, index) => {
          // Use filteredCharacters instead of data.docs
          console.log(Object.keys(character));
          const keys = Object.keys(character).filter((element) => {
            if (element === "name" || element === "_id") {
              return false;
            }
            if (!character[element]) {
              return false;
            } else {
              return (
                character[element] !== undefined && character[element] !== null
              );
            }
          });

          return (
            <React.Fragment key={index}>
              <li>
                <b>{character.name}</b>
              </li>
              {keys.map((title, i) => (
                <ul key={i} className={styles.list}>
                  <li>
                    {title}:{" "}
                    {title === "wikiUrl" ? (
                      <a
                        href={character[title]}
                        onClick={handleClick}
                        className={styles.link}
                      >
                        {character[title].split("//")[1]}{" "}
                        {/* Extract display part of the URL */}
                      </a>
                    ) : (
                      character[title]
                    )}
                  </li>
                </ul>
              ))}
            </React.Fragment>
          );
        })}
      </ol>
    </div>
  );
}

export default Character;
