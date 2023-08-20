"use client";

import Link from "next/link";
import { useState } from "react";

async function fetchWeton(tgl, bln, thn) {
  const d = await fetch(`https://api.dotmydotid.my.id/api/weton?tanggal=${tgl}&bulan=${bln}&tahun=${thn}`)
  const res = await d.json();
  return res;
}

export default function Home() {
  let [m, setM] = useState();
  let [java, setJava] = useState();
  let [pasaran, setPasaran] = useState();
  let [bobot, setBobot] = useState();
  let [res, setRes] = useState();
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    let { laki, perempuan } = e.target;
    laki = laki.value.split("-");
    perempuan = perempuan.value.split("-");

    const manWeton = await fetchWeton(laki[2], laki[1], laki[0]);
    const womanWeton = await fetchWeton(perempuan[2], perempuan[1], perempuan[0]);

    setM({ man: manWeton.date, woman: womanWeton.date });
    setJava({ man: manWeton.tanggal_lahir.jawa, woman: womanWeton.tanggal_lahir.jawa });
    setPasaran({ man: manWeton.pasaran, woman: womanWeton.pasaran });
    setBobot({ man: manWeton.bobot_weton, woman: womanWeton.bobot_weton});
    setRes({ man: manWeton.bobot_weton.bobot, woman: womanWeton.bobot_weton.bobot, total: manWeton.bobot_weton.bobot + womanWeton.bobot_weton.bobot  })
  }

  return (
    <div className="p-4 md:p-8 max-w-xl m-auto">
        <div className="font-mono mt-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold">📅 Ngitung Weton Jodoh</h2>
            </div>

            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-4">
                  <label className="block">
                      <span className="after:content-['_*'] after:text-red-500">👨 Tanggal Lahir si Laki-Laki</span>
                      <input type="date" name="laki" className="input input-bordered rounded-lg block w-full" />
                  </label>
                  <label className="block">
                      <span className="after:content-['_*'] after:text-red-500">👩 Tanggal Lahir si Perempuan</span>
                      <input type="date" name="perempuan" className="input input-bordered rounded-lg block w-full" />
                  </label>
              </div>
              <button className="btn btn-accent btn-block font-normal text-white" type="submit">Hitung</button>
            </form>

            <div className="w-full pt-8 pb-4">
              <h2 className="text-xl">👨 Laki Laki</h2>
              <ul className="list-disc pl-8">
                <li>Tanggalan Masehi: {m?.man}</li>
                <li>Tanggalan Jawa: {java?.man}</li>
                <li className="font-bold">{pasaran?.man}: {bobot?.man.saptawara} + {bobot?.man.pancawara} = {bobot?.man.bobot}</li>
              </ul>
            </div>

            <div className="w-full py-4">
              <h2 className="text-xl">👩 Perempuan</h2>
              <ul className="list-disc pl-8">
                <li>Tanggalan Masehi: {m?.woman}</li>
                <li>Tanggalan Jawa: {java?.woman}</li>
                <li className="font-bold">{pasaran?.woman}: {bobot?.woman.saptawara} + {bobot?.woman.pancawara} = {bobot?.woman.bobot}</li>
              </ul>
            </div>

            <div className="w-full py-4">
              <h2 className="text-xl">📅 Hasil</h2>
              <div className="px-4">
                <h3 className="text-xl font-bold my-4 text-white"><span className="p-1 bg-secondary rounded">{res?.man} + {res?.woman} = {res?.total} (Padu)</span></h3>
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
