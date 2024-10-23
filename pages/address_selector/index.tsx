import Layout from "@/components/Layout";
import {ChangeEvent, useEffect, useState} from "react";
import {AddressSelectorProps} from "@/pages/api/address_selector";
import AddressTechNav from "@/components/address/AddressTechNav";

export default function AddressSelectorPage() {
  const [code, setCode] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [optionsData, setOptionsData] = useState<AddressSelectorProps>({
    prefectureOptions: [],
    cityOptions: [],
    postalCodeOptions: []
  })

  useEffect(() => {
    const query = {code, city}
    const urlString = new URLSearchParams(query).toString()
    fetch(`/api/address_selector?${urlString}`)
      .then(res => res.json() as Promise<AddressSelectorProps>)
      .then(data => {
        setOptionsData(data)
      })
  }, [code, city])

  function handleCodeChange(event: ChangeEvent<HTMLSelectElement>) {
    setCode(event.target.value)
  }

  function handleCityChange(event: ChangeEvent<HTMLSelectElement>) {
    setCity(event.target.value)
  }

  return (<Layout>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="demo-h1">住所入力UI: Next.js useEffect</h1>
            <AddressTechNav selected="use_effect"/>
            <form>
              <div className="space-y-12">
                <div className="pb-12">
                  <h2 className="mt-10 demo-h2 text-orange-600">ここのメニューがインタラクティブ</h2>
                  <div id="address-selector"
                       className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-2 sm:col-start-1">
                      <label htmlFor="code"
                             className="block text-sm font-medium leading-6 text-gray-900">Prefecture</label>
                      <div className="mt-2">
                        <select id="code"
                                name="code"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                onChange={handleCodeChange}
                                defaultValue={code}
                        >
                          {!code && <option value="">---</option>}
                          {optionsData.prefectureOptions.map((prefectureOption, index) => (
                            <option key={index}
                                    value={prefectureOption.code.toString()}>{prefectureOption.name}</option>
                          ))}
                        </select>
                        <div className="mt-6">
                          <a href="/address_selector"
                             className="border border-orange-600 rounded p-1 text-orange-600">
                            Clear
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                      <div className="mt-2">
                        <select name="city"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                onChange={handleCityChange}
                                defaultValue={city}
                        >
                          {!city && <option value="">---</option>}
                          {optionsData.cityOptions.map((cityOption, index) => (
                            <option key={index} value={cityOption.city}>{cityOption.city}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="postal_code" className="block text-sm font-medium leading-6 text-gray-900">Postal
                        code</label>
                      <div className="mt-2">
                        <select name="postal_code"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option value="">---</option>
                          {optionsData.postalCodeOptions.map((postalCodeOption, index) => (
                            <option key={index} value={postalCodeOption.new}>{postalCodeOption.new}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
