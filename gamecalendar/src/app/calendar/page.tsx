import '@globals/globals.css'
import 'tailwindcss/tailwind.css'

export default async function Calendar() {
  const games = await getGames()
  return (
    <div className="p-5 gap-x-5 gap-y-5 w-full flex flex-row flex-wrap">
      {games.map((game) => (
        <div key={game.title} className="flex-none max-w-sm  w-80 w-lg rounded overflow-hidden shadow-lg">
          <img className="object-cover w-full h-60" src={`${game.imageUrl}`} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl">{game.title}</div>
            <p className="text-gray-500 text-base mb-2">Release: {game.releaseDate}</p>
            <p className="text-gray-700 text-base line-clamp-4">{game.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {game.platforms.map((plat) => (
              <span key={game.title + plat} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {plat}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const getGames = async () => {
  const games = [
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
    {
      title: "Baldur's Gate 3",
      releaseDate: '16/08/2023',
      imageUrl: 'https://img.ibxk.com.br/2023/07/18/18011932810000.jpg?ims=704x',
      description:
        'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
      platforms: ['Mac', 'PC', 'PS5'],
    },
  ]
  return games
}
