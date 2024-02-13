import React from "react";

function Movies(props) {
  const { data, search } = props;

  const filteredCharacters = data.docs.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ lineHeight: 2.2 }}>
      <ol>
        {filteredCharacters.map((movie, index) => {
          const keys = Object.keys(movie).filter((element) => {
            if (element === "name" || element === "_id") {
              return false;
            } else {
              return true;
            }
          });

          return (
            <React.Fragment key={index}>
              <li>
                <b>{movie.name}</b>
              </li>
              {keys.map((title, i) => (
                <ul>
                  <li key={i}>
                    {title}: {movie[title]}
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

export default Movies;
