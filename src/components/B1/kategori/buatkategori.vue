<template>
  <div class="card">
  <div class="card-body">
    <form @submit.prevent="PostItem">
      <div class="mb-3">
          <label for="nama" class="form-label1">Nama</label>
          <input v-model="form.id_kategori" type="hidden" id="id">
          <input v-model="form.nama_kategori" type="text" class="form-control1" id="nama">
      </div>
      <div class="mb-3">
        <label for="deskripsi-text" class="form-label2">Deskripsi</label>
        <textarea v-model="form.deskripsi_kategori" class="form-control2" id="deskripsi-text" rows="3"></textarea>
      </div>
        <button type="submit" class="button">Submit</button>
    </form>
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

.form-label1{
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

.form-control1{
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

.form-label2{
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

.form-control2{
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
        id_kategori:"",
        nama_kategori: "",
        deskripsi_kategori: "",
      },
      kategoris: [],
    }
  },
  methods: {
    PostItem() {
        axios
          .post("http://localhost:3011/kategori", this.form)
          .then(() => {
          this.getItem();
          this.form.nama_kategori = "";
          this.form.deskripsi_kategori ="",
          alert("saved data");
        })
        .catch((err) => {
          console.log(err);
          alert("saving  error");
        });
      },
      showAlert() {
      // Use sweetalert2
      this.$swal('Data berhasil terbuat');
    },
    }
  }
</script>

