<template>
  <div class="card">
    <div class="card-body">
        <div class="mb-3">
            <label for="nama" class="form-label4">Nama</label>
            <input type="hidden" v-model="this.form.id_kategori" class="form-control3" id="id">
            <input type="text" v-model="this.form.nama_kategori" class="form-control3" id="nama">
        </div>
        <div class="mb-3">
          <label for="deskripsi-text" class="form-label5">Deskripsi</label>
          <textarea class="form-control5" v-model="this.form.deskripsi_kategori" id="deskripsi-text" rows="3"></textarea>
        </div>
          <button class="button-edit" type="button" v-on:click="Update(form)">Submit</button>
      </div>
    </div>
</template>
   
  <style>
  .card{
    box-sizing: border-box;

    width: 780px;
    height: 500px;
    left: 250px;
    top: 35px;

    background: #FFFFFF;
    border: 1px solid #309C9F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
  }
  
  .form-label4{
    margin-right: 70%;
    width: 50px;
    height: 24px;
    left: 472px;
    top: 167px;
  
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  
    color: #727272;
  }
  
  .form-control3{
    box-sizing: border-box;
  
    width: 615px;
    height: 38px;
    left: 0px;
    top: 500px;
  
    background: #FFFFFF;
    border: 1px solid #309C9F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }
  
  .form-label5{
    margin-right: 67%;
    width: 87px;
    height: 24px;
    left: 472px;
    top: 200px;
  
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  
    color: #727272;
  }
  
  .form-control5{
    box-sizing: border-box;
  
    width: 615px;
    height: 250px;
    left: 453px;
    top: 312px;
  
    background: #FFFFFF;
    border: 1px solid #309C9F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }
  
  .button{
    margin-left: 66%;
    width: 100px;
    height: 38px;
    bottom: 177px;
    border:none;
  
    background: #309C9F;
    border-radius: 10px;
  
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    /* identical to box height */
  
    color: #FFFFFF;
  }
  </style>
  
  <script>
  import axios from 'axios'
  export default {
  name: 'FormControl',
  data() {
    return {
      form: {
        id_kategori: "",
        nama_kategori: "",
        deskripsi_kategori: "",
      },
      kategoris: [],
    }
  },
  Edit(kategori) {
    this.updateSubmit = true;
    this.form.id_kategori = kategori.id_kategori;
    this.form.nama_kategori = kategori.nama_kategori;
    this.form.deskripsi_kategori = kategori.deskripsi_kategori;
  },
  Update(form) {
    axios
      .patch(`http://localhost:3011/kategori/${form.id}`, {
        nama: this.form.nama_kategori,
        deskripsi_kategori: this.form.deskripsi_kategori
    })
    .then(() => {
      this.getItem();
      this.form.id_kategori= "";
      this.form.nama_kategori = "";
      this.form.deskripsi_kategori = "";
      alert("Data terupdate...");
    })
    .catch((err) => {
      console.log(err);
      console.warn();
      alert("!Error update data");
    });
  }
}
</script>

  
  