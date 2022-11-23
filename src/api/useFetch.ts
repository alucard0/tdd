import useSWR from "swr"

interface UseFetch<T> {
  key: string
  fetcher: () => Promise<T>
}

interface Response<T> {
  data: T | undefined
  error: string | undefined
  isValidating: boolean
}

export const useFetch = <T>({ key, fetcher }: UseFetch<T>): Response<T> => {
  const { data, error, isValidating } = useSWR<T>(key, fetcher)
  return { data, error, isValidating }
}
