<template>
     <div class="table-content">
        <div style="float: right;">
          <label class="search-label">
            <input class="search-bar" type="text" placeholder="Search..">
          </label>
          <h5 class="label-inreview">Total Artikel : {{ resultCount }}</h5>
        </div>
          <table class="table table-boordered">
              <thead>
                  <tr>
                      <th class="label-tabel" scope="col">Judul Artikel</th>
                      <th class="label-tabel" scope="col"> </th>
                      <th class="label-tabel" scope="col"> </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="inreview in inreviews" :key="inreview.id_artikel">
                      <td class="label-tabel1">{{ inreview.judul_artikel }}</td>
                      <td> </td>
                      <td>
                        <button class="button" type="button" v-on:click="Edit(inreview)" name="button">Edit</button>
                        <button class="button" type="button" v-on:click="Delete(inreview)" name="button"> Delete </button>
                        <button class="button" type="button" v-on:click="getDetails(inreview)" name="button" data-bs-toggle="modal" data-bs-target="#detailsModal"> Details </button>
                        <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <!-- <div class="image-button">
                                  <img src="../../../assets/image/close.png" />
                                </div> -->
                              </button>
                              
                              <div class="modal-body">
                                <form>
                                  <div class="mb-3">
                                    <label for="nama" class="col-form-label1">Nama</label>
                                    <forminput type="text" class="form-control1" id="nama">{{ this.form.judul_artikel }}</forminput>
                                    <!-- <input type="text" class="form-control" id="nama"> -->
                                  </div>
                                  <div class="mb-3">
                                    <label for="deskripsi-text" class="col-form-label2">Deskripsi</label>
                                    <textarea  class="form-control2" id="deskripsi-text" v-model="this.form.deskripsi_artikel"></textarea>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>  
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'FormControl',
    data() {
      return {
        form: {
            id_artikel: "",
            id_user: "",
            id_status_artikel: "",
            deskripsi_artikel: "",
            id_kategori: "",
            isi_artikel: "",
            judul_artikel: "",
            catatan_editor: "",
        },
        inreviews: [],
      }
    },
    methods: {
      getItem() {
        axios
          .get('http://localhost:3010/artikel/editor/inreview')
          .then((response) => {
            this.inreviews = response.data.data
            console.log(response.data.data)
          })
          .catch((error) => {
            console.log('Error Get Data', error)
          })
      },
      getDetails(inreview) {
        this.form.id_artikel = inreview.id_artikel;
        this.form.id_user = inreview.id_user;
        this.form.id_status_artikel = inreview.id_status_artikel;
        this.form.deskripsi_artikel = inreview.deskripsi_artikel;
        this.form.id_kategori = inreview.id_kategori;
        this.form.isi_artikel = inreview.isi_artikel;
        this.form.judul_artikel = inreview.judul_artikel;
        this.form.catatan_editor = inreview.catatan_editor;
        
    },
    Edit(inreview) {
        this.updateSubmit = true;
        this.form.id_artikel = inreview.id_artikel;
        this.form.id_user = inreview.id_user;
        this.form.id_status_artikel = inreview.id_status_artikel;
        this.form.deskripsi_artikel = inreview.deskripsi_artikel;
        this.form.id_kategori = inreview.id_kategori;
        this.form.isi_artikel = inreview.isi_artikel;
        this.form.judul_artikel = inreview.judul_artikel;
        this.form.catatan_editor = inreview.catatan_editor;

        },
        Tolak(form) {
          console.log("TEST")
          console.log("ini formnya ", form.judul_artikel)
                  axios
                  .patch(`http://localhost:3010/artikel/editor/denied/${form.id_artikel}`, {
                      catatan_editor: this.form.catatan_editor,
                      id_status_artikel: this.form.id_status_artikel
                  })
                  .then(() => {
                      this.getItem();
                      this.form.id_artikel= "";
                      this.form.judul_artikel = "";
                      this.form.deskripsi_persyaratan = "";
                      alert("Data terupdate...");
                  })
                  .catch((err) => {
                      console.log(err);
                      console.warn();
                       alert("!Error update data");
                  });
              },
        Terima(form) {
          console.log("TEST")
          console.log("ini formnya ", form.nama_persyaratan)
                  axios
                  .patch(`http://localhost:3010/artikel/editor/acc/${form.id_artikel}`, {
                      nama_persyaratan: this.form.nama_persyaratan,
                      deskripsi_persyaratan: this.form.deskripsi_persyaratan
                  })
                  .then(() => {
                      this.getItem();
                      this.form.id_persyaratan= "";
                      this.form.nama_persyaratan = "";
                      this.form.deskripsi_persyaratan = "";
                      alert("Data terupdate...");
                  })
                  .catch((err) => {
                      console.log(err);
                      console.warn();
                       alert("!Error update data");
                  });
              },
          },
          computed: {
            resultCount(){
              return this.persyaratans && this.persyaratans.length;
            }
          },
    mounted() {
      this.getItem()
      },
    }
</script>