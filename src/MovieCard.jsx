import React from 'react';

export default function MovieCard({ movie }) {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXMzMzPz8+Tk5PLy8vExMSRkZG/v7+rq6vHx8e7u7uurq6Wlpaenp6hoaG3t7fIyMigoKDX3g4sAAAEjklEQVR4nO3d65LbKBAFYBoQLe56/6dNN0hj2btxapLdCVN1vqrEGlloOOIieX5gYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFZB4rb9O+XoM+W+zt7ceG0lVz8qSLHmI/6irhTieHWcM88z6CnYL5fR1a3ra7KieN0Mumnj+3I+FxrF9diqe4gfp1gINWs1YbA5hWoPqbXLlkOyeX9brlpNSMmW2MrWaJyiySnqYo3Y80go1z/KGKrWSx/dmKTqo9Y/IweNNuwlO6LdFqeZ9RRHXqsRiTOPXjo7WtiSxhxvPRpjTh9Ps0jPXDRhGNdBLofE2vQUFN5emS9H0cakCb1NWq+eK/WiXdXQUfo8KOaiM0nKt6qzNZpQOmkYh9h2RfOZV0roSqWRUKuoPx/lqqK07tXdqsb3ObuPckH2aC+9DtIL1LYxN/XRtquQJvAj4VU9U/PVnFfziJCzDtRbE8qFmAlrHg3dLct5xvGu5oUS+i2ZK+GMI73PbzPhtUv3bum8OQwj/Ex45LnL1jkWjbb4QgmrdLyZ8Kwe8XZOHk8J95wP+3gE2C2bM2GZDUZZE47bC9VtnYRRp3epmcz39zY8e2n76KXjpnm7zXHuUk7GG1Gdg9Ot2YZSPRbFVvYf41AT8ss41Fa7NaHZipaThzW+xuG+5jik8cBls9zzw9NcWl/mUm3aeb+ctqtcfsylvOJcSi0puRckv8+G0xdJORLm636oAepxm0p5lMs5pbMrazo6Z6izC6yBBh2HZx6paSOZbbRd/G3k1S3KQ+dLOR2HZx65lcjTnj3ceYq/Eebn5h1fRp3cOHyxuz6J1U7ymeH6cEFBH7J5TkCPcuP24Q4bSJ6M6og5TpH7v/yWv2kmlNEnE06ZPeywhQ9bPh5hDg3r7e2ZxlwJpZvKhJPH1RinyCt10onmkzdFmXC2OkLsWSeS68OTXIKRhTd+Knc+AiSZd65nBCm28dN1WAn5xPGsnWvcHn3N/WPjqVxIKdDjFP9nHf/U7dPRp/7e8lTuv6wQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8b999kbq3q+y1XZddfD1ifIPCWGjx5Sz6//P+BXjWlRJvVTo3aS4VqQlva2F2XUMzMHMiXYOyyg9z/1hvMXDqxN7ov3WESOxi8hTNTsFTS87E1kxKRCGxJqypyTvGRf2iCSLfqHmiIi/FnN8gIZGCXCznWY6mUMMvfutX0oQhOTbNV5d6Cz4RR0reN5/MoWu/lt6iY9klCWtrrAml7ybPyc2ELtFscEomNc9xqYSVYwwkdW2pSTjtgExUmZuEP3upNF1ruvbunvoeZkKWltKEms2NjtwCERt2ta2VMEq/S4GleXZpndB80IHXog87+6IJS0jB7IeOrV3X5z8TGm/0unh5odQkd+eg14i8WyrhrivVem0rGUjSJ4Nsav1C67I76JquQdpYrsJYTFtidj8P1HKmS9s62YxN32lx7t/ffnfImkL9hpX+lGXXFgb4Qz8A4OwipRTT1y4AAAAASUVORK5CYII='
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}
