import { useFetch } from "src/api/useFetch"

type ResultsType = {
  name: string
  url: string
}

type ResponseType = {
  count: number
  next: string
  previous: string | null
  results: ResultsType[]
}

const fetcher = async (): Promise<ResponseType> => {
  const url = "https://pokeapi.co/api/v2/pokemon"
  const res = await fetch(url)
  return res.json()
}

const Pokemon = (): JSX.Element => {
  const { data, isValidating } = useFetch<ResponseType>({ key: "/pokemon/", fetcher })

  if (isValidating) return <p>Loading ...</p>

  return (
    <>
      <h1>Pokemon List</h1>
      {data?.results.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
    </>
  )
}

export default Pokemon
