import React from "react";

function Books(props) {
  const { data } = props;
  return (
    <div style={{ lineHeight: 2.2 }}>
      <ol>
        {data.docs.map((book, index) => {
          const keys = Object.keys(book).filter((element) => {
            if (element === "name" || element === "_id") {
              return false;
            } else {
              return true;
            }
          });

          return (
            <React.Fragment key={index}>
              <li>
                <b>{book.name}</b>
              </li>
              {keys.map((title, i) => (
                <ul>
                  <li key={i}>
                    {title}: {book[title]}
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

export default Books;
