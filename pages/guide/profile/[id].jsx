import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../../components/afterlogin/navbar";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function id() {
  const router = useRouter();
  const { id } = router.query;
  const [input, setInput] = useState(false);

  const handleChange = async (e) => {
    await setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [guide, setGuide] = useState(false);

  const getGuide = async (e) => {
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/guides/${id}`;

    try {
      const response = await axios({
        method: "GET",
        url: api,
        headers: {
          authorization: `Bearer ${Cookies.get("pramunesiaAppTokenGuide")}`,
        },
      });
      await setGuide(response.data);
    } catch (error) {}
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/guides/${id}`;

    try {
      const response = await axios({
        url: api,
        method: "PATCH",
        headers: {
          authorization: `Bearer ${Cookies.get("pramunesiaAppTokenGuide")}`,
        },
        data: input,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${"update successfully"}`,
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/guide/profile");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getGuide();
    }
  }, [id]);
  return (
    <div className="container mx-auto">
      <Navigation />
      <h3 className="text-center mb-3">Profile</h3>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="d-flex flex-column justify-content-center align-items-center h-75  bg-soft-peace rounded">
            <div className="rounded-circle overflow-hidden">
              <Image
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                width="100"
                height="100"
              />
            </div>
            <h4>Nama {guide ? guide.name : null}</h4>
            <span>
              <Link href="/">Ubah Foto Profil</Link>
            </span>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ms-auto rounded">
          <div className="p-4 text-white bg-firefly rounded">
            <form method="post" onSubmit={handleUpdate}>
              <div className="mb-3">
                <label htmlFor="lisensi" className="form-label">
                  No. KTA/Lisensi{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lisensi"
                  placeholder="Masukan No. KTA/Lisensi"
                  defaultValue={guide ? guide.noKta : null}
                  disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="namaLengkap" className="form-label">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="namaLengkap"
                  placeholder="Masukan Nama Lengkap"
                  name="name"
                  defaultValue={guide ? guide.name : null}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Masukan Email"
                  name="email"
                  defaultValue={guide ? guide.email : null}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="noTelepon" className="form-label">
                  No Telepon
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="noTelepon"
                  placeholder="Masukan No Telepon"
                  name="noTelp"
                  defaultValue={guide ? guide.noTelp : null}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="alamat" className="form-label">
                  Alamat
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="alamat"
                  placeholder="Masukan Alamat"
                  name="alamat"
                  defaultValue={guide ? guide.alamat : null}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="provinsi" className="form-label">
                  Provinsi
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukan Provinsi"
                  name="province"
                  defaultValue={guide ? guide.province : null}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="kota" className="form-label">
                  Kota
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukan Provinsi"
                  name="city"
                  defaultValue={guide ? guide.city : null}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="organization" className="form-label">
                  Organisasi/Lembaga/Individu
                </label>
                <select
                  className="form-select"
                  aria-label="Pilih "
                  name="status"
                  defaultValue={guide ? guide.status : null}
                  onChange={handleChange}
                >
                  <option>Pilih Status</option>
                  <option value="Organisasi">Organisasi</option>
                  <option value="Lembaga">Lembaga</option>
                  <option value="Individu">Individu</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Masukan Email"
                />
              </div>
              <div className="mb-3 mt-5 d-flex justify-content-center">
                <button type="submit" className="btn-orange">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
