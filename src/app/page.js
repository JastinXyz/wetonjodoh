import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 md:p-8 max-w-xl m-auto">
        <div className="font-mono mt-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold">📅 Ngitung Weton Jodoh</h2>
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-4">
                  <label className="block">
                      <span className="text-gray-700 after:content-['_*'] after:text-red-500">👨 Tanggal Lahir si Laki-Laki</span>
                      <input type="date" name="laki" className="input input-bordered rounded-lg block w-full" />
                  </label>
                  <label className="block">
                      <span className="text-gray-700 after:content-['_*'] after:text-red-500">👩 Tanggal Lahir si Perempuan</span>
                      <input type="date" name="perempuan" className="input input-bordered rounded-lg block w-full" />
                  </label>
              </div>
              <button className="btn btn-accent btn-block font-normal text-white">Hitung</button>
            </div>

            <div className="w-full pt-8 pb-4">
              <h2 className="text-xl">👨 Laki Laki</h2>
              <ul class="list-disc pl-8">
                <li>Tanggalan Masehi: Jumat, 16 November 2007</li>
                <li>Tanggalan Jawa: 6 Dulkaidah 1940, Jemuwah Pahing</li>
                <li className="font-bold">Jumat Paing: 6 + 5 = 11</li>
              </ul>
            </div>

            <div className="w-full py-4">
              <h2 className="text-xl">👩 Perempuan</h2>
              <ul class="list-disc pl-8">
                <li>Tanggalan Masehi: Jumat, 16 November 2007</li>
                <li>Tanggalan Jawa: 6 Dulkaidah 1940, Jemuwah Pahing</li>
                <li className="font-bold">Jumat Paing: 6 + 5 = 11</li>
              </ul>
            </div>

            <div className="w-full py-4">
              <h2 className="text-xl">📅 Hasil</h2>
              <div className="px-4">
                <h3 className="text-xl font-bold my-4 text-white"><span className="p-1 bg-secondary rounded">11 + 11 = 22 (Padu)</span></h3>
                <h3 className="text-xl">1. Pegat</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>

            <div className="text-center pt-8 text-sm">
                <p>
                    <Link href="https://github.com/JastinXyz/wetonjodoh" target="__blank" className="text-indigo-500 underline">🐈 Github</Link>
                    ·
                    <Link href="https://jstnlt.my.id" target="__blank" className="text-indigo-500 underline">jstnlt.my.id</Link>
                </p>
            </div>
        </div>
    </div>
  )
}
