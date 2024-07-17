export type Prefecture = {
  code: number,
  name: string,
  name_e: string,
  name_h: string,
  name_k: string,
  area: string,
  url: string,
}

export type City = {
  prefecture_kana: string,
  city_kana: string,
  city: string,
  url: string,
}

export type PostalCode = {
  postcode_type: string,
  jis: string,
  old: string,
  new: string,
  prefecture_kana: string,
  city_kana: string,
  suburb_kana: string,
  prefecture: string,
  city: string,
  suburb: string,
  street_address: string | null,
  office: string | null,
  office_kana: string | null,
  office_roman: string | null,
  is_separated_suburb: number,
  is_koaza: number,
  is_chome: number,
  is_include_area: number,
  prefecture_roman: string,
  city_roman: string,
  suburb_roman: string,
  status: number,
  reason: number,
  url: string
}

export async function allPrefectures(): Promise<Prefecture[]> {
  const res = await fetch(`https://postcode.teraren.com/prefectures.json`)
  const data = await res.json()
  return data
}

export async function allCitiesInPrefecture(code: number): Promise<City[]> {
  const res = await fetch(`https://postcode.teraren.com/prefectures/${code}.json`)
  const data = await res.json()
  return data
}

export async function allPostalCodesInCity(code:number, city: string): Promise<PostalCode[]> {
  const res = await fetch(`https://postcode.teraren.com/prefectures/${code}/cities/${city}.json`)
  const data = await res.json()
  return data
}

export async function getPrefecturesForSelect(code: number | undefined) {
  const prefectures = await allPrefectures()
  if (code) {
    return prefectures.filter((prefecture => prefecture.code === code))
  } else {
    return prefectures
  }
}

export async function getCitiesForSelect(code: number | undefined, city: string | undefined) {
  if (code) {
    const allCities = await allCitiesInPrefecture(code)
    if (city) {
      return allCities.filter((myCity) => myCity.city === city)
    } else {
      return allCities
    }
  } else {
    return []
  }
}

export async function getPostalCodesForSelect(code: number | undefined, city: string | undefined) {
  if (code && city) {
    return allPostalCodesInCity(code, city)
  } else {
    return []
  }
}
