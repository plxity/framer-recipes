function Particles() {
  return (
    <>
      {Array.from({ length: 15 }).map((_, index) => (
        <svg
          key={`star-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute left-1/2 top-1/2 opacity-0 star-${index}`}
          height="10"
          width="10"
          viewBox="0 0 256 256"
        >
          <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
        </svg>
      ))}
      {Array.from({ length: 15 }).map((_, index) => (
        <svg
          key={`sparkle-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
          height="10"
          width="10"
          viewBox="0 0 256 256"
        >
          <path d="M208,144a15.78,15.78,0,0,1-10.42,14.94l-51.65,19-19,51.61a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88l51.65-19,19-51.61a15.92,15.92,0,0,1,29.88,0l19,51.65,51.61,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"></path>
        </svg>
      ))}
      {Array.from({ length: 15 }).map((_, index) => (
        <svg
          key={`star-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute left-1/2 top-1/2 opacity-0 star-four-${index}`}
          height="10"
          width="10"
          viewBox="0 0 256 256"
        >
          <path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.93,166,26.5,143a16,16,0,0,1,0-30L90,89.93,113,26.5a16,16,0,0,1,30,0L166.07,90,229.5,113A15.79,15.79,0,0,1,240,128Z"></path>
        </svg>
      ))}

      {Array.from({ length: 15 }).map((_, index) => (
        <svg
          key={`circle-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute left-1/2 top-1/2 opacity-0 circle-${index}`}
          height="10"
          width="10"
          viewBox="0 0 256 256"
        >
          <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path>
        </svg>
      ))}
    </>
  );
}

export default Particles;
