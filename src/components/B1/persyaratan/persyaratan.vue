<template>
    <div class="card">
      <div class="card-body">
          <div class="mb-3">
              <label for="nama" class="form-label4">Nama</label>
              <input type="hidden" v-model="this.form.id_persyaratan" class="form-control3" id="id_persyaratan">
              <input type="text" v-model="this.form.nama_persyaratan" class="form-control3" id="nama_persyaratan">
          </div>
          <div class="mb-3">
            <label for="deskripsi-text" class="form-label5">Deskripsi</label>
            <textarea class="form-control5" v-model="this.form.deskripsi_persyaratan" id="deskripsi-text" rows="3"></textarea>
          </div>
            <button class="button-edit" type="button" v-on:click="Update(form)">Submit</button>
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            <form v-on:submit.prevent="PostItem">
                <div class="mb-3">
                    <label for="nama" class="col-form-label4">Id Persyaratan</label>
                    <input v-model="form.id_persyaratan" type="text" class="form-control3" id="nama_persyaratan">
                </div>
                <div class="mb-3">
                    <label for="nama" class="col-form-label4">Nama</label>
                    <input v-model="form.nama_persyaratan" type="text" class="form-control3" id="nama_persyaratan">
                </div>
                <div class="mb-3">
                    <label for="id_jenis_persyaratan" class="col-form-label4">Id Jenis Persyaratan</label>
                    <input v-model="form.id_jenis_persyaratan" type="text" class="form-control3" id="id_jenis_persyaratan"> 
                </div>
                <div class="mb-3">
                    <label for="deskripsi" class="col-form-label4">Deskripsi</label>
                    <input v-model="form.deskripsi_persyaratan" type="text" class="form-control3" id="deskripsi_persyaratan"> 
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
      </div>
  
      <div class="table-content">
        <div style="float: right;">
          <label class="search-label">
            <input class="search-bar" type="text" placeholder="Search..">
          </label>
          <h5 class="label-persyaratan">Total persyaratan : {{ resultCount }}</h5>
        </div>
          <table class="table table-boordered">
              <thead>
                  <tr>
                      <th class="label-tabel" scope="col">Nama persyaratan</th>
                      <th class="label-tabel" scope="col"> </th>
                      <th class="label-tabel" scope="col"> </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="persyaratan in persyaratans" :key="persyaratan.id_persyaratan">
                      <td class="label-tabel1">{{ persyaratan.nama_persyaratan }}</td>
                      <td> </td>
                      <td>
                        <button class="button" type="button" v-on:click="Edit(persyaratan)" name="button">Edit</button>
                        <button class="button" type="button" v-on:click="Delete(persyaratan)" name="button"> Delete </button>
                        <button class="button" type="button" v-on:click="getDetails(persyaratan)" name="button" data-bs-toggle="modal" data-bs-target="#detailsModal"> Details </button>
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
                                    <forminput type="text" class="form-control1" id="nama">{{ this.form.nama_persyaratan }}</forminput>
                                    <!-- <input type="text" class="form-control" id="nama"> -->
                                  </div>
                                  <div class="mb-3">
                                    <label for="deskripsi-text" class="col-form-label2">Deskripsi</label>
                                    <textarea  class="form-control2" id="deskripsi-text" v-model="this.form.deskripsi_persyaratan"></textarea>
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
            id_persyaratan: "",
            id_jenis_persyaratan: "",
            nama_persyaratan: "",
            deskripsi_persyaratan: "",
            stuatus_persyaratan: "",
        },
        persyaratans: [],
      }
    },
    methods: {
      getItem() {
        axios
          .get('http://localhost:3000')
          .then((response) => {
            this.persyaratans = response.data.data
            console.log(response.data.data)
          })
          .catch((error) => {
            console.log('Error Get Data', error)
          })
      },
      PostItem : function() {
        alert("Ke Save Bro")
        try {
            axios
            .post("http://localhost:3000/", this.form)
            .then((response) => {
            this.form = [...this.form,response.persyaratan]
            this.form.id_persyaratan = "";
            this.form.id_jenis_persyaratan = "";
            this.form.nama_persyaratan = "";
            this.form.deskripsi_persyaratan = "";
            this.form.stuatus_persyaratan = "";
            })  
        } 
        catch (error) {
            // console.log(error);
        }
       },
      getDetails(persyaratan) {
        this.form.id_persyaratan = persyaratan.id_persyaratan;
        this.form.nama_persyaratan = persyaratan.nama_persyaratan;
        this.form.deskripsi_persyaratan = persyaratan.deskripsi_persyaratan;
        this.form.stuatus_persyaratan = persyaratan.stuatus_persyaratan;
      },
       Edit(persyaratan) {
          this.updateSubmit = true;
          this.form.id_persyaratan = persyaratan.id_persyaratan;
          this.form.nama_persyaratan = persyaratan.nama_persyaratan;
          this.form.deskripsi_persyaratan = persyaratan.deskripsi_persyaratan;
          this.form.stuatus_persyaratan = persyaratan.stuatus_persyaratan;
        },
        Update(form) {
          console.log("TEST")
          console.log("ini formnya ", form.nama_persyaratan)
                  axios
                  .patch(`http://localhost:3000/${form.id_persyaratan}`, {
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
              Delete(persyaratan) {
               axios
                  .delete("http://localhost:3000/" + persyaratan.id_persyaratan)
                  .then(() => {
                      this.getItem();
                      this.form.nama_persyaratan = "";
                      alert("Data berhasil terhapus");
                  })
                  .catch(() => {
                      console.log("Error Hapus Data");
                      alert("test")
                  });
              }
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
  
  <style>
  .table-content{
    display: block;
    margin: 30px 90px;
  }
  .label-tabel{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  
    color: #FFFFFF;
  }
  .label-tabel1{
    position:relative;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  
    color: #000000;
  }
  .button{
    border-radius: 5px;
    color: #ECECEC;
    border: none;
    margin: 5px;
    width: 98px;
    height: 37px;
    left: 1045px;
    top: 369px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color:black;
  }
  .search-label {
    position: relative;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  
    color: #727272;
  }
  .search-label:before {
    content: "";
    position: absolute;
    left: 85%;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url('../../../assets/image/search.png') center / contain no-repeat;
  }
  
  .search-bar{
    width: 13rem;
    height: 2rem;
    background: #ECECEC;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 8px ;
    margin: 2.5rem 0;
    padding: 10px 30px;
  }
  
  thead > tr{
    background-color:  #36ACAF;
  }
  .label-kategori{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  
    color: #000000;
  }
  
  .modal-dialog{
    left: 0px;
    top: 80px;
  }
  
  .col-form-label1{
    margin-right: 80%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    line-height: 16px;
  
    color: #727272;
  }
  .col-form-label2{
    margin-top: 35px;
    margin-right: 80%;
    margin-left: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 16px;
  
    color: #727272;
  }
  .form-control1{
    box-sizing: border-box;
  
    position: absolute;
    width: 440px;
    height: 29px;
    left: 26px;
    top: 45px;
  
    background: #FFFFFF;
    border: 1px solid #309C9F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
  
    font-family: 'Inter';
    font-style: normal;
    text-indent: 25px;
    text-align: left;
    font-weight: 160;
    font-size: 18px;
    line-height: 25px;
    margin-left: 7px;
  
    color:#727272;
  }
  .form-control2{
    box-sizing: border-box;
  
    width: 450px;
    height: 210px;
    left: 10px;
    top: 60px;
  
    background: #FFFFFF;
    border: 1px solid #309C9F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
  
    font-family: 'Inter';
    font-style: normal;
    text-indent: 26px;
    font-weight: 160;
    font-size: 18px;
    line-height: 30px;
    margin-left: 7px;
  
    color:#727272;
  }
  /* .close {
    border:none;
    width: 0%; 
    height: 0%;
  
    color:#FFFFFF;
  } */
  .image-button{
    width: 5%; 
    height: 3%;
  }
  </style>
  